import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

interface ProjectCarouselProps {
  limit?: number;
}

export default function ProjectCarousel({ limit }: ProjectCarouselProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-unithiumBlue">
          Our Solutions & Projects
        </h2>

        <div className="mt-8 flex gap-6 overflow-x-auto">
          {projects.slice(0, limit ?? projects.length).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="min-w-[280px] rounded-lg border bg-white hover:shadow-md transition"
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={400}
                height={260}
                className="rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {project.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-block mt-6 text-unithiumGreen font-medium"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
