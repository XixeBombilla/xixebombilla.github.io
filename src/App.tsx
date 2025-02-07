import { Fragment } from "react";
import Lottie from "lottie-react";
// Hooks
import useTypingEffect from "./hooks/typeEffect";
// Components
import DottedCursor from "./components/DottedCursor";
import Experiences from "./components/Experience";
import Badge from "./components/Badge";
// import Card from "./components/Card";
// Icons
import { HeartIcon } from "@heroicons/react/24/outline";
// Animations
import animationHandUp from "./assets/handup.json";
import Footer from "./components/Footer";
// Content
import { badgeGroups, contentAbout } from "./helpers/contentPage";

/**
 * Main application component.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 w-7xl mx-auto h-screen py-40 px-20 lg:py-20 lg:px-10">
      <DottedCursor />
      <section>
        <div className="lg:fixed">
          <h1 className="font-bold text-9xl lg:text-6xl">
            {useTypingEffect("Hello, I'm Gize.", 25, 0)} <br />
          </h1>
          <h2 className="text-7xl pt-10 lg:text-2xl italic lg:pt-0">
            Full-Stack Engineer & Coffee lover.
          </h2>
          <h3 className="text-6xl/20 pt-20 lg:pt-5 opacity-80 pb-20 lg:text-lg font-mono">
            Crafting experiences that bring ideas to life.
          </h3>
          {badgeGroups.map(({ title, badges }, index) => (
            <Fragment key={index}>
              <h4 className="uppercase text-5xl lg:text-sm font-bold mb-10 lg:mb-5">
                {title}
              </h4>
              <div className="pb-20 w-full lg:w-[300px]">
                {badges.map(({ title, link }) => (
                  <Badge label={title} link={link} />
                ))}
              </div>
            </Fragment>
          ))}
          <h2 className="text-5xl lg:text-2xl font-bold font-mono mb-5 opacity-90">
            <a
              href="mailTo:gize.bonilla@gmail.com?subject=Let's Connect"
              className="group hover:opacity-80 block py-10"
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
        <section className="opacity-80 pt-30">
          {contentAbout.map((paragraph) => (
            <p
              className="py-5 tracking-wide text-5xl/20 lg:text-lg"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </section>
        <section className="pt-20">
          <h2 className="text-7xl lg:text-4xl font-bold font-mono mb-5 opacity-90">
            Experience
            <span className="w-20 border border-2 border-electric block"></span>
          </h2>
          <Experiences />
        </section>
        {/* <section className="py-20">
          <h2 className="text-7xl lg:text-4xl font-bold font-mono mb-5 opacity-90">
            Projects
            <span className="w-20 border border-2 border-electric block"></span>
          </h2>
          <Card />
        </section> */}
        <div className="hidden lg:flex space-x-5 py-5 lg:fixed bottom-10 right-10 ">
          <Lottie
            animationData={animationHandUp}
            loop={true}
            className="w-20"
          />
        </div>
        <p className="font-mono text-center lg:text-end py-50 text-4xl lg:text-sm">
          Made with{" "}
          <HeartIcon className="h-15 lg:h-6 inline-block fill-electric" />{" "}
          {new Date().getFullYear()} (V1).
        </p>
      </div>
    </div>
  );
}

export default App;
