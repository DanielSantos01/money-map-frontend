export const capitalize = (name: string) => {
  const firstLatter: string = name.charAt(0).toUpperCase();
  const splitted: string[] = name.split('').slice(1);
  return [firstLatter, ...splitted].join('');
};
