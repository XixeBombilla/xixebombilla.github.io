import Badge from "./Badge";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  badges: string[];
  status: string;
  link: string;
}

/**
 * Project component that displays a project with an image, title, description, badges, status, and link.
 * @param {ProjectProps} props - The props for the Project component.
 * @param {string} props.image - The image for the project.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 * @param {string[]} props.badges - The badges for the project.
 * @param {string} props.status - The status of the project.
 * @param {string} props.link - The link to the project.
 * @returns {JSX.Element} The rendered Project component.
 */
const Project = ({
  image,
  title,
  description,
  badges,
  status,
  link,
}: ProjectProps) => {
  const backgroundStyle = {
    backgroundImage: `url(/images/${image})`,
  };

  const imageStyle = `bg-center bg-scroll rounded-full`;
  const linkElement = (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <ArrowUpRightIcon className="h-10 lg:h-8 inline-block fill-electric hover:pb-[2px] right-0 transition-all px-5" />
    </a>
  );

  return (
    <div className="flex flex-col pt-5">
      <div className={`${imageStyle}`} style={backgroundStyle}>
        <div className="opacity-0 hover:opacity-100 backdrop-grayscale-500 rounded-full transition-all duration-400 p-10 lg:p-5">
          <div className="bg-stone-950 w-full h-full items-center rounded-full p-5 justify-between hidden lg:flex">
            <div className="flex flex-col">
              <p className="text-white ml-5">{description}</p>
              <div className="mt-2 ml-5">
                {badges.map((badge) => (
                  <Badge key={`project-${badge}`} label={badge} small />
                ))}
              </div>
            </div>
            {linkElement}
          </div>
        </div>
      </div>
      <section className="flex flex-col items-start lg:items-end lg:py-5 pt-5">
        <h1 className="uppercase text-md font-mono font-bold self-top">
          {title}
        </h1>
        <span className="italic text-sm font-mono">{status}</span>
        <div className="block lg:hidden">
          <p>{description}</p>
          <div className="flex justify-between">
            <div className="mt-5">
              {badges.map((badge) => (
                <Badge key={`projectm-${badge}`} label={badge} />
              ))}
            </div>
            {linkElement}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
