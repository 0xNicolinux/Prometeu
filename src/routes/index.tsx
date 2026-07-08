import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { WhySection } from "@/components/site/WhySection";
import { CategoriesSection } from "@/components/site/CategoriesSection";
import { ToolsSection } from "@/components/site/ToolsSection";
import { HowToStart } from "@/components/site/HowToStart";
import { ImpactSection } from "@/components/site/ImpactSection";
import { AboutSection } from "@/components/site/AboutSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CATEGORIES, type Category } from "@/data/tools";

const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

function isCategory(value: unknown): value is Category {
  return typeof value === "string" && (CATEGORY_IDS as string[]).includes(value);
}

interface HomeSearch {
  category?: Category;
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    category: isCategory(search.category) ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Prometeu" },
      {
        name: "description",
        content:
          "As melhores plataformas gratuitas e confiáveis para estudar, conquistar certificados, conseguir um emprego e organizar sua vida — reunidas em um só lugar.",
      },
      {
        name: "keywords",
        content:
          "cursos gratuitos, inclusão digital, certificado gratuito, aprender programação, primeiro emprego, curso online grátis, ferramentas gratuitas, Nícolas Adriel, extensão universitária",
      },
      { property: "og:title", content: "Inclusão Digital — Ferramentas Gratuitas" },
      {
        property: "og:description",
        content:
          "Reunimos as melhores plataformas gratuitas da internet para você estudar, trabalhar e transformar seu futuro.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ignite-path-12.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ignite-path-12.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Inclusão Digital",
          description:
            "Projeto de extensão universitária que reúne ferramentas gratuitas para estudo, trabalho e organização pessoal.",
          founder: { "@type": "Person", name: "Nícolas Adriel" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo-principal">
        <Hero />
        <WhySection />
        <CategoriesSection />
        <ToolsSection />
        <HowToStart />
        <ImpactSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
