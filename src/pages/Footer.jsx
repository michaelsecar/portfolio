import { Gmail, LinkedIn, Twitter } from "../components/Icons"
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
                    <ul className="footer-list">
                        <li>Redes</li>
                        <li>
                            <a href="#">
                                <Twitter />
                            </a>
                            <a href="#">
                                <LinkedIn />
                            </a>
                            <a href="#">
                                <Gmail />
                            </a>
                        </li>
                        <li>LinkedIn</li>
                        <li>Gmail</li>
                    </ul>
                </div>
            </div>
            <div className="footer-message">
                Portfolio creado por Michael Secarlos - 2023
            </div>
        </div>
    )
}

export default Footer
