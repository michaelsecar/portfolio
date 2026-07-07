import { motion } from "motion/react";
import { Title } from "../../components/Title";
import { useContext } from "react";
import { LanguageContext } from "../../providers/LanguageProvider";
import { ExperienceEntry } from "./ExperienceEntry";

export const Experience = () => {
  const { language } = useContext(LanguageContext);

  const experiences = [
    {
      role: "Freelance Mobile Developer",
      enterprise: "Condori Business Group S.A.C",
      time: "2026 Abril - Presente",
      entries: [
        "Implementacion de aplicacion movil CBGroup Control en React Native para la API SIRE de SUNAT",
        "Desarollo y despliegue de backend y plataforma web en Expresss, Node, Prisma y PostgreSQL",
        "Plataforma de gestion de usuarios y gestion de fechas de vencimiento para CBGroupControl con React, Shadcn y React Router",
      ],
    },

    {
      role: "Frontend Developer",
      enterprise: "Iuvadesoft S.R.L.",
      time: "2024 Octubre - 2025 Julio",
      entries: [
        "Migracion y publicacion de Siggo, Sigge para Android e iOS",
        "Implementacion de aplicaciones de gestién de impresoras y lectores biométricos",
        "Implementacion de plataformas web con ingreacion con pasarelas de Pago como Culqi",
        "Migracion de plataforma de gestion documental a React",
      ],
    },
    {
      role: "Practicante de Sistemas",
      enterprise: "Portugal Constructora",
      time: "2024 Julio - Agosto",
      entries: [
        "Asistencia y soporte de sistemas y equipos de tecnologias de la información",
        "Definicion y modelado de base de datos en PostgreSQL",
        "Diseño de plataforma de CMS en React con ChakraUI y Django",
      ],
    },
  ];

  return (
    <motion.div
      className="min-h-screen container pt-8"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience, index) => (
          <ExperienceEntry key={index} experienceEntry={experience} />
        ))}
      </div>
    </motion.div>
  );
};
