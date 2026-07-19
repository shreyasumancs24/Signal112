interface InfoCardProps {
  title: string;
  value: string;
}

export default function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <p className="text-xl font-semibold mt-2">
        {value}
      </p>
    </div>
  );
}