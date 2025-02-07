interface BadgeProps {
  label: string;
  className?: string;
  link?: string;
}

/**
 * Badge component that displays a label with optional link.
 * @param {BadgeProps} props - The props for the Badge component.
 * @param {string} props.label - The label to display inside the badge.
 * @param {string} [props.className] - Optional additional class names for styling.
 * @param {string} [props.link] - Optional link URL. If provided, the badge will be rendered as a link.
 * @returns {JSX.Element} The rendered Badge component.
 */
const Badge = ({ label, className = "", link = "" }: BadgeProps) => {
  const badgeStyle = `bg-electric dark:bg-electric-faded dark:text-electric text-current uppercase rounded-full flex items-center px-6 lg:px-3 py-4 lg:py-1 text-4xl lg:text-[12px] font-bold inline-block mr-5 lg:mr-2 mb-8 lg:mb-4 ${className} ${
    link
      ? "dark:hover:bg-electric hover:bg-electric-faded hover:text-black"
      : ""
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
