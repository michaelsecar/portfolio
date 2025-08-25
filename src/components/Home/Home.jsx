import { useContext } from "react";
import { CVIcon, GitHubIcon, LinkedInIcon } from "../../icons/Icons";
import { Anchor } from "../Utils/Anchor";
import { LanguageContext } from "../../providers/LanguageProvider";

export const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="h-screen flex flex-col container justify-center">
      <div className="container max-w-6xl">
        <div className="font-bold">
          <h1>
            <span className="text-2xl sm:text-3xl dark:text-gray-300 text-gray-700 block">
              Apaza Calsin
            </span>
            <span className="text-3xl sm:text-4xl dark:text-gray-200 text-gray-800">
              Michael Secarlos
            </span>
          </h1>
          <h2 className="text-4xl sm:text-5xl dark:text-green-400 text-green-500">
            {language === "en"
              ? "Fullstack Developer"
              : "Desarrollador Fullstack"}
          </h2>
        </div>
        <p className="md:text-lg py-5">
          {language === "en"
            ? "Graduated in Systems Engineering from the National University of San Agustin. With knowledge in "
            : "Egresado de la carrera de Ingenieria de Sistemas de la Universidad Nacional de San Agustín de Arequipa. Con conocimientos en desarrollo"}
          <span className="dark:text-green-400 text-green-500 font-bold">
            {" "}
            frontend
          </span>
          {language === "en" ? " and " : " y "}
          <span className="dark:text-green-400 text-green-500 font-bold">
            backend
          </span>
          {language === "en"
            ? " developement. Also experience in different programming languages, databases and web frameworks."
            : ". Asi como tambien en distintos lenguajes de programación, bases de datos y frameworks web."}
        </p>
        <div className="sm:flex gap-2">
          <Anchor
            text="LinkedIn"
            href="https://www.linkedin.com/in/michael-apaza-calsin-a99572180/"
            Icon={LinkedInIcon}
            rel="noopener noreferrer"
            target="_blank"
          />
          <Anchor
            text="Github"
            href="https://github.com/michaelsecar/"
            Icon={GitHubIcon}
            rel="noopener noreferrer"
            target="_blank"
          />
          <Anchor text="Curriculum" href="/CV.pdf" download="" Icon={CVIcon} />
        </div>
      </div>
    </div>
  );
};
