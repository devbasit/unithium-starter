import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

interface ServiceCarouselProps {
  limit?: number;
}

export default function ServiceCarousel({ limit }: ServiceCarouselProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-unithiumBlue">
          Our Services
        </h2>

        <div className="mt-8 flex gap-6 overflow-x-auto">
          {services.slice(0, limit ?? services.length).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="min-w-[280px] rounded-lg border bg-white hover:shadow-md transition"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={400}
                height={260}
                className="rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{service.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {service.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/services"
          className="inline-block mt-6 text-unithiumGreen font-medium"
        >
          View all services →
        </Link>
      </div>
    </section>
  );
}