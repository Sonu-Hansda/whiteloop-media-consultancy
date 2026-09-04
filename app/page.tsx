import { Hero } from "@/components/home/hero";
import { Video } from "@/components/home/video";
import { Sessions } from "@/components/home/sessions";
import { Products } from "@/components/home/products";
import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Video />
      <Sessions />
      <Products />
      <About />
      <Faq />
      <Cta />
    </>
  );
}
