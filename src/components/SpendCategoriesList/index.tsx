import React, { useState, useCallback, LegacyRef, useRef } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { SpendCategoriesListProps } from './interfaces';
import { CATEGORIES, PAGES, ITEM_WIDTH } from './constants';
import * as S from './styles';

const SpendCategoriesList: React.FC<SpendCategoriesListProps> = ({ onSelectItem }) => {
  const ref: LegacyRef<FlatList<string>> = useRef<FlatList<string>>();
  const [page, setPage] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(PAGES[page]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const getItemLayout = useCallback((_, index: number) => {
    return ({
      length: ITEM_WIDTH,
      offset:  ITEM_WIDTH * (index - 1),
      index
    });
  }, []);
  
  const keyExtractor = useCallback((item: string, index: number): string => {
    return `${index}-${item}`;
  }, []);
  
  const handleSetectItem = useCallback((index: number) => () => {
    setSelectedIndex(index);
    onSelectItem && onSelectItem(index, CATEGORIES[index]);
  }, [setSelectedIndex, onSelectItem]);
  
  const renderItem: ListRenderItem<string> = useCallback(({ item, index }) => {
    return(
      <S.CommonView>
        <S.LabelButton onPress={handleSetectItem(index)}>
          <S.Label width={ITEM_WIDTH}>{item}</S.Label>
        </S.LabelButton>
        <S.Bar isSelected={index === selectedIndex} />
      </S.CommonView>
    );
  }, [selectedIndex, handleSetectItem]);
  
  const handleNextPage = useCallback(() => {
    if(page === 3) return;
    const newPage: number = page + 1;
    ref.current.scrollToIndex({
      animated: true,
      index: PAGES[newPage]
    });
    setPage(newPage);
  }, [page, ref]);
  
  const handlePreviousPage = useCallback(() => {
    if(page === 0) return;
    const newPage: number = page - 1;
    ref.current.scrollToIndex({
      animated: true,
      index: PAGES[newPage]
    });
    setPage(newPage);
  }, [page, ref]);
  
  const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
    const indexes: number[] = viewableItems.map(({ index}) => index);
    Object.values(PAGES).forEach((value, index) => {
      if(indexes.indexOf(value) !== -1) {
        setPage(index);
      }
    });
  }, [setPage]);
  
  return (
    <S.Container>
      <FlatList<string>
        data={CATEGORIES}
        horizontal
        ref={ref}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={pageIndex}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
    </S.Container>
  );
};

export default SpendCategoriesList;
