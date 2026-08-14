import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Reveal } from "../../shared/ui/Reveal";
import { ArrowLink } from "../../shared/ui/ArrowLink";
import { Lightbox } from "../../shared/ui/Lightbox";
import { artistScenes } from "./scenes";

export function InspiredPage() {
  // Track which artist group + scene is open in the viewer.
  const [active, setActive] = useState<{ group: number; index: number } | null>(null);
  // "all" or an artist slug.
  const [filter, setFilter] = useState<string>("all");

  const visibleGroups = filter === "all" ? artistScenes : artistScenes.filter((g) => g.slug === filter);

  const activeGroup = active !== null ? artistScenes[active.group] : null;
  const activeWorks = activeGroup?.scenes.map((s) => ({ src: s.image, alt: s.alt })) ?? [];

  return (
    <main className="pt-36 md:pt-44">
      <header className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Get inspired</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.08] md:text-7xl">
            See the work at home
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Art changes when it lives in a space. Browse our pieces in real interiors — one setting
            per work — for a true sense of how texture, scale, and colour transform a room.
          </p>
        </Reveal>
      </header>

      {/* Filter bar */}
      <Reveal className="mx-auto mt-14 max-w-7xl px-6 md:mt-16 md:px-10">
        <div
          role="group"
          aria-label="Filter by artist"
          className="flex flex-wrap gap-3 border-t border-line pt-8"
        >
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterButton>
          {artistScenes.map((group) => (
            <FilterButton
              key={group.slug}
              active={filter === group.slug}
              onClick={() => setFilter(group.slug)}
            >
              {group.name}
            </FilterButton>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-20 md:space-y-28 md:px-10 md:py-28">
        {visibleGroups.map((group) => {
          const groupIndex = artistScenes.indexOf(group);
          return (
            <section key={group.slug}>
              <Reveal className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">
                    {group.discipline}
                  </p>
                  <h2 className="mt-3 font-display text-3xl md:text-5xl">{group.name}</h2>
                </div>
                <Link
                  to={`/artists/${group.slug}`}
                  className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-xs font-medium uppercase tracking-[0.25em]"
                >
                  View gallery
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Link>
              </Reveal>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                {group.scenes.map((scene, i) => (
                  <motion.figure
                    key={scene.image}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-48px" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive({ group: groupIndex, index: i })}
                      aria-label={`View ${scene.alt} enlarged`}
                      className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-parchment focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      <img
                        src={scene.image}
                        alt={scene.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </button>
                  </motion.figure>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-28 text-center md:pb-36">
        <Reveal>
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            Picture a piece in your space
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink/70">
            Tell us about your room and we&rsquo;ll help you find the work that fits — with
            visualisations, commissions, and private viewings.
          </p>
          <div className="mt-10">
            <ArrowLink to="/contact" variant="solid">
              Talk to the gallery
            </ArrowLink>
          </div>
        </Reveal>
      </section>

      <Lightbox
        works={activeWorks}
        index={active?.index ?? null}
        onClose={() => setActive(null)}
        onNavigate={(index) => setActive((prev) => (prev ? { ...prev, index } : prev))}
        hideRoomCta
      />
    </main>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors",
        active
          ? "border-ink bg-ink text-cream"
          : "border-line text-soft hover:border-ink hover:text-ink",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
