import { notFound } from "next/navigation";
import Image from "next/image";
import LatexContent from "@/app/components/LatexContent";
import { services } from "@/lib/services";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">{service.title}</h1>

        <div className="mt-8">
          <Image src={service.image} alt={service.alt || service.title} width={900} height={500} className="rounded-lg object-cover" />
        </div>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">{service.excerpt}</p>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-unithiumBlue">Overview</h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <LatexContent content={service.content} />
          </div>
        </section>
      </div>
    </main>
  );
}
