// import { useEffect, useRef, useState } from "react";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Développeur Front-End",
  "Développeur Back-End",
  "Créateur d'interfaces",
  "Passionné du web",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 70);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* ── Grille de fond décorative ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(55,109,17,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,109,17,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Tache lumineuse ambiante ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-10%",
          right: "-5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(151,196,89,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "0",
          left: "-8%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,83,126,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── Contenu principal ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        {/* Badge disponibilité */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border text-xs font-medium tracking-widest uppercase"
          style={{
            borderColor: "rgba(151,196,89,0.35)",
            background: "rgba(151,196,89,0.07)",
            color: "#97C459",
            animation: "fadeUp 0.5s ease forwards",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#97C459",
              boxShadow: "0 0 8px #97C459",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          Quelle est ta préoccupation ?
        </div>

        {/* Nom principal */}
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-none mb-4"
          style={{
            animation: "fadeUp 0.6s 0.1s ease both",
            letterSpacing: "-0.03em",
          }}
        >
          <span
            style={{
              display: "block",
              color: "rgba(234,243,222,0.45)",
              fontSize: "0.45em",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "0.3em",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Salut, moi c'est
          </span>
          <span style={{ color: "#EAF3DE" }}>Esa</span>
          <span
            style={{
              color: "#97C459",
              WebkitTextStroke: "0px",
            }}
          >
            ïe
          </span>
        </h1>

        {/* Typewriter rôle */}
        <div
          className="flex items-center gap-0 mb-8"
          style={{ animation: "fadeUp 0.6s 0.2s ease both" }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "#EF9F27",
              fontWeight: 400,
            }}
          >
            {displayed}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.3em",
              background: "#EF9F27",
              marginLeft: "3px",
              verticalAlign: "middle",
              opacity: blink ? 1 : 0,
              transition: "opacity 0.1s",
            }}
          />
        </div>

        {/* Description */}
        <p
          className="max-w-xl mb-12 leading-relaxed"
          style={{
            color: "rgba(192,221,151,0.7)",
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            animation: "fadeUp 0.6s 0.3s ease both",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 400,
          }}
        >
          Je transforme vos idées en expériences web unique.
          Du code propre, des interfaces qui captivent avec
          un design épuré.
        </p>

        {/* Boutons CTA */}
        <div
          className="flex flex-wrap gap-4 mb-20"
          style={{ animation: "fadeUp 0.6s 0.4s ease both" }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold overflow-hidden transition-all duration-300"
            style={{
              background: "#D4537E",
              color: "#fff",
              fontSize: "0.95rem",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#993556";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#D4537E";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Voir mes projets
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all duration-300"
            style={{
              border: "1px solid rgba(250,199,117,0.5)",
              color: "#FAC775",
              fontSize: "0.95rem",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(250,199,117,0.08)";
              e.currentTarget.style.borderColor = "#FAC775";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(250,199,117,0.5)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Me contacter
          </a>
        </div>

        {/* Stack tech pills */}
        <div style={{ animation: "fadeUp 0.6s 0.5s ease both" }}>
          <p
            className="mb-3 text-xs tracking-widest uppercase"
            style={{ color: "rgba(192,221,151,0.4)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "Figma"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-medium transition-all duration-200"
                style={{
                  background: "rgba(42,64,32,0.6)",
                  border: "0.5px solid rgba(55,109,17,0.4)",
                  color: "#97C459",
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(55,109,17,0.25)";
                  e.currentTarget.style.borderColor = "#97C459";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(42,64,32,0.6)";
                  e.currentTarget.style.borderColor = "rgba(55,109,17,0.4)";
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{
          transform: "translateX(-50%)",
          animation: "fadeIn 1s 1s ease both",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(192,221,151,0.35)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(151,196,89,0.5), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Keyframes globaux ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #97C459; }
          50%       { opacity: 0.6; box-shadow: 0 0 14px #97C459; }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
