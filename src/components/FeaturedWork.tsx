import { motion } from "framer-motion";
import { works, type Category } from "@/content/categories";
import { Reveal } from "@/components/Reveal";

type FeaturedWorkProps = {
  selectedCategory: Category;
};

export function FeaturedWork({ selectedCategory }: FeaturedWorkProps) {
  const relatedWorks = works.filter((work) => work.categorySlug === selectedCategory.slug);

  return (
    <section id="work" className="section bg-black">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-7 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow">Related work</p>
            <h2 className="mt-4 max-w-3xl font-editorial text-5xl leading-none text-stone-100 sm:text-7xl">
              {selectedCategory.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/58 lg:justify-self-end">
            {selectedCategory.intro}
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {relatedWorks.map((work, index) => (
            <motion.article
              key={work.title}
              className={index === 0 ? "group lg:col-span-2" : "group"}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.68, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-950 transition duration-300 group-hover:border-white/28">
                <div className={`cinematic-image aspect-[16/10] ${work.imageClass}`} />
              </div>
              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/38">{work.type}</p>
                  <h3 className="mt-2 font-editorial text-3xl leading-none text-stone-100">{work.title}</h3>
                </div>
                <span className="text-sm text-white/35">{work.year}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
