import { Link } from "@tanstack/react-router";
import { Github, Heart, Brain, LockOpen } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-base font-semibold text-foreground">
              <span className="font-mono">
                Conectando pessoas ao que já é delas por direito.
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Acreditamos que o aprendizado deve ser um direito, não um privilégio. Por isso, mapeamos soluções 100% gratuitas para apoiar seus estudos, sua carreira e sua organização diária.
            </p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-6 text-sm md:col-span-2 md:justify-self-end">
            <div>
              <h3 className="font-semibold text-foreground">Explorar</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li><a href="#categorias" className="hover:text-primary">Categorias</a></li>
                <li><a href="#ferramentas" className="hover:text-primary">Ferramentas</a></li>
                <li><a href="#como-comecar" className="hover:text-primary">Como começar</a></li>
                <li><a href="#impacto" className="hover:text-primary">Impacto</a></li>
                <li>
                  <Link to="/guias/certificados-mec" className="hover:text-primary">
                    Guia de Certificados
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Projeto</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
                <li><a href="#por-que" className="hover:text-primary">Motivação</a></li>
                <li>
                  <a
                    href="https://github.com/Nicolinux-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <blockquote className="mx-auto max-w-2xl text-center text-base italic text-muted-foreground sm:text-lg">
            “Se eu puder deixar alguma marca no mundo através da tecnologia, quero que ela seja algo útil para as pessoas.”
          </blockquote>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            © {year} Nicolinux — Projeto open source{" "}
            <LockOpen className="h-4 w-4 text-primary" aria-hidden="true" />
          </p>
          <p className="inline-flex items-center gap-1.5">
            Criado com <Heart className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> por{" "}
            <strong className="text-foreground">Nícolas Adriel</strong>
            <span aria-hidden="true">·</span>
            <span className="text-xs">
              Estudante de Análise e Desenvolvimento de Sistemas
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
