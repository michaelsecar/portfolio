import { Button } from "../../components/Button";
import { H1, H2 } from "../../components/Headings";
import { IconButton } from "../../components/IconButton";
import { Paper } from "../../components/Paper";
import { DownloadIcon } from "../../icons/DownloadIcon";
import { PaperIcon } from "../../icons/PaperIcon";
import { SunIcon } from "../../icons/SunIcon";

export const Hero = () => {
  return (
    <div className="">
      <Paper>
        <div className="flex justify-between items-center">
          <div>
            <H1>
              Michael Secarlos{" "}
              <span className="text-2xl block">Apaza Calsin</span>
            </H1>
            <H2>Software developer</H2>
          </div>
          <div>
            <ul className="flex gap-2">
              <li>
                <Button text="CV" icon={<PaperIcon />}/>
              </li>
              <li>
                <Button text="Proyectos" icon={<PaperIcon />}/>
              </li>
              <li>
                <IconButton icon={<SunIcon />} />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4">
          Egresado de la carrera de Ingenieria de Sistemas de la Universidad
          Nacional de San Agustín de Arequipa. Con conocimientos en desarrollo
          frontend y backend. Asi como tambien en distintos lenguajes de
          programación, bases de datos y frameworks web
        </div>
      </Paper>
    </div>
  );
};
