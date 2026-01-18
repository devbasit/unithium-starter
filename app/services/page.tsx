import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

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

export default function servicesPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          Services
        </h1>

        <p className="mt-4 max-w-2xl text-gray-700">
          Explore our services below.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={600}
                  height={380}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-4 text-lg font-medium text-unithiumBlue">
                {service.title}
              </h2>

              <p className="mt-2 text-gray-600">{service.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
