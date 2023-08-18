import { NavItem } from "./NavItem"

export const Navbar = () => {
    return (
        <div className="fixed w-screen left-0 border-b-2 border-gray-600 ">
            <ul className="flex gap-12 justify-center">
                <li>
                    <NavItem text="Inicio" href="#home"/>
                </li>
                <li>
                    <NavItem text="Sobre mí" href="#"/>
                </li>
                <li>
                    <NavItem text="Proyectos" href="#"/>
                </li>
                <li>
                    <NavItem text="Contacto" href="#"/>
                </li>
            </ul>
        </div>

    )
}