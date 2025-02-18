import GithubIcon from "../icons/Github";
import InstagramIcon from "../icons/Instagram";
import LinkedinIcon from "../icons/Linkedin";
import XIcon from "../icons/X";
import MediumIcon from "../icons/Medium";
//  Content
import { contentFooter } from "../helpers/contentPage";
import { createElement } from "react";

const Icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  x: XIcon,
  medium: MediumIcon,
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
          key={`footer-${label}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-16 w-16 dark:fill-white lg:h-8 lg:w-8 mx-5 lg:ml-2"
          aria-label={label}
        >
          {createElement(Icons[key])}
        </a>
      ))}
    </nav>
  );
};

export default Footer;
