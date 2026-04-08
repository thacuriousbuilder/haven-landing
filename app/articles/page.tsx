
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/client/Header";
import FooterSection from "@/components/client/FooterSection";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles | HAVEN",
  description: "Bite-sized reads on nutrition, mindset, and building habits that stick.",
};

const CATEGORY_COLORS: Record<string, string> = {
  "How It Works": "bg-haven-teal/10 text-haven-teal",
  "Tips":         "bg-haven-orange/10 text-haven-orange",
  "Science":      "bg-blue-100 text-blue-700",
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-haven-cream">
      <Header logoSrc="/images/HAVEN.svg" />

      {/* Hero */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-haven-graphite">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Learn</h1>
            <p className="text-xl text-haven-graphite/90">
              Bite-sized reads on nutrition, mindset, and habits that actually stick.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
              >
                {/* Top color bar */}
                <div className="h-2 bg-haven-teal" />

                <div className="p-6 flex flex-col h-full">
                  {/* Category pill */}
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit ${
                    CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-600"
                  }`}>
                    {article.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-haven-graphite mb-2 group-hover:text-haven-teal transition-colors">
                    {article.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-haven-steel text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {article.subtitle}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-haven-cream">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-haven-steel/60">{article.publishedAt}</span>
                      <span className="text-xs text-haven-steel/60">{article.readingTime}</span>
                    </div>
                    <span className="text-haven-teal text-sm font-semibold group-hover:underline">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}