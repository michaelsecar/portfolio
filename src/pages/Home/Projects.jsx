import { Paper } from "../../components/Paper";
import { IconButton } from "../../components/IconButton";
import { LeftArrow, RightArrow } from "../../icons/Arrows";
import { H2 } from "../../components/Headings";
import {
  CardBody,
  CardContainer,
  CardHeader,
  CardImage,
} from "../../components/Card";
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
  ];
  return (
    <div className="">
      <Paper>
        <div className="flex justify-between items-center">
          <H2>Mis proyectos</H2>
        </div>
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            architecto sequi perspiciatis.
          </div>
          <div className="py-4 px-12 flex gap-4 justify-center">
            <IconButton icon={<LeftArrow />} isDisabled />
            {projects.map((element, index) => {
              return (
                <CardContainer key={index}>
                  <CardHeader>{element.title}</CardHeader>
                  <CardImage image={element.image} />
                  <CardBody>{element.description}</CardBody>
                </CardContainer>
              );
            })}
            <IconButton icon={<RightArrow />} isDisabled={true} />
          </div>
        </div>
      </Paper>
    </div>
  );
};
