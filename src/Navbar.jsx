import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(151,196,89,0.2)",
        fontFamily: "'Syne', sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo / Titre */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-wider"
          style={{ color: "#006400" }}
        >
          Esaie AGOUNFON
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 hover:text-opacity-70"
              style={{ color: "#006400" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#97C459";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#006400";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col gap-1.5 focus:outline-none"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#97C459",
              transform: isOpen ? "rotate(45deg) translateY(8px)" : "rotate(0)",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#97C459",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: "#97C459",
              transform: isOpen ? "rotate(-45deg) translateY(-8px)" : "rotate(0)",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="sm:hidden"
          style={{
            background: "rgba(13, 26, 10, 0.95)",
            borderTop: "1px solid rgba(151,196,89,0.2)",
            padding: "20px 0",
          }}
        >
          <div className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: "#006400" }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#97C459";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#006400";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
