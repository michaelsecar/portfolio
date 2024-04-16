import { NavItem } from "./NavItem"
import { HomeIcon, MessageIcon, ProjectIcon, ToolsIcon } from '../../icons/Icons'
import { MenuIcon } from "../../icons/Menu"

export const Navbar = ({currentSection=0, menuOpenCallback=undefined}) => {
    const lang = localStorage.getItem('language')

    return (
        <div className="fixed w-screen left-0 bg-opacity-80 backdrop-blur-lg z-10 bg-stone-100 dark:bg-black
            flex items-center justify-between px-10
        ">
            <button onClick={() => menuOpenCallback()}>
                <MenuIcon/>
            </button>

            <ul className="flex justify-center">
                <li>
                    <NavItem
                        text={lang==="en"?"Home":"Inicio"}
                        href="#home" Icon={HomeIcon}
                        isCurrent={currentSection===0}
                    />
                </li>
                <li>
                    <NavItem
                        text={lang==="en"?"Projects":"Proyectos"}
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
                        text={lang==="en"?"Contact":"Contacto"}
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