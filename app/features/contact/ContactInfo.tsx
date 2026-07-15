export function ContactInfo() {
  return (
    <aside className="space-y-10">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Email</p>
        <a
          href="mailto:hello@happywallgallery.com"
          className="mt-3 inline-block font-display text-xl underline-offset-4 hover:underline"
        >
          hello@happywallgallery.com
        </a>
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Location</p>
        <p className="mt-3 leading-relaxed text-ink/75">
          Vancouver, British Columbia
          <br />
          Canada
        </p>
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-soft">Viewings</p>
        <p className="mt-3 max-w-xs leading-relaxed text-ink/75">
          Private viewings by appointment, Tuesday through Saturday. Works can also be seen
          installed in select staged residences across Greater Vancouver.
        </p>
      </div>
    </aside>
  );
}
