import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";
import LatexContent from "@/app/components/LatexContent";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return {};
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          {project.title}
        </h1>

        <div className="mt-8">
          <Image
            src={project.image}
            alt={project.alt}
            width={900}
            height={500}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {project.excerpt}
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-unithiumBlue">
            Project Overview
            </h2>
            
            <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <LatexContent content={project.content} />
            </div>
        </section>
      </div>
    </main>
  );
}
