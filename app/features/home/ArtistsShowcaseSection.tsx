import { Link } from "react-router";
import { motion } from "motion/react";
import { artists } from "../artists/artists";
import { ArrowLink } from "../../shared/ui/ArrowLink";
import { Reveal } from "../../shared/ui/Reveal";

export function ArtistsShowcaseSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Our artists</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Four voices, one wall at a time.</h2>
        </div>
        <ArrowLink to="/artists">View all artists</ArrowLink>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {artists.map((artist, i) => (
          <motion.div
            key={artist.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/artists/${artist.slug}`} className="group block">
              <div className="overflow-hidden bg-parchment">
                <img
                  src={artist.cover}
                  alt={`Work by ${artist.name}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.3em] text-soft">
                {artist.discipline}
              </p>
              <h3 className="mt-2 font-display text-2xl">
                {artist.name}
                <span
                  aria-hidden
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
