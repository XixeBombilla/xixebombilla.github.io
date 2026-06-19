import { JSX, useEffect, useState } from "react";

interface ArticleProps {
  guid: string;
  link: string;
  title: string;
}

const MediumFeed = (): JSX.Element => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gize.bonilla"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setArticles(data.items.slice(0, 5));
        }
      })
      .catch((err) => console.error("Error fetching Medium articles:", err));
  }, []);

  if (!articles.length) return <></>;

  return (
    <section style={{ marginBottom: 96 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#a8b0a0" }}>03</span>
        <h2
          id="post-h"
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
          Writing
          <span
            aria-hidden="true"
            style={{ position: "absolute", left: 0, bottom: 0, width: 46, height: 4, background: "#c6e82e", borderRadius: 2 }}
          />
        </h2>
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {articles.map(({ guid, link, title }: ArticleProps, i) => (
          <li key={guid} style={{ borderBottom: "1px solid #eceee8" }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "20px 6px",
                borderRadius: 8,
                transition: "background .16s, padding-left .16s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#f8faf2";
                (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "14px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "";
                (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "6px";
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "#a8b0a0",
                  width: 28,
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ flex: 1, fontSize: 16, fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em", color: "#16242e" }}>
                {title}
              </span>
              <span aria-hidden="true" style={{ color: "#c6e82e", fontSize: 16 }}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediumFeed;
