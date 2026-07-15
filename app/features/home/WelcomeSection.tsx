import { Link } from "react-router";
import { Reveal } from "../../shared/ui/Reveal";

export function WelcomeSection() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">
            Welcome to Happy Wall Gallery
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-3xl leading-snug md:text-5xl">
            A space for creativity, expression, and timeless art.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/artists"
            className="mt-10 inline-block border-b border-ink pb-1.5 text-xs font-medium uppercase tracking-[0.3em]"
          >
            Discover more
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
