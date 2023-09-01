import { GridElement } from "./GridElement"
import { Title } from "../Title"

export const Projects = () => {

    const projects = [
        { title: "En-Verb", description: "Aplicacion para aprender los principales verbos irregulares en inglés", image:"public/enverb.png"},
        { title: "Weather", description: "This is an application to learn english irregular verbs built in React-native", image:""},
        { title: "Todo List", description: "Aplicacion web para gestionar tareas", image:"public/todoapp.png"},
        { title: "Animated Portfolio", description: "This is an application to learn english irregular verbs built in React-native", image:""},
        { title: "Animated Portfolio", description: "This is an application to learn english irregular verbs built in React-native", image:""},
        { title: "Animated Portfolio", description: "This is an application to learn english irregular verbs built in React-native", image:""},
    ]

    const selectProject = (projectIndex) => {
    }

    return (
        <div className="h-screen container pt-8">
            <Title title="Proyectos" description="Los principales proyectos en los que he trabajado por mi cuenta"/>
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
                                callback={selectProject}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}