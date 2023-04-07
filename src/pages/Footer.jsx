import {  LinkedIn, Twitter, GitHub } from "../components/Icons"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container footer-container">
            <div className="footer-info">
                <div className="footer-column">
                    <div>
                        <h1 className="green-text">MICHAEL SECARLOS</h1>
                        <h2>APAZA CALSIN</h2>
                    </div>
                    <div className="footer-explain">
                        Este portafolio es un resumen sobre mí, mi experiencia
                        en proyectos en los que participé y evidenciar mis
                        habilidades en el desarrollo de software.
                    </div>
                </div>
                <div className="footer-column">
                    <h3 className="green-text">Sociales</h3>
                    <div className="footer-explain">
                        Puedes enviarme o conectar de mejor manera conmigo a través de las siguientes redes
                    </div> 
                    <div>
                        <a href="https://twitter.com/michaelsecarlos">
                            <Twitter />
                        </a>
                        <a href="https://www.linkedin.com/in/michael-secarlos-a99572180/">
                            <LinkedIn />
                        </a>
                        <a href="https://github.com/FanFaRoNoObSkY">
                            <GitHub/>
                        </a>
                    </div> 
                </div>
            </div>
            <div className="footer-message">
                Portfolio creado por Michael Secarlos - 2023
            </div>
        </div>
    )
}

export default Footer
