import { useState } from 'react'
import { Anchor } from '../Utils/Anchor'
import { Title } from '../Utils/Title'
import { TextInput } from "../Utils/TextInput"
import { MailIcon } from '../../icons/Icons'
import { Copy2Clipboard } from '../../icons/Icons'

export const Contact = () => {
    const lang = localStorage.getItem('language')

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
            <Title 
                title={lang==="en"?"Contact":"Contacto"}
                description={lang==="en"?
                "Send me a message and I'll respond as soon as possible.":
                "Resuelva sus dudas y consultas acerca de mí a través de un mensaje."}
            />
            <div className="md:flex gap-16 justify-center">
                <div className="hidden md:flex md:w-3/5 md:visible flex-col justify-center gap-3">
                    <h2 className="font-bold text-green-600 dark:text-green-400 text-3xl">
                        {
                            lang==="en"?
                            "Want to contact me?":
                            "¿Quieres comunicarte conmigo?"
                        }
                        
                    </h2>
                    <p className='dark:text-gray-200 text-xl text-gray-600'>
                        {lang==="en"? 
                        "Fill out the form or send me an email to:" :
                        "Completa el formulario o envíame un correo a:"}
                        <button onClick={copyToClipboard} className="flex dark:text-green-400 text-green-600 font-bold items-center">
                            {
                                filled?
                                <span className="animate-pulse">
                                    {
                                        lang==="en"? 
                                        "Copied to clipboard!" :
                                        "¡Copiado al portapapeles!"
                                    }
                                </span>:"michaelsecar@gmail.com"
                            }<Copy2Clipboard filled={filled}/>
                        </button>
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        {
                            lang==="en"?
                            "I will respond as soon as possible, don't hesitate to ask your questions and wait for a prompt response.":
                            "Responderé lo antes posible, no dude en realizar su consulta y espere una pronta respuesta. "
                        }
                    </p>
                    <p className='dark:text-green-400 text-green-600 font-bold text-2xl'>
                        {
                            lang==="en"?
                            "Thank you!":
                            "Gracias!"
                        }
                    </p>
                </div>
                <div className="flex md:w-2/5">
                    <form action="#" method="get" className="w-full rounded-md">
                        <TextInput 
                            input={lang==="en"?"Subject":"Asunto"}
                            callback={setAsunto}
                        />
                        <TextInput
                            input={lang==="en"?"Name":"Nombre"}
                            callback={setNombre}
                        />
                        <TextInput
                            input={lang==="en"?"Company":"Empresa"}
                            callback={setEmpresa}
                        />
                        <TextInput
                            input={lang==="en"?"Message":"Mensaje"}
                            callback={setMensaje}
                        />
                        <p className="py-4 text-gray-500 size-sm">
                            {lang==="en"?
                                "The message will be sent by Gmail to: michaelsecar@gmail.com." :
                                "El mensaje sera enviado por Gmail a: michaelsecar@gmail.com."}
                        </p>
                        <div className="flex">
                            <Anchor 
                                text={lang==="en"?"Send message":"Enviar mensaje"}
                            Icon={MailIcon} href={`https://mail.google.com/mail/?view=cm&fs=1&to=michaelsecar@gmail.com&su=${asunto}+-+${empresa}&body=De+${nombre}.+${mensaje}`}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}