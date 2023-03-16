import { Key } from './core'

/**
 * Key of the input object
 * @since 1.2.0
 */
export type InferKey<T> = keyof T

/**
 * Value of the input object
 * @since 1.2.0
 */
export type InferValue<T> = T extends Record<Key, infer Value>
  ? Value
  : never

/**
 * Item of the input array
 * @since 1.2.0
 */
export type InferItem<T> = T extends Record<number, any>
  ? T[number]
  : never

/**
 * Type of the certain field of the input object
 * @since 1.2.0
 */
export type InferField<T, K extends keyof T> = T extends Record<K, infer Field>
  ? Field
  : never
