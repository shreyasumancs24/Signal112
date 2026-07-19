import { ShieldCheck, BrainCircuit, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[0.3em] text-red-400">
          About
        </span>

        <h2 className="mt-5 text-5xl font-bold">
          Why Signal112?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Signal112 is a prototype that explores how artificial intelligence
          can assist emergency response systems by replacing traditional IVR
          menus with intelligent speech understanding, real-time emergency
          classification, and dispatcher decision support. The goal is to
          reduce response delays while ensuring every critical decision
          remains under human supervision.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <BrainCircuit size={30} />
          </div>

          <h3 className="text-2xl font-semibold">
            AI Assistance
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            AI analyzes spoken emergencies, identifies incident types,
            estimates priority, and prepares structured summaries for
            dispatchers in real time.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <ShieldCheck size={30} />
          </div>

          <h3 className="text-2xl font-semibold">
            Human in Control
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            The platform is designed to support dispatchers—not replace
            them. Every recommendation is reviewed and verified before
            emergency services are deployed.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <Users size={30} />
          </div>

          <h3 className="text-2xl font-semibold">
            Educational Prototype
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            Signal112 is a portfolio project inspired by real emergency
            dispatch workflows. It demonstrates modern web technologies,
            AI integration, and real-time communication in a realistic
            application.
          </p>

        </div>

      </div>
    </section>
  );
}