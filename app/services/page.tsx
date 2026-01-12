import ServiceCarousel from "../components/ServiceCarousel";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"; // Fallback if env var missing

export const metadata = {
  title: "Our Services | Unithium Energy Systems",
  description:
    "Explore Unithium's engineering services: energy audits, HSE risk assessments, and microgrid design for reliable power solutions.",
  openGraph: {
    title: "Our Services | Unithium Energy Systems",
    description:
      "Explore Unithium's engineering services: energy audits, HSE risk assessments, and microgrid design for reliable power solutions.",
    images: [
      {
        url: `${siteUrl}/unithium-logo-wt-rc.png`, // Absolute URL for og:image (fallback logo)
        width: 1200,
        height: 630,
        alt: "Unithium Energy Systems Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Unithium Energy Systems",
    description: "Explore Unithium's engineering services.",
    images: [`${siteUrl}/unithium-logo-wt-rc.png`],
  },
};

export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">Services</h1>
        <p className="mt-4 text-gray-700">Explore our services below.</p>
        <div className="mt-8">
          <ServiceCarousel />
        </div>
      </div>
    </main>
  );
}
