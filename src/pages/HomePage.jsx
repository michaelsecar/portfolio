import Button from '../components/Button'
import { Download, GitHub, LinkedIn, Gmail} from '../components/Icons'

import './HomePage.css'

const HomePage = () => {
    return ( 
        <div className="container home-container">
            <h1 className="title">
                <span> Saludos, soy </span>
                <span className="green-text h1">Michael Secarlos</span> 
                <span>y me dedico al <span className="green-text">Desarrollo frontend</span></span>
            </h1>
            <div className="description">
                <p className="description-text">
                    Estudiante de <span className="green-text">Ingeniería de Sistemas</span> cursando el 9no semestre en la <span className="green-text">Universidad Nacional de San Agustín</span> de Arequipa. 
                    Con conocimientos adquiridos durante el desarrollo de proyectos implementados en base a las siguientes tecnologías:
                </p>
            </div>
            <div className="button-container">
                <Button text="GitHub" href="https://github.com/FanFaRoNoObSkY" icon={<GitHub/>}/>
                <Button text="LinkedIn" href="https://www.linkedin.com/in/michael-secarlos-a99572180/" icon={<LinkedIn/>}/>
                <Button text="Gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=michaelsecar@gmail.com" icon={<Gmail/>}/>
                <Button text="Currículum" href="CV.pdf" icon={<Download/>} download/>
            </div>
        </div>
    )
}

export default HomePage
