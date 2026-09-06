import {
  About,
  Cta,
  Faq,
  Hero,
  Products,
  Sessions,
  Video,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Video /> */}
      <Sessions />
      <Products />
      <About />
      <Faq />
      <Cta />
    </>
  );
}
