import {
  BrainCircuit,
  Clock3,
  Languages,
  LayoutDashboard,
  Mic,
  ShieldCheck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[0.3em] text-red-400">
          Capabilities
        </span>

        <h2 className="mt-5 text-5xl font-bold">
          Built for Real Emergency Operations
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Signal112 assists emergency dispatchers by transforming
          spoken calls into structured, prioritized incidents
          that can be reviewed and acted upon immediately.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        <FeatureCard
          icon={<Mic size={26} />}
          title="Speech Recognition"
          description="Capture emergency calls in real time with accurate speech-to-text conversion."
        />

        <FeatureCard
          icon={<BrainCircuit size={26} />}
          title="AI Triage"
          description="Identify the emergency type and generate structured summaries for dispatchers."
        />

        <FeatureCard
          icon={<Clock3 size={26} />}
          title="Priority Queue"
          description="Automatically surface critical emergencies before lower-priority incidents."
        />

        <FeatureCard
          icon={<Languages size={26} />}
          title="Multilingual Support"
          description="Understand callers speaking different languages and provide translated summaries."
        />

        <FeatureCard
          icon={<ShieldCheck size={26} />}
          title="Human Verification"
          description="AI recommendations are reviewed by dispatchers before emergency services are deployed."
        />

        <FeatureCard
          icon={<LayoutDashboard size={26} />}
          title="Dispatcher Dashboard"
          description="Provide operators with a clean, real-time overview of incoming emergencies."
        />

      </div>
    </section>
  );
}