export interface MonthModel {
  index: number;
  label: string;
}

export type CostModel = {
  name: string;
  description: string;
  date: string;
  value: number;
  created_at: string;
  subcategory: {
    id: string;
    name: string;
    icon: string;
    description: string;
  };
};