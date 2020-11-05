export const range = (max: number, min: number = 0): number[] => [...Array(max -min)].map((_, i) => i + min);
