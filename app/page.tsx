import Hero from "./components/Hero";
import ServiceCarousel from "./components/ServiceCarousel";
import ProjectCarousel from "./components/ProjectCarousel";
import ArticleGrid from "./components/ArticleGrid";
import AboutSection from "./components/AboutSection";
import LinkHub from "./components/LinkHub";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"; // Fallback if env var missing

export const metadata = {
  title: "Unithium Energy Systems | Reliable & Sustainable Power Solutions",
  description:
    "Engineering dependable energy systems for industrial, commercial, and emerging needs. Explore our services, projects, and energy calculator.",
  openGraph: {
    title: "Unithium Energy Systems | Reliable & Sustainable Power Solutions",
    description:
      "Engineering dependable energy systems for industrial, commercial, and emerging needs. Explore our services, projects, and energy calculator.",
    images: [
      {
        url: `${siteUrl}/hero/hero-power-unit.png`, // Absolute URL for og:image
        width: 1200,
        height: 630,
        alt: "Engineered power generation and distribution system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unithium Energy Systems | Reliable & Sustainable Power Solutions",
    description:
      "Engineering dependable energy systems for industrial, commercial, and emerging needs.",
    images: [`${siteUrl}/hero/hero-power-unit.png`],
  },
};

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
