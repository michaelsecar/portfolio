import { Button } from "../../components/Button";
import { H1, H2, H3 } from "../../components/Headings";
import { IconButton } from "../../components/IconButton";
import { TextInput } from "../../components/Input";
import { Paper } from "../../components/Paper";
import { DownloadIcon } from "../../icons/DownloadIcon";
import { PaperIcon } from "../../icons/PaperIcon";
import { SunIcon } from "../../icons/SunIcon";

export const Contact = () => {
  return (
    <div className="">
      <Paper>
        <div className="flex justify-between items-center">
          <div>
            <H2>Contacto</H2>
          </div>
          <div></div>
        </div>

        <div className="pt-4">
          <H3>¿Cómo comunicarse conmigo?</H3>
          <div className="flex flex-col gap-4">
            <p>
              Completa el formulario o envíame un correo
              a:michaelsecar@gmail.com Responderé lo antes posible, no dude en
              realizar su consulta y espere una pronta respuesta. Gracias!
            </p>
            <div className="p-4 w-1/3 rounded-lg ">
              <form
                action="https://mail.google.com/mail/"
                method="GET"
                target="_blank"
              >
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between">
                    <label htmlFor="asunto">Asunto</label>
                    <TextInput id="asunto" name="su" onChange={() => {}} />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="mensaje">Mensaje</label>
                      <TextInput id="mensaje" name="body" onChange={() => {}} />
                    </div>
                  </div>
                  <input type="text" name="view" hidden defaultValue="cm" />
                  <input type="text" name="fs" hidden defaultValue="1" />
                  <input
                    type="text"
                    name="to"
                    hidden
                    defaultValue="michaelsecar@gmail.com"
                  />
                  <Button type="submit" text="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};
