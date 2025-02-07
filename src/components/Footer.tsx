import GithubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import XIcon from "../icons/X";
//  Content
import { contentFooter } from "../helpers/contentPage";

const Icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  x: XIcon,
};

/**
 * Renders the appropriate icon based on the provided key.
 * @param {keyof typeof Icons} key - The key of the icon to render.
 * @returns {JSX.Element} The rendered icon component.
 */
const ElementIcon = (key: keyof typeof Icons) => {
  const ElementIcon = Icons[key];

  return <ElementIcon />;
};

/**
 * Footer component that renders a navigation bar with social media icons.
 * @returns {JSX.Element} The rendered component.
 */
const Footer = () => {
  return (
    <nav className="flex justify-center lg:justify-end space-x-5 py-5 h-20 lg:10 lg:pt-10">
      {contentFooter.map(({ key, link, label }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-16 w-16 dark:fill-white lg:h-8 lg:w-8 mx-5 lg:ml-2"
          aria-label={label}
        >
          {ElementIcon(key)}
        </a>
      ))}
    </nav>
  );
};

export default Footer;
