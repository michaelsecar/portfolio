import { GridElement } from "./GridElement";
import { Title } from "../../components/Title";
import { useState, useEffect, useContext } from "react";
import { getProjects } from "../../services/Projects.service";
import { LanguageContext } from "../../providers/LanguageProvider";
import { motion } from "motion/react";

export const Projects = () => {
  const { language } = useContext(LanguageContext);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <motion.div
      className="min-h-screen container pt-8"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <Title
        title={language === "en" ? "Projects" : "Proyectos"}
        description={
          language === "en"
            ? "Mention about my previous projects"
            : "Mención de los proyectos en los que he trabajado anteriormente"
        }
      />
      <div className="flex">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1">
          {projects.map((e, i) => {
            return (
              <GridElement
                key={i}
                identifier={i}
                title={e.title}
                description={e.description}
                image={e.image}
                repository={e.repository}
                technologies={e.technologies}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
