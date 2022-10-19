import { Dimensions } from 'react-native';
import { PagingModel } from './interfaces';

const { width } = Dimensions.get('screen');

export const PAGES: PagingModel = { 0: 1, 1: 4, 2: 7, 3: 10 };
export const ITEM_WIDTH: number = (width/3)-20;
export const CATEGORIES: string[] = ['Futuro', 'Variável', 'Fixo'];