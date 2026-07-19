import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Mic,
  ShieldCheck,
  Siren,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-28 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">

          <Siren
            size={16}
            className="text-red-400"
          />

          <span className="text-sm text-red-300">
            AI-Powered Emergency Response Platform
          </span>

        </div>

        {/* Heading */}

        <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">

          Emergency Dispatch

          <br />

          Intelligence Platform

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

          Signal112 demonstrates how artificial intelligence can assist
          emergency dispatch centers by replacing traditional IVR systems
          with real-time speech understanding, emergency prioritization,
          and dispatcher decision support.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/caller"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-semibold transition hover:bg-red-700"
          >
            Launch Simulator

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/dispatcher"
            className="rounded-xl border border-slate-700 bg-[#111827] px-7 py-4 font-semibold transition hover:border-slate-500"
          >
            Dispatcher Dashboard
          </Link>

        </div>

        {/* Feature Pills */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Pill
            icon={<Mic size={16} />}
            text="Live Speech Recognition"
          />

          <Pill
            icon={<BrainCircuit size={16} />}
            text="AI Emergency Triage"
          />

          <Pill
            icon={<ShieldCheck size={16} />}
            text="Human Verified Decisions"
          />

        </div>

      </div>

    </section>
  );
}

function Pill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-[#111827] px-5 py-3">

      <span className="text-red-400">
        {icon}
      </span>

      <span className="text-sm text-slate-300">
        {text}
      </span>

    </div>
  );
}