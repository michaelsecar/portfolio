import './Contact.css'

const Contact = () => {
    return (
        <div className="container contact-container">
            <h1 className="title">
                <span>Información de </span><span className="h1 green-text">contacto</span>
            </h1>                
            <div className="description">
                <p className="description-text">
                    Puedes contactarme por correo o dejar un mensaje en el siguiente formulario:
                </p>
            </div>
            <div className="contact-layout">
                <div className="form-container">
                    <form className="contact-form" action="#" method="GET">
                        <label htmlFor="name" className="green-text">Nombre(s) y apellidos</label>
                        <input id="name" className="text-input" type="text" placeholder="Nombre(s)" />

                        <label htmlFor="company" className="green-text">Empresa</label>
                        <input id="company" className="text-input" type="text" placeholder="Compañía" />

                        <label htmlFor='email' className="green-text">Direccion de correo</label>
                        <input id="email" className="text-input" type="text" placeholder="Direccion de correo" />

                        <label htmlFor="message" className="green-text">Mensaje</label>
                        <input id="message" className="text-input" type="text" placeholder="Mensaje" />
                    </form>
                </div>
                <div className="form-space">
                    <div>
                        There is an image
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact