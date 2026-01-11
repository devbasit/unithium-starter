import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/lib/articles";
import LatexContent from "@/app/components/LatexContent";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  const article = articles.find(
    (a) => a.slug === params.slug
  );

  if (!article) {
    return {};
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find(
    (a) => a.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="py-20">
      <article className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          {article.title}
        </h1>

        <div className="mt-8">
          <Image
            src={article.image}
            alt={article.alt}
            width={800}
            height={420}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        <div className="mt-8">
          <LatexContent content={article.content} />
        </div>
      </article>
    </main>
  );
}
