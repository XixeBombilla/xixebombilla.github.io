import { JSX } from "react";

interface BadgeProps {
  label: string;
  className?: string;
  link?: string;
}

const Badge = ({ label, className = "", link = "" }: BadgeProps): JSX.Element => {
  const badgeStyle = `font-mono text-[11.5px] font-medium tracking-[0.03em] uppercase text-[#16242e] bg-electric px-3 py-[5px] rounded-full inline-block mr-2 mb-2 ${className} ${
    link ? "hover:opacity-80 transition-opacity" : ""
  }`;

  return link.length ? (
    <a
      className={badgeStyle}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {label}
    </a>
  ) : (
    <span className={badgeStyle}>{label}</span>
  );
};

export default Badge;
