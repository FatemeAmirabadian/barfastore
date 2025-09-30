import { trendingStationery } from "../../../data/trendingStationery";
export default function Trends() {
  return (
    <div className="bg-white rounded-xl flex gap-6 overflow-x-auto p-2 flex-row-reverse scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100">
      {trendingStationery.map((tr) => (
        <div key={tr.name} className="flex flex-col items-center min-w-max">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 text-2xl hover:bg-purple-200 cursor-pointer transition">
            {tr.icon}
          </div>
          <span className="mt-2 text-sm font-medium">{tr.name}</span>
        </div>
      ))}
    </div>
  );
}
