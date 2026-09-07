import {
  About,
  Cta,
  Faq,
  Hero,
  Products,
  Sessions,
} from "@/components/home";

export default function HomePage() {
  return (
    <div data-snap-sections>
      <Hero />
      {/* Video section is parked — re-add <Video /> from @/components/home to restore. */}
      <Sessions />
      <Products />
      <About />
      <Faq />
      <Cta />
    </div>
  );
}
