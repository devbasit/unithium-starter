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
  const project = articles.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return {};
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'; // Fallback if env var missing
  const imageUrl = `${siteUrl}${project.image}`; // Build absolute URL

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      type: 'article', // Add for better sharing
      url: `${siteUrl}/articles/${params.slug}`, // Add canonical URL
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seo.title,
      description: project.seo.description,
      images: [imageUrl],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const project = articles.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="py-20">
      <article className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold text-unithiumBlue">
          {project.title}
        </h1>

        <div className="mt-8">
          <Image
            src={project.image}
            alt={project.alt}
            width={800}
            height={420}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        <div className="mt-8">
          <LatexContent content={project.content} />
        </div>
      </article>
    </main>
  );
}
