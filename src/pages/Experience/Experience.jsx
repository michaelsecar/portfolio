import { motion } from "motion/react";
import { Title } from "../../components/Title";
import { useContext } from "react";
import { LanguageContext } from "../../providers/LanguageProvider";

export const Experience = () => {
  const { language } = useContext(LanguageContext);

  return (
    <motion.div
      className="h-fit container pt-8"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <Title
        title={language === "en" ? "Experience" : "Experiencia"}
        description={
          language === "en"
            ? "Mention about my previous work experience"
            : "Mención de mis experiencias de trabajo anteriores"
        }
      />
      <div className="flex h-2/3">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1"></div>
      </div>
    </motion.div>
  );
};
