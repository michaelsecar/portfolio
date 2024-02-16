import { GridElement } from "./GridElement"
import { Title } from "../Utils/Title"
import { useState, useEffect } from "react"
import { getProjects } from "../../services/Projects.service"

export const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        getProjects()
        .then(data=>{
            setProjects(data)
        })
    },[])
   

    return (
        <div className="h-screen container pt-8">
            <Title title="Proyectos" description="Mención de los proyectos en los que he trabajado anteriormente"/>
            <div className="flex h-2/3">
                <div className="grid grid-cols-3 gap-3">
                    {
                        projects.map((e,i) => {
                            return <GridElement 
                                key={i} 
                                identifier={i} 
                                title={e.title} 
                                description={e.description} 
                                image={e.image}
                                repository={e.repository}
                                technologies={e.technologies}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}