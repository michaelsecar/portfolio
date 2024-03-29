import { useState } from 'react'
import { Anchor } from '../Utils/Anchor'
import { Title } from '../Utils/Title'
import { TextInput } from "../Utils/TextInput"
import { MailIcon } from '../../icons/Icons'
import { Copy2Clipboard } from '../../icons/Icons'

export const Contact = () => {
    const [asunto, setAsunto] = useState("")
    const [nombre, setNombre] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [mensaje, setMensaje] = useState("")

    const [filled, setFilled] = useState(false)
    const copyToClipboard = () => {
        navigator.clipboard.writeText("michaelsecar@gmail.com")
        setFilled(true)
        setTimeout(()=>setFilled(false), 2000)
    }

    return (
        <div className="container h-fit pt-8">
            <Title title="Contacto" description="Resuelva sus dudas y consultas acerca de mí a través de un mensaje."/>
            <div className="md:flex gap-16 justify-center">
                <div className="hidden md:flex md:w-3/5 md:visible flex-col justify-center gap-3">
                    <h2 className="font-bold text-green-600 dark:text-green-400 text-3xl">¿Quieres comunicarte conmigo?</h2>
                    <p className='dark:text-gray-200 text-xl text-gray-600'>
                        Completa el formulario o envíame un correo a: 
                        <button onClick={copyToClipboard} className="flex dark:text-green-400 text-green-600 font-bold items-center">
                            {
                                filled?
                                <span className="animate-pulse">¡Copiado al portapapeles!</span>:"michaelsecar@gmail.com"
                            }<Copy2Clipboard filled={filled}/>
                        </button>
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Responderé lo antes posible, no dude en realizar su consulta y espere una pronta respuesta. 
                    </p>
                    <p className='dark:text-green-400 text-green-600 font-bold text-2xl'>Gracias</p>
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