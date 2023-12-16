export type Column<T extends Record<string, any>> = { key: keyof T; label: string; }
