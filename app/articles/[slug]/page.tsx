// app/articles/[slug]/page.tsx

import { getArticle } from "@/lib/articles";
import { notFound } from "next/navigation";
import Header from "@/components/client/Header";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header logoSrc="/images/HAVEN.svg"  />
      <main className="min-h-screen bg-[#F5F3EF] px-6 pt-32 pb-16">
        <div className="max-w-2xl mx-auto">

          {/* Title */}
          <h1
            className="font-bold text-4xl lg:text-5xl text-[#504D47] leading-tight mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#687C88] leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Meta — now under subtitle */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#206E6B]">
              {article.category}
            </span>
            <span className="text-[#999896] text-xs">·</span>
            <span className="text-[#999896] text-xs">{article.readingTime}</span>
            <span className="text-[#999896] text-xs">·</span>
            <span className="text-[#999896] text-xs">{article.publishedAt}</span>
          </div>

          <div className="border-t border-[#E5E3DF] mb-12" />

  {/* Body */}
<div className="max-w-none">
{article.content
  .split('\n')
  .map(line => line.trim())
  .join('\n')
  .split(/\n{2,}/)
  .map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Section heading
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      return (
        <h2
          key={i}
          className="text-2xl font-bold text-[#504D47] mt-12 mb-5"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {trimmed.replace(/\*\*/g, '')}
        </h2>
      );
    }

    // Bullet list
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.startsWith('- '));
      return (
        <ul key={i} className="space-y-3 mb-8 pl-2">
          {items.map((item, j) => (
            <li key={j} className="flex gap-3 text-lg text-[#504D47] leading-relaxed">
              <span className="text-[#206E6B] mt-1 shrink-0">•</span>
              <span>{item.replace('- ', '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Regular paragraph with inline bold
    const parts = trimmed.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={i} className="text-lg text-[#504D47] leading-[1.9] mb-8">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="font-semibold">
              {part.replace(/\*\*/g, '')}
            </strong>
          ) : part
        )}
      </p>
    );
  })}
</div>
     

        </div>
      </main>
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | HAVEN`,
    description: article.subtitle,
  };
}