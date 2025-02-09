interface BadgeProps {
  label: string;
  className?: string;
  link?: string;
  small?: boolean;
}

/**
 * Badge component that displays a label with optional link.
 * @param {BadgeProps} props - The props for the Badge component.
 * @param {string} props.label - The label to display inside the badge.
 * @param {string} [props.className] - Optional additional class names for styling.
 * @param {string} [props.link] - Optional link URL. If provided, the badge will be rendered as a link.
 * @returns {JSX.Element} The rendered Badge component.
 */
const Badge = ({
  label,
  className = "",
  link = "",
  small = false,
}: BadgeProps) => {
  const badgeStyle = `bg-electric text-stone-950 uppercase rounded-full flex items-center px-4 lg:px-3 py-1 ${
    small ? "lg:text-[10px]" : "lg:text-[12px]"
  } font-bold inline-block mr-2 lg:mr-2 mb-2 ${className} ${
    link ? "hover:bg-electric-faded hover:text-black" : ""
  } text-[12px]`;

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
