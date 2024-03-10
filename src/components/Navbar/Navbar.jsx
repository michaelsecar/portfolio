import { NavItem } from "./NavItem"
import { HomeIcon, MessageIcon, ProjectIcon, ToolsIcon } from '../../icons/Icons'
import { ToogleMode } from "../Utils/ToogleMode"

export const Navbar = ({currentSection=0}) => {
    return (
        <div className="fixed w-screen left-0 bg-opacity-80 backdrop-blur-lg z-10 bg-stone-100 dark:bg-black">
            <ul className="flex justify-center">
                <li>
                    <NavItem text="Inicio" href="#home" Icon={HomeIcon} isCurrent={currentSection===0}/>
                </li>
                <li>
                    <NavItem text="Proyectos" href="#projects" Icon={ProjectIcon} isCurrent={currentSection===1}/>
                </li>
                <li>
                    <NavItem text="Stack" href="#stack" Icon={ToolsIcon} isCurrent={currentSection===2}/>
                </li>
                <li>
                    <NavItem text="Contacto" href="#contact" Icon={MessageIcon} isCurrent={currentSection===3}/>
                </li>
            </ul>
            <div className="absolute right-3 sm:right-16 md:right-8 top-2 sm:top-3">
                <ToogleMode/>
            </div>
        </div>
    )
}