import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

function extractFirstH1(markdown: string): string | undefined {
  const match = markdown.match(/^#\s+(.+)\s*$/m);
  return match?.[1]?.trim();
}

function stripLeadingH1(html: string): string {
  // Marked typically outputs a leading <h1>...</h1> when markdown starts with '# '.
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}

function splitIntoSectionsByHr(html: string): string[] {
  const parts = html
    .split(/\s*<hr\s*\/?\s*>\s*/gi)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
  return parts.length > 0 ? parts : [html];
}

function withCardSections(html: string): string {
  const sections = splitIntoSectionsByHr(html);
  const wrapped = sections
    .map(
      (sectionHtml, index) =>
        `<section class="lesson-section lesson-accent-${index % 6}">${sectionHtml}</section>`
    )
    .join("");
  return `<div class="lesson-sections">${wrapped}</div>`;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  // ✅ Next.js 16: params is a Promise, so await it
  const { lessonId } = await params;

  const filePath = path.join(
    process.cwd(),
    "app",
    "content",
    "vedic-mathematics",
    `${lessonId}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <main className="min-h-screen bg-white text-gray-900 pt-6">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <a
            href="/vedic-mathematics"
            className="text-sm text-gray-600 hover:underline"
          >
            ← Back to Vedic Mathematics
          </a>

          <h1 className="mt-6 text-2xl font-bold">Lesson not found</h1>
          <p className="mt-2 text-gray-600">
            Could not find markdown file for: <b>{lessonId}</b>
          </p>

          <p className="mt-4 text-gray-700">Expected file at:</p>
          <pre className="mt-2 overflow-auto rounded-xl border bg-gray-50 p-4 text-sm">
            {filePath}
          </pre>
        </div>
      </main>
    );
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const derivedTitle = extractFirstH1(content);
  const title =
    typeof data.title === "string" && data.title.length > 0
      ? data.title
      : derivedTitle ?? lessonId;

  const rawHtml = await marked.parse(content);
  const htmlWithoutLeadingH1 = stripLeadingH1(rawHtml);
  const htmlContent = withCardSections(htmlWithoutLeadingH1);

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-6">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <a
          href="/vedic-mathematics"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back to Vedic Mathematics
        </a>

        <h1 className="mt-6 text-3xl font-bold">{title}</h1>
        {typeof data.description === "string" && data.description.length > 0 && (
          <p className="mt-3 text-gray-700 leading-relaxed">{data.description}</p>
        )}

        <article
          className="lesson-prose prose prose-slate mt-8 max-w-none prose-p:leading-relaxed prose-p:my-4 prose-headings:scroll-mt-24 prose-h2:mt-0 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-table:my-0 prose-hr:my-10 prose-pre:my-6"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
}
