import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

interface ArticleGridProps {
  limit?: number;
}

export default function ArticleGrid({ limit }: ArticleGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-unithiumBlue">
          Insights & Resources
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.slice(0, limit ?? articles.length).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-lg border hover:shadow-md transition"
            >
              <Image
                src={article.image}
                alt={article.alt}
                width={400}
                height={240}
                className="rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">{article.title}</h3>
                <span className="mt-3 inline-block text-sm text-unithiumGreen">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-block mt-6 text-unithiumGreen font-medium"
        >
          View all insights →
        </Link>
      </div>
    </section>
  );
}
