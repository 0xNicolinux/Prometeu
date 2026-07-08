import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CheckCircle2, ExternalLink, GraduationCap, ShieldCheck, BookOpen, Award } from "lucide-react";

export const Route = createFileRoute("/guias/certificados-mec")({
  head: () => ({
    meta: [
      { title: "Cursos Gratuitos com Certificado MEC — Guia Completo" },
      {
        name: "description",
        content:
          "Guia prático para encontrar e concluir cursos online gratuitos com certificado reconhecido pelo MEC. Plataformas oficiais, passo a passo e dicas de validação.",
      },
      {
        name: "keywords",
        content:
          "cursos gratuitos com certificado mec, certificado mec, avamec, escola virtual gov, cursos reconhecidos mec, certificado gratuito reconhecido",
      },
      { property: "og:title", content: "Cursos Gratuitos com Certificado MEC — Guia Completo" },
      {
        property: "og:description",
        content:
          "Como encontrar, fazer e validar cursos online gratuitos com certificado reconhecido pelo MEC.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://ignite-path-12.lovable.app/guias/certificados-mec",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ignite-path-12.lovable.app/guias/certificados-mec",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como fazer cursos gratuitos com certificado reconhecido pelo MEC",
          description:
            "Passo a passo para encontrar plataformas oficiais, concluir cursos gratuitos e emitir certificados reconhecidos pelo MEC.",
          step: [
            { "@type": "HowToStep", name: "Entenda o que é reconhecimento MEC" },
            { "@type": "HowToStep", name: "Acesse plataformas oficiais (AVAMEC, Escola Virtual.Gov)" },
            { "@type": "HowToStep", name: "Crie sua conta com CPF" },
            { "@type": "HowToStep", name: "Escolha o curso e conclua as atividades" },
            { "@type": "HowToStep", name: "Emita e valide seu certificado" },
          ],
        }),
      },
    ],
  }),
  component: GuideMEC,
});

const platforms = [
  {
    name: "AVAMEC",
    url: "https://avamec.mec.gov.br/",
    description:
      "Ambiente Virtual de Aprendizagem oficial do Ministério da Educação. Cursos de formação continuada para educadores e público geral, com certificado emitido pelo próprio MEC.",
    icon: GraduationCap,
  },
  {
    name: "Escola Virtual.Gov (ENAP)",
    url: "https://www.escolavirtual.gov.br/",
    description:
      "Plataforma da Escola Nacional de Administração Pública. Milhares de cursos gratuitos com certificado reconhecido, aceitos em concursos e progressão de carreira no serviço público.",
    icon: ShieldCheck,
  },
  {
    name: "e-Aulas USP",
    url: "https://eaulas.usp.br/",
    description:
      "Cursos abertos da Universidade de São Paulo. Ideal para complementar formação acadêmica com material de instituição reconhecida pelo MEC.",
    icon: BookOpen,
  },
  {
    name: "UNA-SUS",
    url: "https://www.unasus.gov.br/",
    description:
      "Universidade Aberta do SUS — cursos gratuitos na área da saúde com certificação oficial, muito usados para pontuação em concursos e residências.",
    icon: Award,
  },
];

const steps = [
  {
    title: "Entenda o que significa 'reconhecido pelo MEC'",
    body: "Cursos livres (curta duração) não precisam de reconhecimento formal do MEC — o que vale é a instituição emissora. Certificados aceitos legalmente vêm de órgãos oficiais (MEC, ENAP, universidades públicas) ou de instituições credenciadas. Desconfie de sites que prometem 'certificado MEC' sem citar a instituição.",
  },
  {
    title: "Escolha uma plataforma oficial",
    body: "Comece pelas plataformas gratuitas ligadas ao governo federal: AVAMEC (formação de professores e público geral) e Escola Virtual.Gov (ENAP). Ambas emitem certificados válidos para currículo, progressão funcional e horas complementares.",
  },
  {
    title: "Crie sua conta com CPF",
    body: "O cadastro é gratuito e usa gov.br em muitas plataformas. Tenha em mãos CPF, e-mail válido e um documento de identificação. A conta gov.br unifica o acesso a diversos serviços de educação pública.",
  },
  {
    title: "Conclua todas as atividades avaliativas",
    body: "A maioria dos cursos exige nota mínima (geralmente 70%) e conclusão de todos os módulos. Reserve um horário semanal fixo — cursos de 20 a 60 horas geralmente podem ser concluídos em 2 a 4 semanas.",
  },
  {
    title: "Emita e guarde seu certificado",
    body: "Após aprovação, o certificado fica disponível em PDF na área do aluno, com código de autenticação. Guarde o arquivo e o link de validação — recrutadores e bancas de concurso costumam checar a autenticidade online.",
  },
];

function GuideMEC() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Guia · Certificação oficial
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Cursos gratuitos com <span className="neon-text">certificado MEC</span>: guia completo
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Reunimos as plataformas oficiais gratuitas que emitem certificados reconhecidos pelo MEC ou por
            órgãos públicos equivalentes, com o passo a passo para concluir seu curso e usar o certificado em
            currículo, concurso ou progressão de carreira.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Plataformas oficiais recomendadas
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/40 hover:bg-accent"
                >
                  <div className="flex items-center gap-2">
                    <p.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-medium text-foreground">{p.name}</h3>
                    <ExternalLink
                      className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Passo a passo para conquistar seu certificado
            </h2>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-xl border border-border bg-surface/40 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 rounded-2xl border border-border bg-surface/60 p-6">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Como validar um certificado
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Todo certificado oficial tem código de autenticação e link público de validação.",
                "Verifique se o emissor é o MEC, uma universidade pública ou órgão do governo federal.",
                "Cursos livres têm valor curricular, mas não substituem graduação, pós ou técnico regulados.",
                "Guarde o PDF e o link — recrutadores conferem a autenticidade online.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              Ver todas as ferramentas gratuitas
            </Link>
            <a
              href="https://avamec.mec.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Acessar AVAMEC
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
