import Accordion from "./Accordion";
import Badge from "./Badge";
import { contentAccordions } from "../helpers/contentPage";

/**
 * Experiences component that displays a list of job experiences using Accordion components.
 * @returns {JSX.Element} The rendered Experiences component.
 */
const Experiences = () => {
  return (
    <div className="opacity-80 ">
      {contentAccordions.map(({ title, date, content, badges }) => (
        <Accordion key={`accordion-${title}`} title={title} date={date}>
          <p
            className="opacity-80"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="pt-15 lg:pt-5">
            {badges.map((badge) => (
              <Badge label={badge} />
            ))}
          </div>
        </Accordion>
      ))}
    </div>
  );
};

export default Experiences;
