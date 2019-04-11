export type AllPropertiesExcept<T, E> = {
  [K in keyof T]: K extends E ? never : K
}[keyof T]

export type PickExcept<T, E> = Pick<T, AllPropertiesExcept<T, E>>

export const notNull = <T extends Object>(_: T | null): _ is T => _ !== null

export type ArrayElement<T extends any[]> = T extends (infer E)[] ? E : never

export type NullableProperties<T> = {
  [K in keyof T]: T[K] extends null ? K : never
}[keyof T]
export type NonNullableProperties<T> = {
  [K in keyof T]: T[K] extends null ? never : K
}[keyof T]

export type NullToOptional<T> = {
  [k in keyof Pick<T, NullableProperties<T>>]?: T[k]
} &
  { [k in keyof Pick<T, NonNullableProperties<T>>]: T[k] }
