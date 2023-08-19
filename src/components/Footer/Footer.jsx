
export const Footer = () => {
    return (
        <div className="container flex justify-between h-48 mt-24">
            <div className="flex w-7/12 flex-col">
                <h3 className="text-green-400 font-bold text-2xl">
                    Mi Portfolio
                </h3>
                <p className="text-gray-400 py-5">
                    Este portfolio tiene como fin dar a conocer mi perfil profesional y evidenciar mis avances, experiencia y conocimientos en el desarrollo de software.
                </p>
            </div>
            <div className="flex w-2/12 flex-col [&>ul>li>a]:text-green-400">
                <ul>
                    <li>
                        <a href="#home">Inicio</a>
                    </li>
                    <li>
                        <a href="#stack">Stack</a>
                    </li>
                    <li>
                        <a href="#projects">Proyectos</a>
                        </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="flex w-2/12 flex-col">
                <ul>
                    <li>Proyecto 1</li>
                    <li>Proyecto 2</li>
                    <li>Proyecto 3</li>
                    <li>Proyecto 4</li>
                    <li>Proyecto 5</li>
                </ul> 
            </div>
            <div className="flex w-2/12 flex-col [&>ul>li>a]:text-green-400">
                <ul>
                    <li>
                        <a href="https://twitter.com/michaelsecarlos">Twitter</a>
                    </li>
                    <li>
                        <a href="https://github.com/FanFaRoNoObSkY">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/michael-secarlos-a99572180/">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}