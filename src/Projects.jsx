import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Portfolio Personnel",
    description:
      "Mon portfolio développé en 7 jours dans le cadre de l'InnerBuild Challenge S01. Design dark, animations fluides, 100% responsive.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    color: "#97C459",
    accent: "rgba(151,196,89,0.12)",
    border: "rgba(151,196,89,0.25)",
    tag: "En cours",
    tagBg: "rgba(151,196,89,0.1)",
    tagColor: "#97C459",
    links: { github: "#", live: "#" },
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Site Afro-Event",
    description:
      "Page d'atterrissage moderne d'un site afro-event. Un site qui présente les evènements du Bénin à venir",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    color: "#D4537E",
    accent: "rgba(212,83,126,0.10)",
    border: "rgba(212,83,126,0.22)",
    tag: "Terminé",
    tagBg: "rgba(212,83,126,0.08)",
    tagColor: "#D4537E",
    links: { github: "#", live: "https://afro-event-59e182.netlify.app/" },
    featured: false,
  },
  {
    id: 3,
    number: "03",
    title: "Calculatrice Fonctionnelle",
    description:
      "Une calculatrice fonctionelle pouvant éffectuer des calcules de base et avancés. Un projet pour pratiquer la logique de programmation en JavaScript.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    color: "#EF9F27",
    accent: "rgba(239,159,39,0.09)",
    border: "rgba(239,159,39,0.22)",
    tag: "Concept",
    tagBg: "rgba(239,159,39,0.08)",
    tagColor: "#EF9F27",
    links: { github: "#", live: "https://hilarious-kataifi-30dc12.netlify.app/" },
    featured: false,
  },
  {
    id: 4,
    number: "04",
    title: "Mon portfolio1",
    description:
      "Mon premier projet de réalisation de portfolio; construit avec React et Tailwind CSS dans le cadre de ma formation en developpement web. Un projet pour mettre en pratique mes compétences.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    color: "#FAC775",
    accent: "rgba(250,199,117,0.08)",
    border: "rgba(250,199,117,0.2)",
    tag: "En cours",
    tagBg: "rgba(250,199,117,0.08)",
    tagColor: "#FAC775",
    links: { github: "#", live:"https://esaie-portfolio1.vercel.app/" },
    featured: false,
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "18px",
        border: `0.5px solid ${hovered ? project.color : project.border}`,
        background: hovered ? project.accent : "rgba(22,35,16,0.5)",
        padding: "28px 26px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ${0.15 + index * 0.1}s ease,
                     transform 0.6s ${0.15 + index * 0.1}s ease,
                     border-color 0.25s ease,
                     background 0.25s ease`,
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* Numéro décoratif en fond */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "-12px", right: "16px",
        fontSize: "88px", fontWeight: 800, lineHeight: 1,
        color: project.color,
        opacity: hovered ? 0.07 : 0.04,
        fontFamily: "'Syne', sans-serif",
        letterSpacing: "-0.05em",
        transition: "opacity 0.3s ease",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {project.number}
      </div>

      {/* En-tête : tag + liens */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: "20px",
      }}>
        <span style={{
          fontSize: "10px", fontWeight: 600,
          padding: "4px 10px", borderRadius: "999px",
          background: project.tagBg,
          color: project.tagColor,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.06em",
          border: `0.5px solid ${project.border}`,
        }}>
          {project.tag}
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href={project.links.github}
            title="Voir sur GitHub"
            style={{
              width: "30px", height: "30px", borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "0.5px solid rgba(151,196,89,0.3)",
              background: "rgba(22,35,16,0.8)",
              color: "#006400",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = project.color;
              e.currentTarget.style.borderColor = project.color;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#006400";
              e.currentTarget.style.borderColor = "rgba(151,196,89,0.3)";
            }}
          >
            <GithubIcon />
          </a>
          {project.links.live && (
            <a
              href={project.links.live}
              title="Voir le site live"
              style={{
                width: "30px", height: "30px", borderRadius: "8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: `0.5px solid ${project.border}`,
                background: project.accent,
                color: project.color,
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = project.color;
                e.currentTarget.style.color = "#0d1a0a";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = project.accent;
                e.currentTarget.style.color = project.color;
              }}
            >
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>

      {/* Titre */}
      <h3 style={{
        fontSize: "20px", fontWeight: 700,
        color: hovered ? project.color : "#EAF3DE",
        marginBottom: "10px",
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
        transition: "color 0.25s ease",
        fontFamily: "'Syne', sans-serif",
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "13px",
        color: "#006400",
        lineHeight: 1.75,
        marginBottom: "20px",
        fontFamily: "'JetBrains Mono', monospace",
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Technologies */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontSize: "10px",
            padding: "3px 9px",
            borderRadius: "5px",
            background: "rgba(13,26,10,0.8)",
            border: "0.5px solid rgba(151,196,89,0.25)",
            color: "rgba(151,196,89,0.7)",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden py-28 bg-black"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Séparateurs */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg,transparent,rgba(212,83,126,0.2),transparent)",
      }} />

      {/* Glow gauche */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "10%", left: "-100px",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "rgba(151,196,89,0.07)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        {/* En-tête section */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.5s ease",
          marginBottom: "12px",
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(212,83,126,0.55)",
          }}>— 04. Projets</span>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: "52px",
          flexWrap: "wrap", gap: "16px",
        }}>
          <h2 style={{
            fontSize: "clamp(32px,5vw,54px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.03em",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s 0.1s ease",
          }}>
            <span style={{ color: "#EAF3DE" }}>Ce que j'ai </span>
            <span style={{ color: "#D4537E" }}>construit</span>
            <span style={{ color: "#97C459" }}>.</span>
          </h2>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "9px 18px", borderRadius: "999px",
              border: "0.5px solid rgba(151,196,89,0.3)",
              background: "rgba(151,196,89,0.08)",
              color: "#97C459", fontSize: "12px", fontWeight: 600,
              textDecoration: "none",
              fontFamily: "'JetBrains Mono', monospace",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease, background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(151,196,89,0.18)";
              e.currentTarget.style.borderColor = "rgba(151,196,89,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(151,196,89,0.08)";
              e.currentTarget.style.borderColor = "rgba(151,196,89,0.3)";
            }}
          >
            <GithubIcon /> Voir tout sur GitHub
          </a>
        </div>

        {/* Grille projets */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "18px",
          marginBottom: "40px",
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* Note de bas */}
        <div style={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s 0.7s ease",
        }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#006400",
            letterSpacing: "0.05em",
          }}>
            D'autres projets en cours...
          </p>
        </div>
      </div>

      {/* Séparateur bas */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg,transparent,rgba(151,196,89,0.15),transparent)",
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}