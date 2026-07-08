import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { ArrowUpRight, Award, BookOpen, Search, X } from "lucide-react";
import { CATEGORIES, TOOLS, type Category } from "@/data/tools";
import { SectionHeader } from "./SectionHeader";

const LANGUAGES = ["Todos", "Português", "Inglês", "Multi-idioma"] as const;
const CERT_OPTIONS = ["Todos", "Com certificado", "Sem certificado"] as const;

export function ToolsSection() {
  const search = useSearch({ from: "/" });
  const navigate = useNavigate({ from: "/" });

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Todos">(search.category ?? "Todos");
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("Todos");
  const [cert, setCert] = useState<(typeof CERT_OPTIONS)[number]>("Todos");

  // Mantém o filtro sincronizado quando ?category= muda: clique num card de
  // Categoria, navegação pelo histórico (voltar/avançar) ou link direto.
  useEffect(() => {
    setCategory(search.category ?? "Todos");
  }, [search.category]);

  const updateCategory = (value: Category | "Todos") => {
    setCategory(value);
    navigate({
      search: (prev) => ({ ...prev, category: value === "Todos" ? undefined : value }),
      replace: true,
      resetScroll: false,
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => {
      if (category !== "Todos" && !t.categories.includes(category)) return false;
      if (language !== "Todos" && t.language !== language) return false;
      if (cert === "Com certificado" && !t.certificate) return false;
      if (cert === "Sem certificado" && t.certificate) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.type.toLowerCase().includes(q) ||
        t.categories.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [query, category, language, cert]);

  const clearFilters = () => {
    setQuery("");
    updateCategory("Todos");
    setLanguage("Todos");
    setCert("Todos");
  };

  return (
    <section
      id="ferramentas"
      aria-labelledby="ferramentas-title"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="ferramentas-title"
          eyebrow="Biblioteca gratuita"
          title={
            <>
              Ferramentas <span className="neon-text">gratuitas</span> e confiáveis
            </>
          }
          description="Todas as plataformas listadas são gratuitas para estudar. Filtre pelo que faz sentido para você e comece hoje."
        />

        {/* Filtros */}
        <div className="mt-12">
          <div className="card-surface p-4 sm:p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_auto]">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <label htmlFor="tool-search" className="sr-only">
                  Pesquisar ferramentas
                </label>
                <input
                  id="tool-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar por nome, área, tipo..."
                  className="w-full rounded-lg border border-border bg-background/60 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <FilterSelect
                id="cat-filter"
                label="Categoria"
                value={category}
                onChange={(v) => updateCategory(v as Category | "Todos")}
                options={["Todos", ...CATEGORIES.map((c) => c.id)]}
              />
              <FilterSelect
                id="lang-filter"
                label="Idioma"
                value={language}
                onChange={(v) => setLanguage(v as (typeof LANGUAGES)[number])}
                options={[...LANGUAGES]}
              />
              <FilterSelect
                id="cert-filter"
                label="Certificado"
                value={cert}
                onChange={(v) => setCert(v as (typeof CERT_OPTIONS)[number])}
                options={[...CERT_OPTIONS]}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
              <p aria-live="polite">
                <span className="font-mono text-primary">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "ferramenta encontrada" : "ferramentas encontradas"}
              </p>
              {(query || category !== "Todos" || language !== "Todos" || cert !== "Todos") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Destaque do guia de certificados */}
        <div className="card-surface hover-lift mt-6 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-border bg-background text-primary">
            <BookOpen className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              📚 Guia completo
            </p>
            <h3 className="mt-1 text-base font-semibold text-foreground">
              Guia de Certificados Gratuitos
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Conheça plataformas oficiais, entenda como funcionam os certificados e
              aprenda a conquistar certificações gratuitas para fortalecer seu currículo.
            </p>
          </div>
          <Link
            to="/guias/certificados-mec"
            className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-lg border border-primary/40 bg-neon-soft px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto"
          >
            Ler o guia
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid */}
        <ul
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Lista de ferramentas gratuitas"
        >
          {filtered.map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: (i % 9) * 0.03 }}
            >
              <article className="card-surface hover-lift flex h-full flex-col p-6">
                <header className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background font-mono text-sm font-semibold text-primary"
                    >
                      {t.initials}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {t.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{t.type}</p>
                    </div>
                  </div>
                  {t.certificate && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-neon-soft px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary"
                      title="Emite certificado"
                    >
                      <Award className="h-3 w-3" aria-hidden="true" />
                      Certificado
                    </span>
                  )}
                </header>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {t.categories.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                  <span className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t.level}
                  </span>
                  <span className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t.language}
                  </span>
                </div>

                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 bg-neon-soft px-4 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label={`Acessar ${t.name} (abre em nova aba)`}
                >
                  Acessar
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </motion.li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <div className="mt-10 card-surface p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Nada encontrado com esses filtros. Tente ajustar sua busca.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Ver todas as ferramentas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface FilterSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}

function FilterSelect({ id, label, value, onChange, options }: FilterSelectProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-[140px] rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label={label}
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background text-foreground">
            {label}: {o}
          </option>
        ))}
      </select>
    </div>
  );
}
