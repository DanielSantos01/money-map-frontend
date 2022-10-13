export interface SpendCategoriesListProps {
  onSelectItem: (index: number, label: string) => Promise<void>;
}

export interface PagingModel {
  [key: number]: number;
}