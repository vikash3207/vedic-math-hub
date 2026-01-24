export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-4xl font-bold">Vedic Math Hub</h1>

        <p className="mt-4 text-lg text-gray-700">
          Learn Vedic Mathematics with simple steps, visuals, and practice.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <a
            href="/vedic-mathematics"
            className="rounded-2xl border p-6 hover:shadow"
          >
            <h2 className="text-xl font-semibold">Vedic Mathematics</h2>
            <p className="mt-2 text-gray-600">
              Structured lessons and visual shortcuts.
            </p>
          </a>

          <a
            href="/tips"
            className="rounded-2xl border p-6 hover:shadow"
          >
            <h2 className="text-xl font-semibold">Tips & Tricks</h2>
            <p className="mt-2 text-gray-600">
              Study hacks and exam-friendly techniques.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
