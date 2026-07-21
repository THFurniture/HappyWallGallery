import { Reveal } from "../../shared/ui/Reveal";
import { ArrowLink } from "../../shared/ui/ArrowLink";

const visitImage = encodeURI("/ART/NOEMI ART/noemi-soft-beach-horizon.png");

export function VisitSection() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="overflow-hidden">
        <img
          src={visitImage}
          alt="A serene coastal painting by Noemi above a bed in soft light"
          loading="lazy"
          className="h-full min-h-80 w-full object-cover"
        />
      </div>
      <div className="flex items-center bg-parchment">
        <div className="px-6 py-20 md:px-16 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Bring art home</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl leading-snug md:text-4xl">
              Every wall deserves a work it can be proud of.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md leading-relaxed text-ink/70">
              Whether you are furnishing a first apartment or curating a family home, we help you
              find the piece that makes a room feel finished — and a little bit happier.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <ArrowLink to="/contact" variant="solid">
              Get in touch
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
