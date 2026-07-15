import { Link } from "react-router";

type ArrowLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
};

export function ArrowLink({ to, children, variant = "ghost" }: ArrowLinkProps) {
  if (variant === "solid") {
    return (
      <Link
        to={to}
        className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-ink/85"
      >
        {children}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-xs font-medium uppercase tracking-[0.25em] text-ink"
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </Link>
  );
}
