import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

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
  const htmlContent = marked(content);

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-6">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <a
          href="/vedic-mathematics"
          className="text-sm text-gray-600 hover:underline"
        >
          ← Back to Vedic Mathematics
        </a>

        <h1 className="mt-6 text-3xl font-bold">{data.title}</h1>
        <p className="mt-4 text-gray-700">{data.intro}</p>

        <article
          className="prose prose-gray mt-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
}
