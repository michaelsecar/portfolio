import { useState } from 'react'
import { Anchor } from '../Utils/Anchor'
import { Title } from '../Utils/Title'
import { TextInput } from "../Utils/TextInput"
import { MailIcon } from '../../icons/Icons'

export const Contact = () => {
    const [asunto, setAsunto] = useState("")
    const [nombre, setNombre] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [mensaje, setMensaje] = useState("")

    const handler = (event) => {
        console.log(event.targe.value)
        setAsunto(event.target.value)
    }
    
    return (
        <div className="container h-fit pt-8">
            <Title title="Contacto" description="Resuelva sus dudas y consultas acerca de mí a través de un mensaje."/>
            <div className="md:flex gap-16 justify-center">
                <div className="hidden md:flex md:w-3/5 md:visible flex-col justify-center gap-3">
                    <h2 className="font-bold text-green-400 text-3xl">¿Quieres comunicarte conmigo?</h2>
                    <p className='text-gray-200 text-2xl'>
                        Por favor, completa el siguiente formulario para contactarme
                    </p>
                    <p className="text-lg text-gray-400">
                        Responderé lo antes posible, no dude en realizar su consulta y espere una pronta respuesta. 
                    </p>
                    <p className='text-green-400 font-bold text-2xl'>Gracias</p>
                </div>
                <div className="flex md:w-2/5">
                    <form action="#" method="get" className="w-full rounded-md">
                        <TextInput input="Asunto" callback={setAsunto}/>
                        <TextInput input="Nombre" callback={setNombre}/>
                        <TextInput input="Empresa" callback={setEmpresa}/>
                        <TextInput input="Mensaje" callback={setMensaje}/>
                        <p className="py-4 text-gray-500 size-sm">El mensaje sera enviado por Gmail al correo: michaelsecar@gmail.com.</p>
                        <div className="flex">
                            <Anchor text="Enviar mensaje" Icon={MailIcon} href={`https://mail.google.com/mail/?view=cm&fs=1&to=michaelsecar@gmail.com&su=${asunto}+-+${empresa}&body=De+${nombre}.+${mensaje}`}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}