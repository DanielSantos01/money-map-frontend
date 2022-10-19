import { formatMoney } from '@/utils/formatMoney';
import React from 'react';
import { FlatList } from 'react-native';
import PieChart from 'react-native-expo-pie-chart';

import { GraphProps, Metrics } from './interfaces';
import * as S from './styles';

const Graph: React.FC<GraphProps> = ({ metrics, size }) => {
  const colors: string[] = metrics.map(({ color }) => color);
  const series: number[] = metrics.map(({ value }) => value);
  const gain: number = metrics.filter(({ label }) => label.toLowerCase() === 'ganhos')[0]?.value || 0;
  const spend: number = metrics.filter(({ label }) => label.toLowerCase() === 'gastos')[0]?.value || 0;

  return (
    <S.GraphContainer>
      <PieChart
        length={size}
        containerProps={{ marginLeft: '-4%' }}
        data={colors.map((color, idx) => ({
          key: `${series[idx]}`,
          color,
          count: series[idx],
        }))}
      />

      <FlatList<Metrics>
        data={metrics}
        keyExtractor={(_, idx) => idx.toString()}
        style={{ maxWidth: '50%', marginRight: '4%' }}
        renderItem={({ item }) => (
          <S.AuxContainer>
            <S.DisclaimerContainer>
              <S.Icon name={item.icon} style={{ color: item.color }} />
              <S.Label style={{ color: item.color }}>{item.label}</S.Label>
            </S.DisclaimerContainer>

            <S.LabelContainer>
              <S.Value style={{ color: item.color }}>{formatMoney(item.value)}</S.Value>
            </S.LabelContainer>
          </S.AuxContainer>
        )}
      />

      <S.TotalContainer>
        <S.TotalLabel>Total</S.TotalLabel>
        <S.TotalValue>{formatMoney((gain + spend))}</S.TotalValue>
      </S.TotalContainer>
    </S.GraphContainer>
  );
};

export default Graph;
