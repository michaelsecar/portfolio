import { ContactInput } from "./ContactInput"
import { Button } from '../Button'
import { MailIcon } from '../../icons/Icons'
import { Title } from '../Title'

export const Contact = () => {
    return (
        <div className="container h-screen flex flex-col justify-center">
            <Title title="Contacto" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, vero! Perferendis, tempore!"/>
            <div className="flex gap-16 justify-center">
                <div className="flex w-1/2 flex-col">
                    <h1 className="text-3xl">
                        <span className="font-bold">¿Quieres comunicarte conmigo?</span>
                        <p>
                            Por favor, completa el siguiente formulario para contactarme
                        </p>
                    </h1>
                    <p className="py-5 text-xl">
                        Trataré de responderte lo más antes posible, no dude en consultarme, que espere una respuesta pronto.
                    </p>
                </div>
                <div className="flex w-1/3">
                    <form action="" className="w-full pb-5 rounded-md">
                        <ContactInput input="Asunto"/>
                        <ContactInput input="Nombre"/>
                        <ContactInput input="Empresa"/>
                        <ContactInput input="Mensaje"/>
                        <p className="py-4 text-gray-500">
                            El envio de mensajes se realiza mediante Gmail, ademas tu información no se compartirá con nadie.
                        </p>
                        <Button value="Enviar mensaje" Icon={MailIcon}/>
                    </form>
                </div>
            </div>
        </div>
    )
}