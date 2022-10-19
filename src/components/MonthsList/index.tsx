import React, { useState, useCallback, LegacyRef, useRef } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { MonthsListProps } from './interfaces';
import { PAGES, ITEM_WIDTH } from './constants';
import * as S from './styles';

const MonthsList: React.FC<MonthsListProps> = ({
  months,
  selectedMonth,
  onSelectItem,
}) => {
  const ref: LegacyRef<FlatList<string>> = useRef<FlatList<string>>();
  const [page, setPage] = useState<number>(0);

  const getItemLayout = useCallback((_, index: number) => {
    return {
      length: ITEM_WIDTH,
      offset: ITEM_WIDTH * (index - 1),
      index,
    };
  }, []);

  const handleSetectItem = useCallback(
    (item: string) => () => {
      onSelectItem && onSelectItem(item);
    },
    [onSelectItem],
  );

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => {
      return (
        <S.CommonView>
          <S.LabelButton onPress={handleSetectItem(item)}>
            <S.Label width={ITEM_WIDTH}>{item}</S.Label>
          </S.LabelButton>
          <S.Bar isSelected={item === selectedMonth} />
        </S.CommonView>
      );
    },
    [handleSetectItem, selectedMonth],
  );

  const handleNextPage = useCallback(() => {
    if (page === 3) return;
    const newPage: number = page + 1;
    ref.current.scrollToIndex({
      animated: true,
      index: PAGES[newPage],
    });
    setPage(newPage);
  }, [page, ref]);

  const handlePreviousPage = useCallback(() => {
    if (page === 0) return;
    const newPage: number = page - 1;
    ref.current.scrollToIndex({
      animated: true,
      index: PAGES[newPage],
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
      <S.PaginationButton onPress={handlePreviousPage} disabled={page === 0}>
        <S.Icon name="chevron-left" />
      </S.PaginationButton>

      <FlatList<string>
        data={months}
        horizontal
        ref={ref}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={months.indexOf(selectedMonth)}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        onViewableItemsChanged={handleViewableItemsChanged}
      />

      <S.PaginationButton onPress={handleNextPage} disabled={page === 3}>
        <S.Icon name="chevron-right" />
      </S.PaginationButton>
    </S.Container>
  );
};

export default MonthsList;
