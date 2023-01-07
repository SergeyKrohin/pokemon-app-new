export type MetricsValues = {
  [key: string]: {
    impressions: number;
    clicks: number;
    cost: number;
    conversions: number;
    timestamp?: string;
  }
}
