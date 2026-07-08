import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { BookOpen, Clock, Globe, LayoutGrid } from "lucide-react";

const STATS = [
  {
    icon: BookOpen,
    value: 300,
    suffix: "+",
    label: "cursos gratuitos catalogados",
  },
  {
    icon: Clock,
    value: 5000,
    suffix: "+",
    label: "horas de conteúdo disponível",
  },
  {
    icon: LayoutGrid,
    value: 30,
    suffix: "+",
    label: "plataformas confiáveis reunidas",
  },
  {
    icon: Globe,
    value: 100,
    suffix: "%",
    label: "conhecimento acessível para todos",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString("pt-BR"));

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section
      id="impacto"
      aria-labelledby="impacto-title"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="impacto-title"
          eyebrow="Impacto social"
          title={
            <>
              Números que <span className="neon-text">abrem portas</span>
            </>
          }
          description="Um panorama ilustrativo do volume de oportunidades que já estão à disposição, esperando por você."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-surface p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
