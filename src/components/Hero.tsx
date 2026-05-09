import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 sm:px-8">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.svg"
        aria-label="Cinematic background reel"
      >
        <source src="/media/baraax-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/62 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0,rgba(0,0,0,0.12)_30%,rgba(0,0,0,0.78)_90%)]" />
      <div className="film-grain" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start pt-16">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="text-xs uppercase tracking-[0.34em] text-white/52"
        >
          Cinematic storytelling for modern brands.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-5xl font-editorial text-[clamp(4.8rem,12vw,12rem)] font-normal leading-[0.82] text-stone-100"
        >
          Baraax Media
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a className="btn-primary" href="#about">
            About Baraax
          </a>
          <a className="btn-secondary" href="#industries">
            Choose Category
          </a>
        </motion.div>
      </div>
    </section>
  );
}
