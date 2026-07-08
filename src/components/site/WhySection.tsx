import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Globe2, HeartHandshake, Lightbulb } from "lucide-react";

const POINTS = [
  {
    icon: Globe2,
    title: "Acesso existe, orientação não.",
    text: "Milhões de brasileiros têm internet, mas se perdem entre anúncios, cursos pagos e conteúdo de baixa qualidade.",
  },
  {
    icon: Lightbulb,
    title: "Conhecimento é um direito.",
    text: "Reunimos apenas plataformas confiáveis, gratuitas e reconhecidas — de universidades, governos e grandes empresas.",
  },
  {
    icon: HeartHandshake,
    title: "Um empurrão de verdade.",
    text: "Se uma pessoa começar hoje, ela pode conseguir um emprego, mudar de carreira ou abrir um negócio em poucos meses.",
  },
];

export function WhySection() {
  return (
    <section
      id="por-que"
      aria-labelledby="por-que-title"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="por-que-title"
          eyebrow="Por que existimos"
          title={
            <>
              Por que este{" "}
              <span className="neon-text">projeto</span> existe?
            </>
          }
          description="A internet está cheia de oportunidades, mas encontrá-las é o primeiro obstáculo. Criamos esta ponte para você não parar antes mesmo de começar."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
