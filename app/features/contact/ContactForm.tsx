import { useState } from "react";
import { artists } from "../artists/artists";

const GALLERY_EMAIL = "hello@happywallgallery.com";

const inputClass =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-soft/70 focus:border-ink focus:outline-none transition-colors";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Gallery enquiry${interest ? ` — ${interest}` : ""}`;
    const body = `${message}\n\n— ${name}`;
    window.location.href = `mailto:${GALLERY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-parchment p-10 text-center">
        <p className="font-display text-2xl">Thank you.</p>
        <p className="mt-4 leading-relaxed text-ink/70">
          Your email draft has been opened — send it off and we will be in touch shortly. If
          nothing opened, you can write to us directly at{" "}
          <a href={`mailto:${GALLERY_EMAIL}`} className="underline underline-offset-4">
            {GALLERY_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-soft">Name</span>
          <input type="text" name="name" required placeholder="Your name" className={inputClass} />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-soft">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-soft">
          I&rsquo;m interested in
        </span>
        <select name="interest" className={inputClass} defaultValue="">
          <option value="">A general enquiry</option>
          {artists.map((artist) => (
            <option key={artist.slug} value={`Work by ${artist.name}`}>
              Work by {artist.name}
            </option>
          ))}
          <option value="A commission">A commission</option>
          <option value="A private viewing">A private viewing</option>
        </select>
      </label>

      <label className="block">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-soft">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about the space, the mood, or the piece you have in mind…"
          className={inputClass}
        />
      </label>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-ink/85"
      >
        Send message
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </button>
    </form>
  );
}
