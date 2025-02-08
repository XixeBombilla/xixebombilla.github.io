import { Fragment } from "react";
import Lottie from "lottie-react";
// Hooks
import useTypingEffect from "./hooks/typeEffect";
// Components
import DottedCursor from "./components/DottedCursor";
import Experiences from "./components/Experience";
import Badge from "./components/Badge";
import MediumFeed from "./components/Medium";
import Project from "./components/Project";
// Icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
// Animations
import animationHandUp from "./assets/handup.json";
import Footer from "./components/Footer";
// Content
import { badgeGroups, contentAbout } from "./helpers/contentPage";

const BUILT_WITH = ["Vite", "React", "TypeScript", "Tailwind", "Lottie"];

/**
 * Main application component.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return (
    <div className="lg:relative grid grid-cols-1 lg:grid-cols-2 gap-2 w-full lg:w-7xl lg:mx-auto h-screen py-12 px-10 lg:px-10">
      <DottedCursor />
      <section>
        <div className="lg:fixed">
          <h1 className="font-bold text-5xl lg:text-6xl">
            {useTypingEffect("Hello, I'm Gize.", 25, 0)} <br />
          </h1>
          <h2 className="text-3xl pt-5 lg:text-2xl italic lg:pt-0">
            Full-Stack Engineer & Coffee lover.
          </h2>
          <h3 className="text-2xl/10 pt-10 lg:pt-5 opacity-80 pb-10 lg:text-lg font-mono">
            Crafting experiences that bring ideas to life.
          </h3>
          {badgeGroups.map(({ title, badges }, index) => (
            <Fragment key={index}>
              <h4 className="uppercase text-lg lg:text-sm font-bold mb-5">
                {title}
              </h4>
              <div className="pb-5 lg:pb-10 w-full lg:w-[300px]">
                {badges.map(({ title, link }) => (
                  <Badge label={title} link={link} />
                ))}
              </div>
            </Fragment>
          ))}
          <h2 className="text-2xl font-bold font-mono mb-5 opacity-90">
            <a
              href="mailTo:gize.bonilla@gmail.com?subject=Let's Connect"
              className="group hover:opacity-80 block py-5"
            >
              Let’s connect— <br className="hidden lg:block" />
              send me an email.
              <span className="block h-0.5 bg-electric max-w-0 group-hover:max-w-50 transition-all duration-500"></span>
            </a>
          </h2>
        </div>
      </section>
      <div className="mb-60">
        <Footer />
        <section className="opacity-80 pt-10 lg:pt-30">
          {contentAbout.map((paragraph) => (
            <p
              className="py-5 tracking-wide text-lg/10 lg:text-lg"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </section>
        <section className="pt-10 lg:pt-20">
          <h2 className="text-2xl font-bold font-mono mb-5 opacity-90">
            Experience
            <span className="w-20 border border-2 border-electric block" />
          </h2>
          <Experiences />
        </section>
        <section className="pt-10 lg:pt-20">
          <h2 className="text-2xl font-bold font-mono mb-5 opacity-90">
            Projects
            <span className="w-15 border border-2 border-electric block" />
          </h2>
          <Project
            title="The Hue Creatures Club"
            description="A metaverse and unique NFT creatures community."
            image="hue.png"
            status="In Progress"
            badges={["Web3", "React", "TypeScript", "Express", "Colyseus"]}
            link="http://www.huecreatures.club/"
          />
        </section>
        <MediumFeed />
        <section className="pt-10 lg:pt-20">
          <h2 className="text-2xl font-bold font-mono mb-5 opacity-90">
            Places I've Been
            <span className="w-15 border border-2 border-electric block" />
          </h2>
          <ul>
            <li>
              <a
                className="font-mono text-sm flex justify-between group relative"
                href="https://www.youtube.com/watch?v=FU1zzOjF05s"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <span>La Previa, JSCONF Chile</span>
                  <span className="block h-0.5 bg-electric max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                </div>
                <ArrowUpRightIcon className="h-5 lg:h-6 inline-block fill-electric group-hover:mt-[-5px] lg:absolute lg:right-0" />
              </a>
            </li>
          </ul>
        </section>
        <div className="hidden lg:flex space-x-5 py-5 lg:fixed bottom-10 right-10 ">
          <Lottie
            animationData={animationHandUp}
            loop={true}
            className="w-20"
          />
        </div>
        <p className="font-mono text-center lg:text-end py-50 text-sm lg:text-sm">
          <span>
            Made with{" "}
            <HeartIcon className="h-8 lg:h-6 inline-block fill-electric" />{" "}
            {new Date().getFullYear()}.
          </span>
          <div className="mt-5">
            {BUILT_WITH.map((badge) => (
              <Badge label={badge} />
            ))}
          </div>
        </p>
      </div>
    </div>
  );
}

export default App;
