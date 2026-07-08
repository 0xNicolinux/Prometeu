import { motion } from "framer-motion";
import { Link, type LinkProps } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/tools";
import { SectionHeader } from "./SectionHeader";

// motion.create() erases TanStack Router's route-specific generics on Link,
// so TS can no longer narrow `search`/`hash` for `to="/"`. The props below
// are valid at runtime; this cast only relaxes the (overly strict) inferred type.
const MotionLink = motion.create(Link) as React.ComponentType<
  React.ComponentProps<typeof motion.a> & LinkProps
>;

export function CategoriesSection() {
  return (
    <section
      id="categorias"
      aria-labelledby="categorias-title"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="categorias-title"
          eyebrow="Explore por área"
          title={
            <>
              Categorias para <span className="neon-text">todo mundo</span>
            </>
          }
          description="Do primeiro clique no computador à conquista de uma nova carreira — encontre o conhecimento ideal para o seu momento."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((c, i) => (
            <MotionLink
              key={c.id}
              to="/"
              search={{ category: c.id }}
              hash="ferramentas"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: (i % 10) * 0.04 }}
              className="card-surface hover-lift group flex flex-col gap-3 p-5"
              aria-label={`Ver ferramentas da categoria ${c.label}`}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-background text-2xl"
                aria-hidden="true"
              >
                {c.emoji}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {c.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
