import { Link } from "react-router";
import { Reveal } from "../../shared/ui/Reveal";
import { artists } from "./artists";

export function ArtistsPage() {
  return (
    <main className="pt-36 md:pt-44">
      <header className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">The gallery</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.08] md:text-7xl">
            Our artists
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Four distinct practices — painting, sculpture, landscape, and mixed media — united by a
            single belief: the right work can change how a room, and a day, feels.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-24 md:space-y-32 md:px-10 md:py-32">
        {artists.map((artist, i) => (
          <Reveal key={artist.slug}>
            <Link
              to={`/artists/${artist.slug}`}
              className={[
                "group grid items-center gap-8 md:grid-cols-2 md:gap-16",
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : "",
              ].join(" ")}
            >
              <div className="overflow-hidden bg-parchment">
                <img
                  src={artist.cover}
                  alt={`Work by ${artist.name}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">
                  {artist.discipline}
                </p>
                <h2 className="mt-4 font-display text-4xl md:text-6xl">{artist.name}</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">{artist.tagline}</p>
                <p className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-xs font-medium uppercase tracking-[0.25em]">
                  View gallery
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
