import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

import { ReactNode } from "react";

interface AccordionProps {
  title: string;
  date?: string;
  children: ReactNode;
}

/**
 * Accordion component that displays a collapsible section with a title and optional date.
 * @param {AccordionProps} props - The props for the Accordion component.
 * @param {string} props.title - The title of the accordion.
 * @param {string} [props.date] - The optional date to display next to the title.
 * @param {ReactNode} props.children - The content to display inside the accordion.
 * @returns {JSX.Element} The rendered Accordion component.
 */
const Accordion = ({ title, children, date }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const accordionId = title.replace(/\s/g, "").toLowerCase();

  return (
    <div className="pt-10 lg:pt-4">
      <h2
        className={`accordion-header mb-0 hover:bg-electric-faded transition-all duration-500 ${
          isOpen && "bg-electric-faded"
        }`}
        id={accordionId}
      >
        <button
          className="group relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between rounded-md lg:border-2 lg:border-electric-faded px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
          type="button"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          <span className="font-semibold text-2xl lg:text-6xl lg:text-base">
            {title}
          </span>
          <div className="flex justify-end">
            <span className="font-mono text-md lg:text-5xl mt-5 lg:mt-0 lg:text-sm mr-5">
              {date}
            </span>
            <span className="hidden lg:flex">
              {isOpen ? (
                <MinusIcon className="size-5" />
              ) : (
                <PlusIcon className="size-5" />
              )}
            </span>
          </div>
        </button>
      </h2>
      <div
        className={`lg:!visible ${
          !isOpen && "lg:hidden"
        } transition-all duration-500 visible`}
        aria-labelledby={accordionId}
      >
        <div className="lg:px-5 py-4 text-lg">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
