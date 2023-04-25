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
                        Este portafolio resume mi conocimiento, experiencia
                        y habilidades en el desarrollo de software.
                    </div>
                </div>
                <div className="footer-column">
                    <h3 className="green-text">Sociales</h3>
                    <div className="footer-explain">
                        Puedes conectar conmigo a través de las siguientes redes
                    </div> 
                    <div>
                        <p className="network-data">
                            Twitter: @michaelsecarlos
                        </p>
                        <p className="network-data">
                            Gmail: michaelsecar@gmail.com
                        </p>
                    </div> 
                </div>
            </div>
            <div className="footer-message">
                Portfolio creado por Michael Secarlos - 2023 - michaelsecar@gmail.com
            </div>
        </div>
    )
}

export default Footer
