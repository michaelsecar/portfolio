import { useContext } from 'react'
import { CppIcon, CssIcon, DjangoIcon, HtmlIcon, JavaIcon, JavascriptIcon, NodeIcon, PythonIcon, ReactIcon } from '../../icons/StackIcons'
import { Title } from '../Utils/Title'
import { StackItem } from './StackItem'
import { LanguageContext } from '../../providers/LanguageProvider'

export const Stack = () => {
    const { language }= useContext(LanguageContext)

    const items = [
        { name: "Django", icon: DjangoIcon },
        { name: "React", icon: ReactIcon },
        { name: "Node", icon: NodeIcon },
        { name: "Java", icon: JavaIcon },
        { name: "C++", icon: CppIcon },
        { name: "Python", icon: PythonIcon },
        { name: "Javascript", icon: JavascriptIcon },
        { name: "HTML5", icon: HtmlIcon },
        { name: "CSS3", icon: CssIcon }
    ]

    return (
        <div className="container h-fit pt-8">
            <Title 
                title="Stack" 
                description={language==="en"?"Current technologies that I use":"Estas son las tecnologías que manejo actualmente."}
            />
            <div className='grid grid-cols-3 place-items-center gap-10'>
                {
                    items.map((e,i)=>{
                        return <StackItem key={i} item={e.name} Icon={e.icon}/>
                    })
                }
            </div>
        </div>
    )
}