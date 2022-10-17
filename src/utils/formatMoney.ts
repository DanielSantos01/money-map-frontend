export const formatMoney = (money: number, decimals: number = 2): string => {
  const parsed: string = money.toFixed(decimals).toString().replace('.', ',');
  return `R$ ${parsed}`;
};
