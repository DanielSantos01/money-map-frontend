export interface GraphProps {
  size: number;
  metrics: Metrics[];
}

export interface Metrics {
  icon: string;
  color: string;
  value: number;
  label: string;
}