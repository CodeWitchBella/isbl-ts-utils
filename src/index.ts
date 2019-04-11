export type AllPropertiesExcept<T, E> = {
  [K in keyof T]: K extends E ? never : K
}[keyof T]

export type PickExcept<T, E> = Pick<T, AllPropertiesExcept<T, E>>

export const notNull = <T extends Object>(_: T | null): _ is T => _ !== null

export type ArrayElement<T extends any[]> = T extends (infer E)[] ? E : never

export declare type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : never
}[keyof T]

export declare type NonNullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? never : K
}[keyof T]

export declare type NullToOptional<T> = {
  [k in NullableKeys<T>]?: T[k] | undefined
} &
  { [k in NonNullableKeys<T>]: T[k] }
