import { motion, transform } from "framer-motion";
import { Paper } from "../../components/Paper";
import { H2 } from "../../components/Headings";
import { Card } from "../../components/Card";

export const Services = () => {
  return (
    <Paper>
      <div className="flex justify-center items-center ">
        <H2>SERVICES</H2>
      </div>
      <div>
        <div className="pt-4 grid grid-cols-3 justify-center items-center">
          <motion.div>Saludos</motion.div>
        </div>
      </div>
    </Paper>
  );
};
