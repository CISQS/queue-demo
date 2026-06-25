import type { StationKey } from "@/queue/stations";

export type QueueSnapshot = {
  station: StationKey;
  nowServing: string;
  next: string[];
  recentlyCalled: Array<{
    ticket: string;
    calledAtISO: string;
  }>;
  updatedAtISO: string;
};

