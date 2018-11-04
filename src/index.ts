export type AllPropertiesExcept<T, E> = {
  [K in keyof T]: K extends E ? never : K
}[keyof T]

export type PickExcept<T, E> = Pick<T, AllPropertiesExcept<T, E>>

export const notNull = <T extends Object>(_: T | null): _ is T => _ !== null
