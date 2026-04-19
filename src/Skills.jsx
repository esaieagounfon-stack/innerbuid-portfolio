import { useEffect, useRef, useState } from "react";

const categories = [
  {
    id: "frontend",
    label: "Front-End",
    color: "#97C459",
    border: "rgba(151,196,89,0.35)",
    bg: "rgba(55,109,17,0.10)",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 72 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    id: "design",
    label: "Design & UI",
    color: "#D4537E",
    border: "rgba(212,83,126,0.35)",
    bg: "rgba(212,83,126,0.08)",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 50 },
      { name: "UI/UX Principles", level: 55 },
      { name: "Canva", level: 80 },
    ],
  },
  {
    id: "tools",
    label: "Outils & Workflow",
    color: "#EF9F27",
    border: "rgba(239,159,39,0.35)",
    bg: "rgba(239,159,39,0.08)",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Vercel / Netlify", level: 70 },
      { name: "Terminal / CLI", level: 65 },
    ],
  },
];

const softSkills = [
  { label: "Autonomie", icon: "◈" },
  { label: "Curiosité", icon: "◈" },
  { label: "Rigueur", icon: "◈" },
  { label: "Adaptabilité", icon: "◈" },
  { label: "Travail d'équipe", icon: "◈" },
  { label: "Résolution de problèmes", icon: "◈" },
];

function SkillBar({ name, level, color, visible, delay }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        marginBottom: "6px",
      }}>
        <span style={{
          fontSize: "12px", color: "rgba(192,221,151,0.75)",
          fontFamily: "'JetBrains Mono', monospace",
        }}>{name}</span>
        <span style={{
          fontSize: "11px", color: color,
          fontFamily: "'JetBrains Mono', monospace",
          opacity: visible ? 1 : 0,
          transition: `opacity 0.4s ${delay + 0.4}s ease`,
        }}>{level}%</span>
      </div>
      <div style={{
        height: "4px", borderRadius: "999px",
        background: "rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%", borderRadius: "999px",
          background: color,
          width: visible ? `${level}%` : "0%",
          transition: `width 0.9s ${delay}s cubic-bezier(0.4,0,0.2,1)`,
          boxShadow: `0 0 8px ${color}55`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        position: "relative", overflow: "hidden",
        padding: "112px 0",
        background: "#0f1f0b",
        fontFamily: "'Syne', sans-serif",
      }}
    >
      {/* Séparateur haut */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(151,196,89,0.2), transparent)",
      }} />

      {/* Glow décoratif droit */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "5%", right: "-80px",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(239,159,39,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        {/* En-tête */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.5s ease",
          marginBottom: "12px",
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(239,159,39,0.55)",
          }}>— 03. Compétences</span>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "12px",
        }}>
          <h2 style={{
            fontSize: "clamp(32px,5vw,54px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.03em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s 0.1s ease",
          }}>
            <span style={{ color: "#EAF3DE" }}>Mon </span>
            <span style={{ color: "#EF9F27" }}>arsenal</span>
            <span style={{ color: "#97C459" }}>.</span>
          </h2>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px", color: "rgba(192,221,151,0.4)",
            maxWidth: "240px", lineHeight: 1.6,
            opacity: visible ? 1 : 0,
            transition: "all 0.6s 0.2s ease",
            textAlign: "right",
          }}>
            Je suis toujours en apprentissage.<br />Les % reflètent mon niveau actuel dans chaque language.
          </p>
        </div>

        {/* Grille des catégories */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}>
          {categories.map((cat, ci) => (
            <div
              key={cat.id}
              style={{
                borderRadius: "16px",
                border: `0.5px solid ${cat.border}`,
                background: cat.bg,
                padding: "28px 24px",
                backdropFilter: "blur(4px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `all 0.6s ${0.2 + ci * 0.1}s ease`,
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Accent coin */}
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, right: 0,
                width: "64px", height: "64px",
                background: `radial-gradient(circle at top right, ${cat.color}18, transparent 70%)`,
              }} />

              {/* Label catégorie */}
              <div style={{
                display: "flex", alignItems: "center", gap: "8px",
                marginBottom: "24px",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "2px",
                  background: cat.color,
                }} />
                <span style={{
                  fontSize: "12px", fontWeight: 600, color: cat.color,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>{cat.label}</span>
              </div>

              {/* Barres de compétences */}
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  visible={visible}
                  delay={0.3 + ci * 0.1 + si * 0.08}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s 0.6s ease",
          borderRadius: "16px",
          border: "0.5px solid rgba(55,109,17,0.2)",
          background: "rgba(13,26,10,0.6)",
          padding: "28px 28px 24px",
        }}>
          <p style={{
            fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(192,221,151,0.35)", marginBottom: "16px",
            fontFamily: "'JetBrains Mono', monospace",
          }}>Soft skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {softSkills.map((s, i) => (
              <span
                key={s.label}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "7px 16px", borderRadius: "999px",
                  border: "0.5px solid rgba(212,83,126,0.25)",
                  background: "rgba(212,83,126,0.05)",
                  color: "rgba(244,192,209,0.8)",
                  fontSize: "12px",
                  fontFamily: "'JetBrains Mono', monospace",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `all 0.4s ${0.7 + i * 0.06}s ease`,
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(212,83,126,0.12)";
                  e.currentTarget.style.borderColor = "rgba(212,83,126,0.5)";
                  e.currentTarget.style.color = "#F4C0D1";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(212,83,126,0.05)";
                  e.currentTarget.style.borderColor = "rgba(212,83,126,0.25)";
                  e.currentTarget.style.color = "rgba(244,192,209,0.8)";
                }}
              >
                <span style={{ color: "#D4537E", fontSize: "8px" }}>◈</span>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bloc apprentissage continu */}
        <div style={{
          marginTop: "20px",
          borderRadius: "12px",
          border: "0.5px solid rgba(250,199,117,0.2)",
          background: "rgba(239,159,39,0.04)",
          padding: "18px 24px",
          display: "flex", alignItems: "center", gap: "16px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s 0.9s ease",
        }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "8px", flexShrink: 0,
            background: "rgba(239,159,39,0.12)",
            border: "0.5px solid rgba(239,159,39,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px",
          }}>📚</div>
          <div>
            <p style={{
              fontSize: "13px", fontWeight: 600, color: "#FAC775", marginBottom: "2px",
            }}>Je continuE d'apprendre</p>
            <p style={{
              fontSize: "11px", color: "rgba(192,221,151,0.45)",
              fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.5,
            }}>
              Next.js · JavaScript · Node.js 
            </p>
          </div>
        </div>
      </div>

      {/* Séparateur bas */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(151,196,89,0.15), transparent)",
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}