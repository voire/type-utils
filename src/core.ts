/**
 * Default key signature
 * @since 1.2.0
 */
export type Key = string | number | symbol

/**
 * Value or `null`
 */
export type Nullable<T> = T | null

/**
 * Value or `undefined`
 */
export type Optional<T> = T | undefined

/**
 * Number-serializable type - `string` or `number`
 * @deprecated Use more safe `NumberLike` instead
 * @see {@link NumberLike}
 */
export type Numeric = string | number

/**
 * Promise returning the type or the type itself
 */
export type MaybePromise<T> = T | Promise<T>

/**
 * Type or an array of the type
 * Useful for API filters' types definitions
 */
export type MaybeArray<T> = T | T[]

/**
 * Definition for a class constructor's signature
 */
export type ModelConstructor<TData, TModel = TData> = {
  new (data: TData): TModel
}

/**
 * Entry
 */
export type Entry<TKey = string, TValue = any> = [TKey, TValue]

/**
 * List of the entries
 */
export type Entries<TKey = string, TValue = any> = Entry<TKey, TValue>[]

/**
 * ISO Date-like string format
 */
export type DateISO = `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}.${number}${number}${number}Z`

/**
 * The Record type with optional fields
 */
export type PartialRecord<TKey extends Numeric | symbol, TValue> = {
  [Key in TKey]?: TValue
}

/**
 * Object of boolean flags of specified keys
 * @since 1.2.0
 */
export type Flags<T extends string> = {
  [key in T]: boolean
}

/**
 * An object type without `on*` fields
 * May be useful for defining some UI components' props
 * @since 1.2.0
 */
export type OmitListeners<T> = Omit<T, `on${string}`>

/**
 * Map function from one type to another
 */
export type Mapper<TSource = any, TTarget = any> = (data: TSource) => TTarget

/**
 * The Record with the type or a new Record as a value
 */
export interface NestedRecord<T, K extends Key = Key> extends Record<string, T | NestedRecord<T, K>> {}
