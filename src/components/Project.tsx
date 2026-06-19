import { JSX } from "react";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  badges: string[];
  status: string;
  link: string;
  tint?: string;
}

const statusColor = (s: string) =>
  s === "Published" ? "#2f7d52" : s === "In Progress" ? "#b07d12" : "#8b9ba0";

const Project = ({
  image,
  title,
  description,
  badges,
  status,
  link,
  tint = "#a8b0a0",
}: ProjectProps): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      style={{
        textDecoration: "none",
        border: "1px solid #eceee8",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        transition: "transform .18s, box-shadow .18s, border-color .18s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 14px 30px -16px rgba(22,36,46,0.28)";
        el.style.borderColor = "#d7dad2";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "#eceee8";
      }}
    >
      <div
        role="img"
        aria-label={title}
        style={{
          aspectRatio: "16/9",
          backgroundImage: `url(/images/${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: tint,
          display: "flex",
          alignItems: "flex-end",
          padding: 14,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#16242e",
            background: "rgba(255,255,255,0.82)",
            padding: "3px 8px",
            borderRadius: 5,
          }}
        >
          {title}
        </span>
      </div>

      <div style={{ padding: "18px 18px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <h3
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              margin: 0,
              color: "#16242e",
            }}
          >
            {title}
          </h3>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: statusColor(status),
              border: `1px solid ${statusColor(status)}`,
              padding: "2px 7px",
              borderRadius: 20,
              whiteSpace: "nowrap",
            }}
          >
            {status}
          </span>
        </div>

        <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5d6b72", margin: "9px 0 0" }}>
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#5d6b72",
                background: "#f4f6ef",
                padding: "3px 8px",
                borderRadius: 5,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
