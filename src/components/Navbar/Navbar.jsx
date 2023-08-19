import { NavItem } from "./NavItem"
import { HomeIcon, MessageIcon, ProjectIcon, ToolsIcon } from '../../icons/Icons'

export const Navbar = () => {
    return (
        <div className="fixed w-screen left-0 border-b-2 border-gray-600 bg-opacity-80 bg-black backdrop-blur-lg z-10">
            <ul className="flex justify-center">
                <li>
                    <NavItem text="Inicio" href="#home" Icon={HomeIcon}/>
                </li>
                <li>
                    <NavItem text="Stack" href="#stack" Icon={ToolsIcon}/>
                </li>
                <li>
                    <NavItem text="Proyectos" href="#projects" Icon={ProjectIcon}/>
                </li>
                <li>
                    <NavItem text="Contacto" href="#contact" Icon={MessageIcon}/>
                </li>
            </ul>
        </div>

    )
}