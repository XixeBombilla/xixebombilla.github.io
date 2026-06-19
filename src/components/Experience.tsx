import { JSX } from "react";
import Accordion from "./Accordion";
import Badge from "./Badge";
import { contentAccordions } from "../helpers/contentPage";
import { sanitizeText } from "../helpers/sanitizeText";

const Experiences = (): JSX.Element => {
  return (
    <div>
      {contentAccordions.map(({ title, date, content, badges, subtitle }) => (
        <Accordion key={title} title={title} date={date} subtitle={subtitle}>
          <p
            style={{ fontSize: 15, lineHeight: 1.66, color: "#3a474e", margin: "0 0 16px" }}
            dangerouslySetInnerHTML={{ __html: sanitizeText(content) }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {badges.map((badge) => (
              <Badge key={badge} label={badge} />
            ))}
          </div>
        </Accordion>
      ))}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontStyle: "italic",
          fontSize: 13,
          color: "#5d6b72",
          margin: "22px 2px 0",
        }}
      >
        <a
          href="/files/resume_gize.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gize's Resume"
          style={{ color: "#16242e", textDecoration: "none", borderBottom: "2px solid #c6e82e" }}
        >
          My résumé
        </a>{" "}
        for the full timeline →
      </p>
    </div>
  );
};

export default Experiences;
