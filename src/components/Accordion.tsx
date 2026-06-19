import { useState, ReactNode, JSX } from "react";

interface AccordionProps {
  title: string;
  date?: string;
  children: ReactNode;
  subtitle?: string;
}

const Accordion = ({ title, children, date, subtitle = "" }: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const [role, company] = title.includes(" @ ")
    ? title.split(" @ ")
    : [title, ""];

  return (
    <div
      style={{
        border: "1px solid #eceee8",
        borderRadius: 14,
        overflow: "hidden",
        background: isOpen ? "#fbfcf6" : "#fff",
        marginBottom: 12,
        transition: "background .2s",
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: 18,
          padding: "20px 22px",
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          color: "#16242e",
        }}
      >
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: "block", fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>
            {role}
            {company && (
              <span style={{ color: "#5d6b72", fontWeight: 400 }}> @ {company}</span>
            )}
          </span>
          {subtitle && (
            <span
              style={{
                display: "block",
                fontFamily: "'JetBrains Mono', monospace",
                fontStyle: "italic",
                fontSize: 12,
                color: "#8b9ba0",
                marginTop: 3,
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12.5,
            color: "#5d6b72",
            whiteSpace: "nowrap",
          }}
        >
          {date}
        </span>
        <span
          aria-hidden="true"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 20,
            color: "#16242e",
            width: 18,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {isOpen && (
        <div style={{ padding: "0 22px 24px", maxWidth: "64ch" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
