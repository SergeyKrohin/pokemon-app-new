export type IMetricsValues = {
  [key: string]: {
    impressions: number,
    clicks: number,
    cost: number,
    conversions: number,
    timestamp?: string
  }
}
