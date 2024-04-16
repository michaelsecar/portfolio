import { GridElement } from "./GridElement"
import { Title } from "../Utils/Title"
import { useState, useEffect } from "react"
import { getProjects } from "../../services/Projects.service"

export const Projects = () => {
    const lang = localStorage.getItem('language')

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        getProjects()
        .then(data=>{
            setProjects(data)
        })
    }, [])
   
    return (
        <div className="h-fit container pt-8">
            <Title 
                title={lang==="en"?"Projects":"Proyectos"}
                description={lang==="en"?"Mention about my previous projects":"Mención de los proyectos en los que he trabajado anteriormente"}
            />
            <div className="flex h-2/3">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1">
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