import { useState } from "react"
import { GridElement } from "./GridElement"
import { Title } from "../Title"
export const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(0)

    const projects = [
        {
            title: "Proyecto 1",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Proyecto 2",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Proyecto 3",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Proyecto 4",
            description: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            title: "Proyecto 5",
            description: "Lor5m ipsum dolor sit amet consectetur.",
        }
    ]

    const selectProject = (projectIndex) => {
        setSelectedProject(projectIndex)
    }

    return (
        <div className="h-screen flex container flex-col justify-center">
            <Title title="Proyectos" description=""/>
            <div className="flex md:flex-row flex-col gap-16 w-full h-2/3">
                <div className="w-1/2 ">
                    <div className="grid grid-cols-3 grid-flow-row gap-2 h-full">
                        {
                            projects.map((e,i) => {
                                return <GridElement key={i} identifier={i} title={e.title} description={e.description} callback={selectProject}/>
                            })
                        }
                    </div>
                </div>
                <div className="bg-green-900 w-1/2">
                    <h2>
                        {projects[selectedProject].title}
                    </h2>
                    <p>
                        {projects[selectedProject].description}
                    </p>
                </div>
            </div>
        </div>
    )
}