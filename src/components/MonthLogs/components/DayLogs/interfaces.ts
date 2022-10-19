export interface DayLogsProps {
  data: ItemModel[];
}

export interface ItemModel {
  category: 'expanse' | 'gain';
  label: string;
  value: number;
}