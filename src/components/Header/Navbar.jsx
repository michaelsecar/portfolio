import { NavItem } from "./NavItem"
import { MenuIcon, HomeIcon, MessageIcon, ProjectIcon, ToolsIcon } from '../../icons/Icons'

import { useContext } from 'react'

import { MenuContext } from '../../providers/MenuProvider'
import { LanguageContext } from '../../providers/LanguageProvider'
import { SectionContext } from '../../providers/SectionProvider'

export const Navbar = () => {
    const { language }= useContext(LanguageContext)
    const { currentSection } = useContext(SectionContext)
    const menu = useContext(MenuContext)

    return (
        <div className="fixed w-screen left-0 bg-opacity-80 backdrop-blur-lg z-10 bg-stone-100 dark:bg-black
            flex items-center justify-between px-10
        ">
            <button onClick={menu.toggle}>
                <MenuIcon/>
            </button>

            <ul className="flex justify-center">
                <li>
                    <NavItem
                        text={language==="en"?"Home":"Inicio"}
                        href="#home" Icon={HomeIcon}
                        isCurrent={currentSection===0}
                    />
                </li>
                <li>
                    <NavItem
                        text={language==="en"?"Projects":"Proyectos"}
                        href="#projects"
                        Icon={ProjectIcon}
                        isCurrent={currentSection===1}
                    />
                </li>
                <li>
                    <NavItem text="Stack" href="#stack" Icon={ToolsIcon} isCurrent={currentSection===2}/>
                </li>
                <li>
                    <NavItem
                        text={language==="en"?"Contact":"Contacto"}
                        href="#contact"
                        Icon={MessageIcon}
                        isCurrent={currentSection===3}
                    />
                </li>
            </ul>

            <div></div>
        </div>
    )
}