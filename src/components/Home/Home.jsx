import { HomeIcon, CVIcon, GitHubIcon, LinkedInIcon} from '../../icons/Icons'
import { Anchor } from '../Utils/Anchor'

export const Home = () => {
    return (
        <div className="h-screen flex flex-col container justify-center">
            <div className="container max-w-6xl">
                <div className="font-bold">
                    <h1 className="text-5xl text-gray-200">Michael Secarlos AC</h1>
                    <h2 className="text-4xl text-green-500">Desarrollador Fullstack</h2>
                </div>
                <p className="text-lg py-5">
                    Egresado de la carrera de <span className="text-green-500 font-bold">Ingenieria de Sistemas</span> de la Universidad Nacional de San Agustín de Arequipa. Con conocimientos en desarrollo web tanto para el <span className='text-green-400'>frontend</span> y <span className='text-green-400'>backend</span>.
                    A pesar de esto, estoy abierto a nuevas oportunidades y experiencias en el mundo de la tecnología.
                </p>
                <div className='flex gap-2'>
                    <Anchor text="LinkedIn" href="https://www.linkedin.com/in/michael-apaza-calsin-a99572180/" Icon={LinkedInIcon} rel="noopener noreferrer" target="_blank"/>
                    <Anchor text="Github" href="https://github.com/michaelsecar/" Icon={GitHubIcon} rel="noopener noreferrer" target="_blank"/>
                    <Anchor text="Curriculum" href="/CV.pdf"download='' Icon={CVIcon}/>
                </div>
            </div>
        </div>
    )
}