import Link from 'next/link';

const lessons = [
  {
    id: "lesson-1",
    title: "Lesson 1: What is Vedic Mathematics?",
    desc: "Understand the origin, purpose, and benefits of Vedic Math.",
  },
  {
    id: "lesson-2",
    title: "Lesson 2: Number Sense Basics",
    desc: "Build a strong mental foundation before shortcuts.",
  },
  {
    id: "lesson-3",
    title: "Lesson 3: Multiplication by 11",
    desc: "Learn fast multiplication using simple visual patterns.",
  },
];

export default function VedicMathPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-6">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <Link href="/" className="text-sm text-gray-600 hover:underline">
            ← Back to Home
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Vedic Mathematics
          </h1>

          <p className="mt-2 text-gray-600">
            Structured lessons to help you calculate faster and smarter.
          </p>
        </header>

        <section className="grid gap-4">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/vedic-mathematics/${lesson.id}`}
              className="rounded-2xl border p-5 shadow-sm hover:shadow"
            >
              <h2 className="text-lg font-semibold">
                {lesson.title}
              </h2>
              <p className="mt-1 text-gray-600">
                {lesson.desc}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
