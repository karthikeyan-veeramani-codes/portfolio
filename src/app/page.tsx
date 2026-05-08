import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
