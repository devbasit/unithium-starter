import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          Projects & Solutions
        </h1>

        <p className="mt-4 max-w-2xl text-gray-700">
          A selection of engineered power systems and energy solutions delivered
          for industrial and commercial applications.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={380}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-4 text-lg font-medium text-unithiumBlue">
                {project.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {project.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
