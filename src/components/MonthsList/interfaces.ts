export interface MonthsListProps {
  months: string[];
  selectedMonth: string;
  onSelectItem: (month: string) => void;
}

export interface PagingModel {
  [key: number]: number;
}
