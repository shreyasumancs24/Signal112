import InfoCard from "@/components/caller/infocard";
export default function CallerPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white flex justify-center items-center p-8">

      <div className="w-full max-w-4xl bg-[#111827] rounded-2xl border border-slate-800 p-10">

        <h1 className="text-4xl font-bold">
          Signal112
        </h1>

        <p className="text-slate-400 mt-2">
          Emergency Call Simulator
        </p>

        {/* Microphone */}

        <div className="mt-10 flex flex-col items-center">

          <button
            className="w-24 h-24 rounded-full bg-red-600 hover:bg-red-700 text-4xl transition"
          >
            🎤
          </button>

          <p className="mt-4 text-lg">
            Start Emergency Recording
          </p>

        </div>

        {/* Transcript */}

        <div className="mt-10">

          <h2 className="text-xl font-semibold">
            Live Transcript
          </h2>

          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-700 p-5 text-slate-400 min-h-28">
            Listening for speech...
          </div>

        </div>

        {/* AI Analysis */}

        <div className="mt-10">

          <h2 className="text-xl font-semibold">
            AI Analysis
          </h2>

          <div className="grid grid-cols-2 gap-5 mt-5">

            <InfoCard title="Emergency Type" value="--" />
            <InfoCard title="Priority" value="--" />
            <InfoCard title="Language" value="--" />
            <InfoCard title="Confidence" value="--" />

          </div>

        </div>

        <button
          className="mt-10 w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
        >
          Submit Emergency
        </button>

      </div>

    </main>
  );
}

