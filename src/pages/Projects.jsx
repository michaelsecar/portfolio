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
          Si bien no cuento con experiencia real, he trabajado en algunos proyectos personales que listo a continuacion. 
        </p>
      </div>
      <div className="project-cards-container">
        <Card
          title="En-verb"
          description="Aplicacion movil creada en react-native"
          image="enverb.jpg"
          alt="Screenshot de la aplicacion en-verb"
        />
        <Card
          title="ToDoApp"
          description="Descripcion del segundo proyecto"
          image="todoapp.png"
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
