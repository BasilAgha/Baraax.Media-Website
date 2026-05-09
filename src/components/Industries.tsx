import { motion } from "framer-motion";
import { categories, type Category } from "@/content/categories";
import { Reveal } from "@/components/Reveal";

type IndustriesProps = {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

export function Industries({ selectedCategory, onSelectCategory }: IndustriesProps) {
  const handleSelect = (category: Category) => {
    onSelectCategory(category);
    window.setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <section id="industries" className="section bg-black">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Choose your category</p>
            <h2 className="mt-4 max-w-3xl font-editorial text-5xl leading-none text-stone-100 sm:text-7xl">
              Select the world your brand belongs to.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/55">
            Choose an industry and the page will focus the work, tone, and direction around that
            category.
          </p>
        </Reveal>

        <motion.div
          key={selectedCategory.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 grid gap-5 rounded-xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 lg:grid-cols-[0.35fr_1fr_0.35fr] lg:items-center"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">Currently focusing on</p>
          <h3 className="font-editorial text-4xl leading-none text-stone-100 sm:text-5xl">
            {selectedCategory.title}
          </h3>
          <p className="text-sm leading-6 text-white/55 lg:text-right">Choose another card anytime.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.button
              key={category.title}
              type="button"
              onClick={() => handleSelect(category)}
              className={`group relative min-h-[24rem] overflow-hidden rounded-xl border bg-neutral-950 text-left transition ${
                selectedCategory.slug === category.slug
                  ? "border-white/55 shadow-[0_0_70px_rgba(255,255,255,0.08)]"
                  : "border-white/10 hover:border-white/28"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.65, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`absolute inset-0 cinematic-image ${category.imageClass}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              {selectedCategory.slug === category.slug ? (
                <motion.div
                  layoutId="selectedIndustryGlow"
                  className="absolute inset-0 border border-white/45"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : null}
              <div className="relative z-10 flex h-full min-h-[24rem] flex-col justify-between p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.26em] text-white/50">{category.index}</span>
                <div>
                  <h3 className="font-editorial text-4xl leading-none text-stone-100 sm:text-6xl">
                    {category.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/58">{category.description}</p>
                  <span className="mt-6 inline-flex text-xs uppercase tracking-[0.22em] text-white/70">
                    {selectedCategory.slug === category.slug ? "Selected" : "View related work"}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
