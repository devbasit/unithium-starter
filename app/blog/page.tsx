import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"; // Fallback if env var missing

export const metadata = {
  title: "Insights & Articles | Unithium Energy Systems",
  description:
    "Engineering perspectives and industry insights on reliable energy systems, sustainability, and power technology.",
  openGraph: {
    title: "Insights & Articles | Unithium Energy Systems",
    description:
      "Engineering perspectives and industry insights on reliable energy systems.",
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
    title: "Insights & Articles | Unithium Energy Systems",
    description: "Engineering perspectives on energy systems.",
    images: [`${siteUrl}/unithium-logo-wt-rc.png`],
  },
};

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

              <p className="mt-2 text-gray-600">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
