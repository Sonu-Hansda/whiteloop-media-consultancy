import { Hero } from "@/components/home/hero";
import { Sessions } from "@/components/home/sessions";
import { Products } from "@/components/home/products";
import { About } from "@/components/home/about";
import { Cta } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sessions />
      <Products />
      <About />
      <Cta />
    </>
  );
}
