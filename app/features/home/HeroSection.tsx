import { motion } from "motion/react";
import { ArrowLink } from "../../shared/ui/ArrowLink";

const heroImage = encodeURI("/ART/RONAN ART/DSC04253.jpg");

const rise = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <motion.img
        src={heroImage}
        alt="Gold-leaf works by Ronan in a bright gallery-like foyer"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 md:px-10">
        <div className="max-w-xl">
          <motion.h1
            {...rise}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl leading-[1.05] md:text-8xl"
          >
            Art that
            <br />
            inspires.
          </motion.h1>
          <motion.p
            {...rise}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink/75"
          >
            Happy Wall Gallery is a contemporary art gallery showcasing unique works that connect,
            provoke, and inspire.
          </motion.p>
          <motion.div
            {...rise}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <ArrowLink to="/artists" variant="solid">
              Explore artists
            </ArrowLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
