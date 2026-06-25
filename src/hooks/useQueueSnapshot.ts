import { useEffect, useMemo, useRef, useState } from "react";
import type { StationKey } from "@/queue/stations";
import { useQueueStore } from "@/queue/store";

export function useQueueSnapshot(station: StationKey) {
  const stationState = useQueueStore((s) => s.stations[station]);
  const lastNowServingRef = useRef(stationState.nowServing);
  const [changedToken, setChangedToken] = useState(0);

  useEffect(() => {
    if (lastNowServingRef.current !== stationState.nowServing) {
      lastNowServingRef.current = stationState.nowServing;
      setChangedToken((v) => v + 1);
    }
  }, [stationState.nowServing]);

  const updatedAt = useMemo(() => new Date(stationState.updatedAtISO), [stationState.updatedAtISO]);

  return { snapshot: stationState, updatedAt, changedToken, passedTickets: stationState.passedTickets };
}
