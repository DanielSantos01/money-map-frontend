import { CostModel } from '@/screens/App/Home/interfaces';

export interface ExpensesListProps {
  month: string;
  costs: CostModel[];
  fetching?: boolean;
}

export interface PreviewModel {
  expanse: number;
  gain: number;
}

export type DateSection = {
  date: string;
  costs: CostModel[];
};
