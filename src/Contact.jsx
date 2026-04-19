import { useEffect, useRef, useState } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@esaie",
    href: "https://github.com/esaieagounfon-stack",
    color: "#97C459",
    border: "rgba(151,196,89,0.25)",
    bg: "rgba(55,109,17,0.08)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Esaïe AG Dev",
    href: "https://www.linkedin.com/in/esaïe-agounfon-389809339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "#97C459",
    border: "rgba(151,196,89,0.25)",
    bg: "rgba(55,109,17,0.08)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+229 55 95 52 85",
    href: "https://wa.me/229",
    color: "#D4537E",
    border: "rgba(212,83,126,0.25)",
    bg: "rgba(212,83,126,0.07)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "esaieag@email.com",
    href: "mailto:esaieagounfon@email.com",
    color: "#EF9F27",
    border: "rgba(239,159,39,0.25)",
    bg: "rgba(239,159,39,0.07)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

function SocialCard({ s, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "14px",
        padding: "18px 20px", borderRadius: "14px",
        border: `0.5px solid ${hovered ? s.color : s.border}`,
        background: hovered ? s.bg : "rgba(22,35,16,0.4)",
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.5s ${0.45 + index * 0.08}s ease,
                     transform 0.5s ${0.45 + index * 0.08}s ease,
                     border-color 0.2s, background 0.2s`,
      }}
    >
      <div style={{
        width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hovered ? s.bg : "rgba(13,26,10,0.8)",
        border: `0.5px solid ${hovered ? s.color : "rgba(55,109,17,0.2)"}`,
        color: s.color,
        transition: "all 0.2s",
      }}>
        {s.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontSize: "13px", fontWeight: 600,
          color: hovered ? s.color : "#EAF3DE",
          marginBottom: "2px", transition: "color 0.2s",
          fontFamily: "'Syne', sans-serif",
        }}>{s.name}</p>
        <p style={{
          fontSize: "11px",
          color: "#006400",
          fontFamily: "'JetBrains Mono', monospace",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{s.handle}</p>
      </div>
      <svg
        width="14" height="14" viewBox="0 0 16 16" fill="none"
        style={{
          color: hovered ? s.color : "#006400",
          transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
          transition: "all 0.2s", flexShrink: 0,
        }}
      >
        <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "0.5px solid rgba(55,109,17,0.3)",
    background: "rgba(13,26,10,0.8)",
    color: "#EAF3DE",
    fontSize: "13px",
    fontFamily: "'JetBrains Mono', monospace",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "10px", fontWeight: 500,
    letterSpacing: "0.14em", textTransform: "uppercase",
    color: "#006400",
    marginBottom: "7px",
    fontFamily: "'JetBrains Mono', monospace",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-28 pb-20 bg-black"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Séparateur haut */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg,transparent,rgba(212,83,126,0.2),transparent)",
      }} />

      {/* Glows */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "15%", right: "-60px",
        width: "360px", height: "360px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(239,159,39,0.07) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "10%", left: "-80px",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(212,83,126,0.07) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        {/* Label section */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.5s ease",
          marginBottom: "12px",
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(212,83,126,0.55)",
          }}>— 05. Contact</span>
        </div>

        {/* Titre + sous-titre */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{
            fontSize: "clamp(32px,5vw,54px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "16px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.6s 0.1s ease",
          }}>
            <span style={{ color: "#EAF3DE" }}>Travaillons </span>
            <span style={{ color: "#D4537E" }}>ensemble</span>
            <span style={{ color: "#97C459" }}>.</span>
          </h2>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px", color: "#006400",
            maxWidth: "420px", lineHeight: 1.75,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s 0.2s ease",
          }}>
            Un projet, une idée, une opportunité ? Je suis ouvert
            à toute collaboration. Je te réponds rapidement.
          </p>
        </div>

        {/* Grille : formulaire + socials */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
          className="contact-grid"
        >
          {/* ── Formulaire ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transition: "all 0.7s 0.25s ease",
          }}>
            {sent ? (
              <div style={{
                borderRadius: "16px",
                border: "0.5px solid rgba(151,196,89,0.4)",
                background: "rgba(55,109,17,0.1)",
                padding: "40px 28px",
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: "36px", marginBottom: "16px",
                  lineHeight: 1,
                }}>✓</div>
                <p style={{
                  fontSize: "18px", fontWeight: 700,
                  color: "#97C459", marginBottom: "8px",
                }}>Message envoyé !</p>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px", color: "#006400",
                }}>Je te réponds dès que possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Ton nom</label>
                  <input
                    type="text"
                    placeholder="Esaïe Agounfon"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "#97C459"; e.target.style.background = "rgba(55,109,17,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(55,109,17,0.3)"; e.target.style.background = "rgba(13,26,10,0.8)"; }}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    placeholder="ton@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "#97C459"; e.target.style.background = "rgba(55,109,17,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(55,109,17,0.3)"; e.target.style.background = "rgba(13,26,10,0.8)"; }}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    placeholder="Salut Esaïe, j'ai un projet pour toi..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px", lineHeight: 1.6 }}
                    onFocus={e => { e.target.style.borderColor = "#97C459"; e.target.style.background = "rgba(55,109,17,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(55,109,17,0.3)"; e.target.style.background = "rgba(13,26,10,0.8)"; }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    padding: "13px 28px", borderRadius: "999px",
                    background: sending ? "rgba(212,83,126,0.5)" : "#D4537E",
                    color: "#fff", fontSize: "14px", fontWeight: 600,
                    border: "none", cursor: sending ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    transition: "background 0.2s, transform 0.2s",
                    fontFamily: "'Syne', sans-serif",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={e => { if (!sending) e.currentTarget.style.background = "#993556"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = sending ? "rgba(212,83,126,0.5)" : "#D4537E"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {sending ? (
                    <>
                      <span style={{
                        width: "14px", height: "14px", borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        display: "inline-block",
                        animation: "spin 0.7s linear infinite",
                      }} />
                      Envoi...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8l12-6-6 12V8H2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="currentColor" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Socials + disponibilité ── */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "all 0.7s 0.35s ease",
            display: "flex", flexDirection: "column", gap: "12px",
          }}>
            {/* Badge disponibilité */}
            <div style={{
              borderRadius: "12px",
              border: "0.5px solid rgba(151,196,89,0.25)",
              background: "rgba(55,109,17,0.07)",
              padding: "16px 20px",
              display: "flex", alignItems: "center", gap: "12px",
              marginBottom: "4px",
            }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#97C459",
                boxShadow: "0 0 10px #97C459",
                flexShrink: 0,
                animation: "pulse 2s infinite",
              }} />
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#97C459", marginBottom: "2px" }}>
                  Disponible dès maintenant
                </p>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px", color: "#006400",
                }}>
                  Freelance · Stage · Emploi · Collaboration
                </p>
              </div>
            </div>

            {/* Cartes socials */}
            {socials.map((s, i) => (
              <SocialCard key={s.name} s={s} index={i} visible={visible} />
            ))}

            {/* Localisation */}
            <div style={{
              borderRadius: "10px",
              border: "0.5px solid rgba(239,159,39,0.18)",
              background: "rgba(239,159,39,0.04)",
              padding: "12px 16px",
              display: "flex", alignItems: "center", gap: "10px",
              marginTop: "4px",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px", color: "rgba(250,199,117,0.6)",
              }}>
                Abomey-Calavi, Bénin — Disponible pour tout vos projets
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "80px",
          paddingTop: "28px",
          borderTop: "0.5px solid rgba(55,109,17,0.15)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "12px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s 0.8s ease",
        }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px", color: "#006400",
          }}>
            © 2026 Esaïe AGOUNFON · InnerBuild S01
          </p>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px", color: "#006400",
          }}>
            #FrontForge · #InnerBuild
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #97C459; }
          50% { opacity: 0.6; box-shadow: 0 0 18px #97C459; }
        }
        @media (max-width: 680px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder {
          color: #006400;
        }
        input, textarea, button { font-family: inherit; }
      `}</style>
    </section>
  );
}