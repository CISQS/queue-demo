import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { STATIONS, formatStationLabel, type StationKey } from "@/queue/stations";

export default function StationSelect({
  value,
  onChange,
  className,
  variant = "dark",
}: {
  value: StationKey;
  onChange: (next: StationKey) => void;
  className?: string;
  variant?: "dark" | "light";
}) {
  const base =
    variant === "dark"
      ? "bg-white/5 text-white ring-white/10 focus:ring-sky-300/40"
      : "bg-white text-zinc-900 ring-black/15 focus:ring-[#2aa9b8]/40";

  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as StationKey)}
        className={cn(
          "h-11 w-full appearance-none rounded-xl px-4 pr-11 text-sm font-semibold tracking-wide ring-1 outline-none transition focus:ring-2",
          base,
        )}
      >
        {STATIONS.map((s) => (
          <option key={s.key} value={s.key}>
            {formatStationLabel(s)}
          </option>
        ))}
      </select>
      <div
        className={cn(
          "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2",
          variant === "dark" ? "text-white/70" : "text-zinc-700",
        )}
      >
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}
