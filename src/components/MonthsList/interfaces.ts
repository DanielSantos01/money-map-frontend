export interface MonthsListProps {
  onSelectItem: (index: number, month: string) => Promise<void>;
}

export interface PagingModel {
  [key: number]: number;
}