import {
  PhoneCall,
  BrainCircuit,
  MonitorCog,
  Ambulance,
} from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={28} />,
    title: "Caller Reports Emergency",
    description:
      "The caller describes the emergency naturally instead of navigating IVR menus.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "AI Understands the Situation",
    description:
      "Speech is transcribed, summarized, and the incident is prioritized in real time.",
  },
  {
    icon: <MonitorCog size={28} />,
    title: "Dispatcher Reviews",
    description:
      "The dispatcher receives a structured summary and verifies the AI recommendation.",
  },
  {
    icon: <Ambulance size={28} />,
    title: "Emergency Services Respond",
    description:
      "Once verified, the appropriate emergency response team is dispatched.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="workflow"
      className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
    >
      <div className="text-center">

        <p className="text-red-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Workflow
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          How Signal112 Works
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
          Signal112 assists emergency dispatchers by reducing the time
          spent navigating IVR systems and presenting structured
          emergency information instantly.
        </p>

      </div>

      <div className="mt-20 flex flex-col gap-10">

        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6">

            {/* Icon */}

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20">
              {step.icon}
            </div>

            {/* Content */}

            <div className="flex-1 border-l border-slate-800 pl-8 pb-10">

              <div className="mb-2 text-sm text-red-400 font-semibold">
                STEP {index + 1}
              </div>

              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}