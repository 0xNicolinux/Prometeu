import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Flame, Rocket, ShieldCheck, DollarSign } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeader
              id="sobre-title"
              align="left"
              eyebrow="Sobre o projeto"
              title={
                <>
                  Toda <span className="neon-text">contribuição</span> importa
                </>
              }
              description={
                <>
                  Este projeto nasceu da crença de que o{" "}
                  <strong className="text-foreground">
                    conhecimento só alcança seu verdadeiro valor quando é compartilhado
                  </strong>
                  . A tecnologia tem o poder de criar oportunidades, reduzir barreiras e
                  aproximar pessoas, e acredito que todos deveriam ter acesso às ferramentas
                  necessárias para aprender, criar e evoluir.

                  <br />
                  <br />

                  Mais do que reunir recursos gratuitos, este projeto busca fortalecer uma
                  cultura de colaboração, curiosidade e aprendizado contínuo. Assim como o{" "}
                  <em className="text-foreground">
                    <strong className="text-foreground">
                      Software Livre
                    </strong>{" "}
                  </em>
                  demonstra que grandes transformações acontecem quando pessoas constroem juntas,
                  este espaço existe para contribuir com a comunidade e incentivar que mais
                  pessoas também compartilhem aquilo que sabem.

                  <br />
                  <br />

                  Cada ferramenta reunida aqui representa uma pequena contribuição para que
                  outras pessoas possam dar o próximo passo.{" "}
                  <strong className="text-foreground">
                    Porque conhecimento compartilhado gera oportunidades, e oportunidades
                    transformam vidas.
                  </strong>
                </>
              }
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                Acesso Imediato
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                Aprenda no seu ritmo
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                Conquiste certificados
              </span>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Feature
              icon={Flame}
              title="Tá esperando o que pra começar?"
              text="Chega de perder tempo batendo a cabeça no Google. Tá tudo mastigado aqui para salvar o seu dia (e os seus prazos)."
            />
            <Feature
              icon={ShieldCheck}
              title="Curado"
              text="Só listamos plataformas confiáveis, mantidas por instituições, ONGs, universidades ou grandes empresas."
            />
            <Feature
              icon={Rocket}
              title="Ponto de partida"
              text="Não somos o destino final — somos o primeiro empurrão para você começar hoje, sem gastar nada."
            />
            <Feature
              icon={DollarSign}
              title="Sempre gratuito"
              text="Nada é vendido aqui. Toda ferramenta listada oferece acesso gratuito ao seu conteúdo essencial."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: typeof Flame;
  title: string;
  text: string;
  className?: string;
}

function Feature({ icon: Icon, title, text, className = "" }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={`card-surface p-5 ${className}`}
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </motion.div>
  );
}
