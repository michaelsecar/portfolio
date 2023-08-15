
export const Navbar = () => {
    return (
        <div>
            <ul className="flex flex-row gap-12 p-3 justify-center fixed w-screen">
                <li>
                    <a href="#" className="text-xl text-gray-200">Inicio</a>
                </li>
                <li>
                    <a href="#" className="text-xl text-gray-200">Sobre mí</a>
                </li>
                <li>
                    <a href="#" className="text-xl text-gray-200">Proyectos</a>
                </li>
                <li>
                    <a href="#" className="text-xl text-gray-200">Contacto</a>
                </li>
            </ul>
        </div>

    )
}