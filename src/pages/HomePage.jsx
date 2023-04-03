import Button from '../components/Button'
import { Home, Download, Info, Desktop} from '../components/Icons'

import './HomePage.css'

const HomePage = () => {
    const downloadCV = () => {
        alert("Se deberia de descargar el CV")
    }
    const goHome = () => {
        alert("Se deberia de ir al inicio")
    }
    const goInfo = () => {
        alert("Deberia de ir a la informacion de la persona")
    }
    const goProjects = () => {
        alert("Deberia de ir a la seccion de proyectos")
    }

    return ( 
        <div className="container home-container">
            <h1 className="title">
                <span> Saludos, soy </span>
                <span className="green-text h1">Michael Secarlos</span> 
                <span>y me dedico al <span className="green-text">Desarrollo frontend</span></span>
            </h1>
            <div className="description">
                <p className="description-text">
                Lorem ipsum dolor <span className="green-text">Michael Secarlos AC</span> sit amet consectetur adipisicing elit. Nihil ea cupiditate porro hic perspiciatis est.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className="green-text">Sistemas</span> Harum, possimus! Reiciendis excepturi nulla voluptates.
                </p>
            </div>
            <div className="button-container">
                <Button value="" action={goHome} icon={<Home/>}/>
                <Button value="" action={goProjects} icon={<Desktop/>}/>
                <Button value="" action={goInfo} icon={<Info/>}/>
                <Button value="" action={downloadCV} icon={<Download/>}/>
            </div>
        </div>
    )
}

export default HomePage