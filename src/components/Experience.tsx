import Accordion from "./Accordion";
import Badge from "./Badge";
import { contentAccordions } from "../helpers/contentPage";
import { sanitizeText } from "../helpers/sanitizeText";
import { JSX } from "react";

/**
 * Experiences component that displays a list of job experiences using Accordion components.
 * @returns {JSX.Element} The rendered Experiences component.
 */
const Experiences = (): JSX.Element => {
  return (
    <div className="opacity-90">
      {contentAccordions.map(({ title, date, content, badges, subtitle }) => (
        <Accordion
          key={`accordion-${title}`}
          title={title}
          date={date}
          subtitle={subtitle}
        >
          <p dangerouslySetInnerHTML={{ __html: sanitizeText(content) }} />
          <div className="pt-5">
            {badges.map((badge) => (
              <Badge key={`experience-${title}-${badge}`} label={badge} />
            ))}
          </div>
        </Accordion>
      ))}
      <br />
      <a
        className="font-mono italic text-sm group"
        href="/files/resume_gize.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Gize's Resume"
      >
        My <span className="font-bold">resume</span> for more details.
        <span className="block h-0.5 bg-electric max-w-0 group-hover:max-w-50 transition-all duration-500"></span>
      </a>
    </div>
  );
};

export default Experiences;
