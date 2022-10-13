import React from 'react';
import { FlatList } from 'react-native';
import PieChart from 'react-native-pie-chart';

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
        widthAndHeight={size}
        series={series}
        coverFill="#1E1E1E"
        sliceColor={colors}
        coverRadius={0.78}
        doughnut
      />

      <FlatList<Metrics>
        data={metrics}
        keyExtractor={(_, idx) => idx.toString()}
        style={{ flex: 1, maxWidth: '50%' }}
        renderItem={({ item }) => (
          <S.AuxContainer>
            <S.DisclaimerContainer>
              <S.Icon name={item.icon} style={{ color: item.color }} />
              <S.Label style={{ color: item.color }}>{item.label}</S.Label>
            </S.DisclaimerContainer>

            <S.LabelContainer>
              <S.Value style={{ color: item.color }}>{`R$ ${item.value.toFixed(2)}`}</S.Value>
            </S.LabelContainer>
          </S.AuxContainer>
        )}
      />

      <S.TotalContainer>
        <S.TotalLabel>Total</S.TotalLabel>
        <S.TotalValue>R$ {(gain - spend).toFixed(2)}</S.TotalValue>
      </S.TotalContainer>
    </S.GraphContainer>
  );
};

export default Graph;
