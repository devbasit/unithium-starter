import Hero from "./components/Hero";
import ServiceCarousel from "./components/ServiceCarousel";
import ProjectCarousel from "./components/ProjectCarousel";
import ArticleGrid from "./components/ArticleGrid";
import AboutSection from "./components/AboutSection";
import LinkHub from "./components/LinkHub";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCarousel limit={3} />
      <ProjectCarousel limit={3} />
      <ArticleGrid limit={3} />
      <AboutSection />
      <LinkHub />
    </>
  );
}
