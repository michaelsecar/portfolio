import { MailIcon, GitHubIcon, LinkedInIcon } from '../../icons/Icons'

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
                <h2 className="font-bold text-2xl text-gray-200">Contacto</h2>
                <ul>
                    <li>
                        <a className="text-green-400 flex gap-2 items-center" href="https://mail.google.com/mail/?view=cm&fs=1&to=michaelsecar@gmail.com">
                            <MailIcon/> Gmail
                        </a>
                    </li>
                    <li>
                        <a className="text-green-400 flex gap-2 items-center" href="https://github.com/michaelsecar" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon/> GitHub
                        </a>
                    </li>
                    <li>
                        <a className="text-green-400 flex gap-2 items-center" href="https://www.linkedin.com/in/michael-secarlos-a99572180/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon/> LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}