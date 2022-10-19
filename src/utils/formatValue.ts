export const formatValue = (money: number, decimals: number = 2): string => {
  const parsed: string = money.toFixed(decimals).toString().replace('.', ',');
  return parsed;
};
