import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import type { Artwork } from "../../features/artists/artists";

type LightboxProps = {
  works: Artwork[];
  /** Index of the open artwork, or `null` when the viewer is closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  /** Hide the "See it in a room" CTA (e.g. when already on the Get Inspired page). */
  hideRoomCta?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-screen artwork viewer.
 *
 * Follows common lightbox best practices: it is a focus-trapped modal dialog,
 * closes on Escape / backdrop click, navigates with arrow keys and swipe,
 * locks body scroll, supports click-to-zoom with panning, preloads adjacent
 * images, and restores focus to the trigger on close.
 */
export function Lightbox({ works, index, onClose, onNavigate, hideRoomCta = false }: LightboxProps) {
  const isOpen = index !== null;
  const current = isOpen ? works[index] : undefined;
  const hasMultiple = works.length > 1;

  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + works.length) % works.length;
      onNavigate(wrapped);
    },
    [works.length, onNavigate],
  );

  const goPrev = useCallback(() => index !== null && goTo(index - 1), [index, goTo]);
  const goNext = useCallback(() => index !== null && goTo(index + 1), [index, goTo]);

  // Reset zoom whenever the visible image changes.
  useEffect(() => {
    setZoomed(false);
  }, [index]);

  // Remember the trigger so focus can return to it after closing.
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
    } else if (triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [isOpen]);

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Keyboard controls + a minimal focus trap.
  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasMultiple) goPrev();
          break;
        case "ArrowRight":
          if (hasMultiple) goNext();
          break;
        case "Tab": {
          // Keep focus inside the dialog.
          const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
          if (!focusable || focusable.length === 0) break;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
          break;
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, hasMultiple, goPrev, goNext, onClose]);

  // Preload the neighbouring images for snappier navigation.
  useEffect(() => {
    if (index === null || !hasMultiple) return;
    for (const offset of [-1, 1]) {
      const neighbour = works[(index + offset + works.length) % works.length];
      const img = new Image();
      img.src = neighbour.src;
    }
  }, [index, works, hasMultiple]);

  return (
    <AnimatePresence>
      {isOpen && current ? (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm outline-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={onClose}
        >
          {/* Top bar: counter + close */}
          <div
            className="flex items-center justify-between px-6 py-5 text-cream md:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-display text-lg tracking-wide text-cream/80">
              {hasMultiple ? (
                <>
                  {index + 1}
                  <span className="mx-1 text-cream/40">/</span>
                  {works.length}
                </>
              ) : null}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="grid h-11 w-11 place-items-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-20"
            onClick={onClose}
          >
            {hasMultiple ? (
              <NavButton side="left" onClick={goPrev} />
            ) : null}

            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={current.src}
                className="flex h-full w-full items-center justify-center"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE }}
                drag={hasMultiple && !zoomed ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) goNext();
                  else if (info.offset.x > 80) goPrev();
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={current.src}
                  alt={current.alt}
                  draggable={false}
                  animate={{ scale: zoomed ? 2 : 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  drag={zoomed}
                  dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
                  dragElastic={0.05}
                  onClick={() => setZoomed((z) => !z)}
                  className={`max-h-[76vh] max-w-full select-none object-contain shadow-2xl ${
                    zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                />
              </motion.div>
            </AnimatePresence>

            {hasMultiple ? (
              <NavButton side="right" onClick={goNext} />
            ) : null}
          </div>

          {/* Caption + contextual CTA */}
          <div
            className="flex flex-col items-center gap-4 px-6 py-6 text-center md:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-cream/70">{current.alt}</p>
            {!hideRoomCta ? (
              <Link
                to="/get-inspired"
                onClick={onClose}
                className="group inline-flex items-center gap-3 border-b border-cream/60 pb-1.5 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:border-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
              >
                See it in a room
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const isLeft = side === "left";
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={isLeft ? "Previous artwork" : "Next artwork"}
      className={`absolute top-1/2 z-10 hidden -translate-y-1/2 place-items-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:grid sm:h-14 sm:w-14 ${
        isLeft ? "left-2 md:left-6" : "right-2 md:right-6"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isLeft ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        />
      </svg>
    </button>
  );
}
