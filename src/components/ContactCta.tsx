import { Reveal } from "@/components/Reveal";

export function ContactCta() {
  return (
    <section id="contact" className="section bg-stone-100 text-black">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">Contact</p>
        <h2 className="mt-5 font-editorial text-5xl leading-none sm:text-7xl lg:text-8xl">
          Let&apos;s create something exceptional.
        </h2>
        <a className="mt-10 inline-flex rounded-full bg-black px-7 py-4 text-sm uppercase tracking-[0.18em] text-stone-100 transition hover:bg-black/90" href="mailto:hello@baraaxmedia.com">
          Start a Project
        </a>
      </Reveal>
    </section>
  );
}
