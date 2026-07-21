import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";

const leftLinks = [
  { to: "/", label: "Home" },
  { to: "/artists", label: "Artists" },
];

const rightLinks = [{ to: "/contact", label: "Contact" }];

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "border-b pb-1 text-xs font-medium uppercase tracking-[0.25em] transition-colors",
    isActive ? "border-ink text-ink" : "border-transparent text-soft hover:text-ink",
  ].join(" ");
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-cream/90 shadow-[0_1px_0_0] shadow-line backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-3 md:px-10">
        <div className="hidden items-center gap-10 md:flex">
          {leftLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button (left slot on small screens) */}
        <button
          type="button"
          className="justify-self-start text-xs font-medium uppercase tracking-[0.25em] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <Link to="/" className="justify-self-center" aria-label="Happy Wall Gallery — home">
          {/* mix-blend-multiply lets the logo's white background disappear into the cream navbar */}
          <img
            src="/logo.png"
            alt="Happy Wall Gallery"
            className={[
              "w-auto object-contain mix-blend-multiply transition-all duration-500",
              scrolled ? "h-14" : "h-20 md:h-24",
            ].join(" ")}
          />
        </Link>

        <div className="hidden items-center justify-end gap-10 md:flex">
          {rightLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-cream md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {[...leftLinks, ...rightLinks].map((link) => (
                <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
