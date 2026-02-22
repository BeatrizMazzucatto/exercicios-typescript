export const unique = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const groupBy = <T, K extends keyof any>(
  arr: T[],
  key: (item: T) => K
): Record<K, T[]> => {
  return arr.reduce((acc, item) => {
    const group = key(item);
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {} as Record<K, T[]>);
};

export const sumBy = <T>(arr: T[], fn: (item: T) => number): number => {
  return arr.reduce((sum, item) => sum + fn(item), 0);
};