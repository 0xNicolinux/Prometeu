import { motion } from "framer-motion";
import { ArrowRight, HandHeart } from "lucide-react";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section
      id="conteudo"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden="true" />
      <div className="absolute inset-0 -z-10">
        <ParticleField />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <HandHeart className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Contribuímos para retribuir o que um dia fizeram por nós.
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-center text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Conhecimento para{" "}
          <span className="relative inline-block">
            <span className="neon-text">quem quiser.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          O caminho mais simples para quem quer estudar, se organizar e crescer profissionalmente usando o melhor da internet gratuita.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#ferramentas"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,255,65,0.5)] transition-all hover:brightness-110"
          >
            Começar agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#ferramentas"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3.5 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
          >
            Explorar ferramentas
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="glass rounded-2xl p-1">
            <div className="rounded-xl bg-background/60 p-4 font-mono text-sm">

              <div className="flex items-center gap-1.5 pb-3">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-primary/80" />
                <span className="ml-3 text-xs text-muted-foreground">
                  ~/prometeu
                </span>
              </div>

              <div className="space-y-2 text-left text-sm text-muted-foreground">
                <p>
                  <span className="text-primary">$</span> npx prometeu --carregar-conteudos
                </p>

                <div className="pl-4 text-xs text-foreground/80 space-y-0.5">
                  <p className="text-emerald-500 font-semibold">✓ Sincronizando ferramentas gratuitas...</p>
                  <p>• 30+ plataformas verificadas e integradas</p>
                  <p>• Filtros por área e idioma aplicados</p>
                  <p>• Ambiente de estudo pronto para uso</p>
                </div>

                <p className="pt-1">
                  <span className="text-primary">$</span> prometeu --status
                  <span className="ml-1 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-primary" />
                </p>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
