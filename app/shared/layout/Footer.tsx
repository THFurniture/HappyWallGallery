import { Link } from "react-router";
import { artists } from "../../features/artists/artists";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-[auto_1fr_1fr] md:gap-24 md:px-10 md:py-20">
        <div>
          {/* invert + screen renders the black-on-white logo as white marks on the dark footer */}
          <img
            src="/logo.png"
            alt="Happy Wall Gallery"
            className="h-28 w-auto object-contain invert mix-blend-screen"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
            A contemporary art gallery showcasing unique works that connect, provoke, and inspire.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/50">Artists</p>
          <ul className="mt-6 space-y-3">
            {artists.map((artist) => (
              <li key={artist.slug}>
                <Link
                  to={`/artists/${artist.slug}`}
                  className="font-display text-lg text-cream/85 transition-colors hover:text-cream"
                >
                  {artist.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/50">Visit</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-cream/70">
            <li>Vancouver, British Columbia</li>
            <li>
              <a href="mailto:hello@happywallgallery.com" className="transition-colors hover:text-cream">
                hello@happywallgallery.com
              </a>
            </li>
            <li>By appointment, Tuesday – Saturday</li>
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-block border-b border-cream/40 pb-1 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:border-cream"
          >
            Plan your visit
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs tracking-widest text-cream/40 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Happy Wall Gallery. All rights reserved.</p>
          <p>Art that inspires.</p>
        </div>
      </div>
    </footer>
  );
}
