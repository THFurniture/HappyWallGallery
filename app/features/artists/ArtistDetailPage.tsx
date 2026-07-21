import { Link } from "react-router";
import { motion } from "motion/react";
import { Reveal } from "../../shared/ui/Reveal";
import { ArrowLink } from "../../shared/ui/ArrowLink";
import type { Artist } from "./artists";

export function ArtistDetailPage({ artist }: { artist: Artist }) {
  return (
    <main className="pt-36 md:pt-44">
      {/* Intro */}
      <header className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-end gap-12 md:grid-cols-[7fr_5fr] md:gap-16">
          <Reveal>
            <Link
              to="/artists"
              className="text-xs font-medium uppercase tracking-[0.25em] text-soft transition-colors hover:text-ink"
            >
              ← All artists
            </Link>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.3em] text-soft">
              {artist.discipline}
            </p>
            <h1 className="mt-4 font-display text-6xl leading-none md:text-8xl">{artist.name}</h1>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="mx-auto flex aspect-square w-full max-w-[22rem] items-end justify-center sm:max-w-[26rem] md:ml-auto md:mr-0">
              <img
                src={artist.profileIllustration}
                alt={`Line art profile illustration of ${artist.name}`}
                className="h-full w-full object-contain p-6"
              />
            </figure>
          </Reveal>
        </div>
      </header>

      {/* Bio */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[5fr_7fr] md:gap-20 md:px-10 md:py-28">
        <Reveal>
          <blockquote className="border-l border-ink pl-6 font-display text-2xl italic leading-snug md:text-3xl">
            “{artist.statement}”
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">About the artist</p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
            {artist.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-5xl">Gallery</h2>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">
              {artist.works.length} installed views
            </p>
          </Reveal>

          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
            {artist.works.map((work, i) => (
              <motion.figure
                key={work.src}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-48px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid overflow-hidden"
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            Interested in {artist.name}&rsquo;s work?
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink/70">
            Enquire about availability, commissions, and private viewings — we would love to help
            you find the right piece.
          </p>
          <div className="mt-10">
            <ArrowLink to="/contact" variant="solid">
              Contact the gallery
            </ArrowLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
