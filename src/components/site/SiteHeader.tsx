import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Brain } from "lucide-react";

const NAV = [
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#categorias", label: "Categorias" },
  { href: "#como-comecar", label: "Como começar" },
  { href: "#impacto", label: "Impacto" },
  { href: "#sobre", label: "Sobre" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-base font-semibold text-foreground"
          aria-label="Início — Inclusão Digital"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface neon-ring">
            <Brain className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
          <span className="font-mono">
            Prometeu
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-md px-3 py-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#ferramentas"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
        >
          Começar agora
        </a>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Móvel"
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#ferramentas"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-primary px-3 py-3 text-center text-base font-medium text-primary-foreground"
              >
                Começar agora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
