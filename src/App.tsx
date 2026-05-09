import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { About } from "@/components/About";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";
import { categories } from "@/content/categories";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Industries selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <FeaturedWork selectedCategory={selectedCategory} />
        <ContactCta />
      </main>
      <Footer />
    </motion.div>
  );
}
