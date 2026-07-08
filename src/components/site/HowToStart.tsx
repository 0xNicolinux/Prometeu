import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import {
  Award,
  Briefcase,
  Compass,
  FileText,
  GraduationCap,
  Linkedin,
} from "lucide-react";

const STEPS = [
  {
    icon: Compass,
    title: "Escolha uma área",
    text: "Comece pelo que te desperta curiosidade. Programação? Design? Idiomas? Não existe escolha errada.",
  },
  {
    icon: GraduationCap,
    title: "Faça um curso",
    text: "Reserve pelo menos 30 minutos por dia. Constância vence talento — todo dia.",
  },
  {
    icon: Award,
    title: "Ganhe certificados",
    text: "Cada certificado é uma prova de que você aprendeu algo novo — e um diferencial no seu currículo.",
  },
  {
    icon: FileText,
    title: "Monte seu currículo",
    text: "Use o Canva ou modelos gratuitos. Destaque cursos, projetos e ferramentas que domina.",
  },
  {
    icon: Linkedin,
    title: "Crie seu LinkedIn",
    text: "É o cartão de visitas profissional do século 21. Recrutadores procuram por lá todos os dias.",
  },
  {
    icon: Briefcase,
    title: "Candidate-se às vagas",
    text: "Aplique todos os dias. Cada 'não' é um passo mais perto do 'sim' que vai mudar sua vida.",
  },
];

export function HowToStart() {
  return (
    <section
      id="como-comecar"
      aria-labelledby="como-comecar-title"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="como-comecar-title"
          eyebrow="Um passo de cada vez"
          title={
            <>
              Como <span className="neon-text">começar?</span>
            </>
          }
          description="Uma rota simples do zero à primeira oportunidade. Não precisa fazer tudo hoje — só precisa começar."
        />

        <ol className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden="true"
            className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-6"
          />
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <div className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_0_4px_rgba(0,255,65,0.08)] md:h-12 md:w-12">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-primary">
                    passo {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
