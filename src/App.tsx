import { JSX } from "react";
import Experiences from "./components/Experience";
import Badge from "./components/Badge";
import MediumFeed from "./components/MediumFeed";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { badgeGroups, contentAbout, contentProjects, contentPlaces } from "./helpers/contentPage";
import { sanitizeText } from "./helpers/sanitizeText";

const SectionHeader = ({ num, title, id }: { num: string; title: string; id: string }): JSX.Element => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 36 }}>
    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#a8b0a0" }}>{num}</span>
    <h2
      id={id}
      style={{
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        margin: 0,
        position: "relative",
        paddingBottom: 8,
        color: "#16242e",
      }}
    >
      {title}
      <span
        aria-hidden="true"
        style={{ position: "absolute", left: 0, bottom: 0, width: 46, height: 4, background: "#c6e82e", borderRadius: 2 }}
      />
    </h2>
  </div>
);

function App(): JSX.Element {
  return (
    <>
      <a
        href="#content"
        className="skip"
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 100,
          background: "#16242e",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: 7,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          textDecoration: "none",
          transform: "translateY(-200%)",
          opacity: 0,
          transition: "transform .2s, opacity .2s",
        }}
      >
        Skip to content
      </a>

      <div
        id="grid"
        style={{
          maxWidth: 1340,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(380px, 460px) 1fr",
        }}
      >
        {/* IDENTITY PANEL — left, sticky */}
        <aside
          id="idpanel"
          aria-label="About Gize"
          style={{
            order: -1,
            position: "sticky",
            top: 0,
            alignSelf: "start",
            height: "100vh",
            overflow: "auto",
            borderRight: "1px solid #eceee8",
            padding: "72px 48px 56px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontWeight: 700,
              fontSize: "clamp(38px, 3.6vw, 52px)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#16242e",
            }}
          >
            Hello, I'm Gize
            <span aria-hidden="true" style={{ color: "#c6e82e" }}>.</span>
          </h1>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontStyle: "italic",
              fontSize: 14,
              color: "#5d6b72",
              marginTop: 14,
              marginBottom: 0,
            }}
          >
            // Full-Stack Engineer &amp; Coffee lover
          </p>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13.5,
              lineHeight: 1.6,
              color: "#16242e",
              marginTop: 22,
              marginBottom: 0,
              maxWidth: "32ch",
            }}
          >
            Crafting experiences that bring{" "}
            <span style={{ background: "#eef7c4", padding: "1px 4px", borderRadius: 3 }}>
              ideas to life
            </span>.
          </p>

          <div style={{ marginTop: 26 }}>
            <Footer />
          </div>

          <div style={{ marginTop: 38, display: "flex", flexDirection: "column", gap: 26 }}>
            {badgeGroups.map(({ title, badges }) => (
              <div key={title}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#16242e",
                    margin: "0 0 12px",
                  }}
                >
                  {title}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {badges.map(({ title: label, link }) => (
                    <Badge key={label} label={label} link={link} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "auto", paddingTop: 48 }}>
            <a
              href="mailto:gize.bonilla@gmail.com?subject=Let's Connect"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#16242e",
                }}
              >
                Let's connect—<br />send me an email.
              </span>
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 18,
                  padding: "0 16px",
                  height: 42,
                  borderRadius: 10,
                  background: "#c6e82e",
                  color: "#16242e",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Email me <span style={{ fontSize: 16 }}>→</span>
              </span>
            </a>
          </div>
        </aside>

        {/* CONTENT — right, scrolls */}
        <main id="content" role="main" style={{ padding: "80px 72px 120px", minWidth: 0 }}>

          {/* // About */}
          <section aria-labelledby="intro-h" style={{ marginBottom: 96, maxWidth: "62ch" }}>
            <h2
              id="intro-h"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#a8b0a0",
                margin: "0 0 22px",
              }}
            >
              // About
            </h2>
            {contentAbout.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 2 ? 14 : 19,
                  lineHeight: i === 2 ? 1.6 : 1.62,
                  letterSpacing: "-0.01em",
                  color: i === 0 ? "#16242e" : i === 1 ? "#3a474e" : "#5d6b72",
                  fontFamily: i === 2 ? "'JetBrains Mono', monospace" : undefined,
                  margin: "0 0 18px",
                }}
                dangerouslySetInnerHTML={{ __html: sanitizeText(para) }}
              />
            ))}
          </section>

          {/* 01 Experience */}
          <section aria-labelledby="exp-h" style={{ marginBottom: 96 }}>
            <SectionHeader num="01" title="Experience" id="exp-h" />
            <Experiences />
          </section>

          {/* 02 Projects */}
          <section aria-labelledby="proj-h" style={{ marginBottom: 96 }}>
            <SectionHeader num="02" title="Projects" id="proj-h" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {contentProjects.map((p) => (
                <Project key={p.title} {...p} />
              ))}
            </div>
          </section>

          {/* 03 Writing */}
          <MediumFeed />

          {/* 04 Elsewhere */}
          <section aria-labelledby="else-h" style={{ marginBottom: 96 }}>
            <SectionHeader num="04" title="Elsewhere" id="else-h" />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              {contentPlaces.map(({ label, kind, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "baseline",
                      gap: 14,
                      padding: "12px 6px",
                      fontFamily: "'JetBrains Mono', monospace",
                      borderRadius: 8,
                      transition: "background .16s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "#f8faf2";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "";
                    }}
                  >
                    <span style={{ flex: 1, fontSize: 15, color: "#16242e" }}>{label}</span>
                    <span style={{ fontSize: 12, color: "#5d6b72" }}>{kind}</span>
                    <span aria-hidden="true" style={{ color: "#c6e82e" }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>
    </>
  );
}

export default App;
