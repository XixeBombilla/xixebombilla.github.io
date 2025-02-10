import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

interface ArticleProps {
  guid: string;
  link: string;
  title: string;
}

const MediumFeed = () => {
  const [articles, setArticles] = useState([]);

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

  return (
    <section className="pt-10 lg:pt-20">
      <h2 className="text-2xl font-bold font-mono mb-5 opacity-90">
        Latest Posts
        <span className="w-15 border border-2 border-electric block" />
      </h2>
      <ul>
        {articles.map(({ guid, link, title }: ArticleProps) => (
          <li key={guid}>
            <a
              className="font-mono text-sm flex justify-between group relative p-5"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <span>{title}</span>
                <span className="block h-0.5 bg-electric max-w-0 group-hover:max-w-full transition-all duration-500"></span>
              </div>
              <ArrowUpRightIcon className="h-5 lg:h-6 inline-block fill-electric group-hover:mr-[-5px] lg:absolute lg:right-0" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediumFeed;
