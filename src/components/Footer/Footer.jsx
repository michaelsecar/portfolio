import { MailIcon, GitHubIcon, LinkedInIcon } from '../../icons/Icons'

export const Footer = () => {
    return (
        <div className="container flex h-48 mt-24 sm:justify-between justify-normal gap-5">
            <div className="flex w-7/12 flex-col">
                <h3 className="dark:text-green-400 text-green-600 font-bold text-2xl">
                    Mi Portfolio
                </h3>
                <p className="text-gray-600 dark:text-gray-400 py-5 text-xs md:text-sm">
                    Este portfolio tiene como fin dar a conocer mi perfil profesional y evidenciar mis avances, experiencia y conocimientos en el desarrollo de software.
                </p>
            </div>

            <div className="flex w-2/12 flex-col [&>ul>li>a]:text-green-400">
                <h2 className="font-bold text-2xl dark:text-gray-200 text-gray-500">Contacto</h2>
                <ul>
                    <li className='flex'>
                        <a className="flex gap-2 items-center" href="https://mail.google.com/mail/?view=cm&fs=1&to=michaelsecar@gmail.com">
                            <MailIcon/> michaelsecar@gmail.com
                        </a>
                    </li>
                    <li className='flex'>
                        <a className="flex gap-2 items-center" href="https://github.com/michaelsecar" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon/> GitHub
                        </a>
                    </li>
                    <li className='flex'>
                        <a className="flex gap-2 items-center" href="https://www.linkedin.com/in/michael-apaza-calsin-a99572180/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon/> LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}