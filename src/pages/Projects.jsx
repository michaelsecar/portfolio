import Card from "../components/Card"
import "./Projects.css"

const Projects = () => {
  return (
    <div className="container projects-container">
      <h1 className="title">
        <span className="green-text h1">Proyectos</span> en los que he trabajado
      </h1>
      <div className="description">
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          obcaecati hic doloribus, accusantium dolor aspernatur? Culpa dicta
          distinctio perspiciatis sequi.
        </p>
      </div>
      <div className="project-cards-container">
        <Card
          title="Project 1"
          description="Descripcion del primer proyecto"
          image="moon.jpg"
          alt="Texto alternativo"
        />
        <Card
          title="Project 2"
          description="Descripcion del segundo proyecto"
          image="moon.jpg"
          alt="Texto alternativo"
        />
        <Card
          title="Project 3"
          description="Descripcion del tercer proyecto"
          image="moon.jpg"
          alt="Texto alternativo"
        />
      </div>
    </div>
  )
}

export default Projects
