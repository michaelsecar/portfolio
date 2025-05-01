import { Button } from "../../../components/Button";
import { PopUp } from "../../../components/PopUp";
import { ColorInput } from "../../../components/ColorInput";
import { ColorContext } from "../../../contexts/ColorContext";
import { useContext } from "react";

export const SettingsPopUp = ({ isOpen, onClose }) => {
  const { primaryColor, setPrimaryColor } = useContext(ColorContext);
  console.log(primaryColor);
  return (
    <PopUp isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-2 gap-4 items-center">
        <span>Tema</span>
        <Button text="Claro" onClick={() => {}} />
        <span>Fondo animado</span>
        <Button text="Activar" onClick={() => {}} />
        <span>Color primario</span>
        <ColorInput
          name="primaryColor"
          defaultValue={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </div>
    </PopUp>
  );
};
