import { JSX } from "react";
import { contentFooter } from "../helpers/contentPage";

const Footer = (): JSX.Element => {
  return (
    <nav aria-label="Social links" className="flex flex-wrap gap-x-4 gap-y-2">
      {contentFooter.map(({ key, link, label }) => (
        <a
          key={key}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="font-mono text-[13px] text-[#5d6b72] inline-flex items-center gap-[3px] border-b border-transparent pb-px hover:text-[#16242e] hover:border-electric transition-colors"
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
          <span aria-hidden="true" className="text-[10px]">↗</span>
        </a>
      ))}
    </nav>
  );
};

export default Footer;
