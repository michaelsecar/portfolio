import { NavItem } from "./NavItem"
import { HomeIcon, MessageIcon, ProjectIcon, ToolsIcon } from '../../icons/Icons'

export const Navbar = ({currentSection=0}) => {
    return (
        <div className="fixed w-screen left-0 bg-opacity-80 bg-black backdrop-blur-lg z-10">
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
        </div>
    )
}