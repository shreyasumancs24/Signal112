export default function DispatcherPage() {
  return (
    <main className="min-h-screen pt-20 bg-[#0B1220] text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dispatcher Dashboard
      </h1>

      <div className="grid gap-6">

        <EmergencyCard
          title="Possible Cardiac Arrest"
          priority="Critical"
          location="Bokaro"
          confidence="98%"
        />

        <EmergencyCard
          title="House Fire"
          priority="High"
          location="Delhi"
          confidence="94%"
        />

        <EmergencyCard
          title="Road Accident"
          priority="Medium"
          location="Mumbai"
          confidence="90%"
        />

      </div>

    </main>
  );
}

function EmergencyCard({
  title,
  priority,
  location,
  confidence,
}: {
  title: string;
  priority: string;
  location: string;
  confidence: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#111827] p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <p className="text-slate-400 mt-2">
            📍 {location}
          </p>

        </div>

        <div className="text-right">

          <p className="text-red-500 font-semibold">
            {priority}
          </p>

          <p className="text-slate-400">
            {confidence}
          </p>

        </div>

      </div>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold transition">
        View Details
      </button>

    </div>
  );
}