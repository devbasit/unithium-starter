import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function BlogPage() {
  return (
    <main className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          Insights & Articles
        </h1>

        <p className="mt-4 max-w-2xl text-gray-700">
          Engineering perspectives, industry insights, and practical knowledge
          from Unithium Energy Systems.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={700}
                  height={420}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-4 text-xl font-medium text-unithiumBlue">
                {article.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
