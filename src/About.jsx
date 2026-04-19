import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "7", label: "Jours de challenge" },
  { value: "5+", label: "Projets réalisés" },
  { value: "3", label: "Stacks maîtrisées" },
  { value: "100%", label: "Passion & rigueur" },
];

const passions = [
  { icon: "", label: "Clean code" },
  { icon: "", label: "UI Design" },
  { icon: "", label: "Mobile-first" },
  { icon: "", label: "Performance" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-28 bg-black"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Séparateur haut */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(151,196,89,0.25), transparent)",
        }}
      />

      {/* Glow décoratif */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "20%", left: "-100px",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,83,126,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Label section */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
            marginBottom: "14px",
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(151,196,89,0.5)",
          }}>
            — 02. À propos de MOI
          </span>
        </div>

        {/* Titre */}
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "56px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s 0.1s ease",
          }}
        >
          <span style={{ color: "#EAF3DE" }}>Qui suis-je ?</span>
          <span style={{ color: "#97C459" }}>.</span>
        </h2>

        {/* Grid 2 colonnes */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
          className="flex-col-mobile"
        >
          {/* Colonne gauche — texte */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "all 0.7s 0.2s ease",
            }}
          >
            {/* Citation personnelle */}
            <blockquote style={{
              borderLeft: "2px solid #D4537E",
              paddingLeft: "18px",
              marginBottom: "28px",
              color: "#D4537E",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2.2vw, 20px)",
              fontWeight: 600,
              lineHeight: 1.4,
            }}>
              "Je construis des solutions digitales innovantes."
            </blockquote>

            <p style={{
              color: "rgba(192,221,151,0.7)",
              fontSize: "15px", lineHeight: 1.85,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 400, marginBottom: "20px",
            }}>
              Je m'appelle <span style={{ color: "#97C459", fontWeight: 500 }}>Esaïe AGOUNFON</span>,
              développeur Web Full-Stack passionné par la création d'interfaces web,
              rapides et accessibles. Chaque ligne de code que j'écris a un but :
              offrir une expérience mémorable à l'utilisateur.
            </p>

            <p style={{
              color: "rgba(192,221,151,0.55)",
              fontSize: "14px", lineHeight: 1.85,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 400, marginBottom: "32px",
            }}>
              Basé à <span style={{ color: "#FAC775" }}>Abomey-Calavi, Bénin</span>,
              je participe à l'InnerBuild Challenge S01 — 7 jours pour prouver
              qu'avec de la rigueur, de la créativité et les bons outils,
              on peut construire quelque chose dont on est fier.
            </p>

            {/* Passions */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{
                fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(192,221,151,0.35)", marginBottom: "12px",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                Ce qui me MOTIVE
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {passions.map((p) => (
                  <span key={p.label} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "6px 14px", borderRadius: "999px",
                    background: "rgba(42,64,32,0.5)",
                    border: "0.5px solid rgba(55,109,17,0.4)",
                    color: "#97C459", fontSize: "12px",
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "background 0.2s, border-color 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(55,109,17,0.2)";
                      e.currentTarget.style.borderColor = "#97C459";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(42,64,32,0.5)";
                      e.currentTarget.style.borderColor = "rgba(55,109,17,0.4)";
                    }}
                  >
                    {p.icon} {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA CV */}
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "11px 24px", borderRadius: "999px",
                background: "transparent",
                border: "1px solid rgba(212,83,126,0.5)",
                color: "#D4537E", fontSize: "13px", fontWeight: 600,
                textDecoration: "none", transition: "all 0.2s",
                fontFamily: "'Syne', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(212,83,126,0.1)";
                e.currentTarget.style.borderColor = "#D4537E";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(212,83,126,0.5)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Travaillons ensemble
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Colonne droite — stats + carte identité */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "all 0.7s 0.3s ease",
              display: "flex", flexDirection: "column", gap: "20px",
            }}
          >
            {/* Photo professionnelle */}
            <div style={{
              borderRadius: "16px",
              border: "0.5px solid rgba(151,196,89,0.3)",
              background: "rgba(22,35,16,0.4)",
              padding: "16px",
              position: "relative", overflow: "hidden",
              transition: "border-color 0.3s, background 0.3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(151,196,89,0.6)";
                e.currentTarget.style.background = "rgba(22,35,16,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(151,196,89,0.3)";
                e.currentTarget.style.background = "rgba(22,35,16,0.4)";
              }}
            >
              {/* Accent corner */}
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, right: 0,
                width: "100px", height: "100px",
                background: "radial-gradient(circle at top right, rgba(151,196,89,0.15), transparent 70%)",
              }} />

              <img
                src="/image/img1.jpg"
                alt="Photo Esaïe"
                className="w-full h-auto rounded-md object-cover relative z-10"
                style={{
                  border: "1px solid rgba(151,196,89,0.25)",
                  boxShadow: "0 10px 30px rgba(151,196,89,0.1)",
                  aspectRatio: "3/4",
                }}
              />

              {/* Overlay text */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(180deg, transparent 0%, rgba(13,26,10,0.95) 60%)",
                padding: "24px",
                zIndex: 20,
              }}>
                <p style={{
                  color: "#97C459", fontSize: "17px", fontWeight: 600,
                  fontFamily: "'JetBrains Mono', monospace",
                  marginBottom: "4px",
                }}>Développeur Web</p>
                <p style={{
                  color: "#EAF3DE", fontSize: "14px", fontWeight: 500,
                  fontFamily: "'Syne', sans-serif",
                }}> Bénin 🇧🇯</p>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
            }}>
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  style={{
                    borderRadius: "12px",
                    border: "0.5px solid rgba(55,109,17,0.25)",
                    background: "rgba(22,35,16,0.6)",
                    padding: "18px 16px",
                    transition: "border-color 0.2s, background 0.2s",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transitionDelay: `${0.4 + i * 0.08}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(151,196,89,0.5)";
                    e.currentTarget.style.background = "rgba(55,109,17,0.12)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(55,109,17,0.25)";
                    e.currentTarget.style.background = "rgba(22,35,16,0.6)";
                  }}
                >
                  <div style={{
                    fontSize: "28px", fontWeight: 800, color: "#97C459",
                    lineHeight: 1, marginBottom: "4px",
                    fontFamily: "'Syne', sans-serif",
                  }}>{value}</div>
                  <div style={{
                    fontSize: "10px", color: "rgba(192,221,151,0.45)",
                    lineHeight: 1.4, fontFamily: "'JetBrains Mono', monospace",
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur bas */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(151,196,89,0.15), transparent)",
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        @media (max-width: 680px) {
          .flex-col-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}