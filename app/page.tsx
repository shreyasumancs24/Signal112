import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <p className="text-red-500 font-semibold uppercase tracking-[0.2em]">
          Signal112
        </p>

        <h1 className="mt-6 text-6xl font-bold leading-tight">
          AI-Powered
          <br />
          Emergency Dispatch Copilot
        </h1>

        <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-8">
          Replace outdated IVR systems with real-time AI triage that
          understands emergencies instantly, prioritizes critical incidents,
          and assists dispatchers in saving lives faster.
        </p>

        <div className="mt-12 flex justify-center gap-5">

          <Link
            href="/caller"
            className="rounded-xl bg-red-600 px-7 py-4 font-semibold transition hover:bg-red-700"
          >
            🚨 Simulate Emergency
          </Link>

          <Link
            href="/dispatcher"
            className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-4 font-semibold transition hover:border-slate-500"
          >
            🖥 Dispatcher Dashboard
          </Link>

        </div>

      </div>
    </main>
  );
}