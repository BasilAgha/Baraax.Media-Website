import { Reveal } from "@/components/Reveal";

const points = [
  "We understand the brand first.",
  "We shape the visual direction.",
  "We produce polished assets for launch.",
];

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-stone-100 text-black">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
        <Reveal className="lg:pt-3">
          <p className="text-xs uppercase tracking-[0.3em] text-black/40">About</p>
          <div className="mt-8 hidden h-px w-28 bg-black/25 lg:block" />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="max-w-4xl font-editorial text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
              We craft cinematic visual experiences designed for brands that demand attention.
            </h2>
            <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-black/62">
              Baraax Media helps brands look considered, confident, and memorable. We keep the
              process simple: understand the story, define the mood, then create film and photo
              assets that feel premium everywhere they appear.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {points.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <div className="rounded-xl border border-black/10 bg-white/55 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)]">
                  <span className="text-xs uppercase tracking-[0.24em] text-black/35">
                    0{index + 1}
                  </span>
                  <p className="mt-5 text-lg font-light leading-7 text-black/72">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
