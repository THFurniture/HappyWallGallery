import { Reveal } from "../../shared/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactPage() {
  return (
    <main className="pt-36 md:pt-44">
      <header className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.08] md:text-7xl">
            Let&rsquo;s find your piece.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Questions about a work, an artist, a commission, or a viewing — we answer every message
            personally.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[7fr_4fr] md:gap-24 md:px-10 md:py-28">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.15}>
          <ContactInfo />
        </Reveal>
      </div>
    </main>
  );
}
