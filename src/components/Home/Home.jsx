import { HomeIcon, CVIcon, GitHubIcon, LinkedInIcon} from '../../icons/Icons'
import { Anchor } from '../Anchor'

export const Home = () => {
    return (
        <div className="h-screen flex flex-col container justify-center">
            <div className="container max-w-6xl">
                <div className="font-bold">
                    <h1 className="text-5xl text-gray-200">Michael Secarlos AC</h1>
                    <h2 className="text-4xl text-green-500">Desarrollador Fullstack</h2>
                </div>
                <p className="text-lg py-5">
                   Sint nostrum perferendis modi alias velit delectus? Consequuntur ducimus eum rem, ipsam sint libero corporis quibusdam ipsum aliquam natus fuga expedita. Qui et sequi vitae perferendis alias nisi ipsam voluptas.
                </p>
                <div className='flex gap-2'>
                    <Anchor text="LinkedIn" href="https://www.linkedin.com/in/michael-secarlos-a99572180/" Icon={LinkedInIcon}/>
                    <Anchor text="Github" href="https://github.com/FanFaRoNoObSkY" Icon={GitHubIcon}/>
                    <Anchor text="Curriculum" href="../../public/CV.pdf"download='' Icon={CVIcon}/>
                </div>
            </div>
        </div>
    )
}