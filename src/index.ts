
export function notNull<T>(_: T | null): _ is T {
  return _ !== null
}

export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer E)[] ? E : never
