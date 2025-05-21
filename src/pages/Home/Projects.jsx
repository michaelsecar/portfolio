import { Paper } from "../../components/Paper";
import { H2 } from "../../components/Headings";
import { Card } from "../../components/Card";
import ReichImage from "/reich.png";
import ChatRSS from "/chatrss.png";
import Enverb from "/enverb.png";

export const Projects = () => {
  const projects = [
    {
      title: "Plataforma academica para el colegio Reich",
      image: ReichImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque. Rerum, doloremque.",
    },
    {
      title: "Aplicacion de chatGPT para el escritorio",
      image: ChatRSS,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque. Rerum, doloremque.",
    },
    {
      title: "Aplicacion mobil para aprendizaje de ingles",
      image: Enverb,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque. Rerum, doloremque.",
    },
    {
      title: "Aplicacion mobil para aprendizaje de ingles",
      image: Enverb,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque. Rerum, doloremque.",
    },
    {
      title: "Plataforma academica para el colegio Reich",
      image: ReichImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque. Rerum, doloremque.",
    },
    {
      title: "Aplicacion de chatGPT para el escritorio",
      image: ChatRSS,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque. Rerum, doloremque.",
    },
  ];
  return (
    <Paper>
      <div className="flex justify-center items-center ">
        <H2>PROJECTS</H2>
      </div>
      <div>
        <div className="pt-4 grid grid-cols-3 justify-center items-center">
          {projects.map((element, index) => {
            return (
              <Card
                key={index}
                title={element.title}
                image={element.image}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </Paper>
  );
};
