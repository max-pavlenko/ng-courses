export type ValueOf<T extends Record<PropertyKey, any>> = T[keyof T];
export type Numerical = `${number}` | number;
