/**
 * Provided type casted to string
 */
export type Stringified<T extends string | number | bigint | boolean> = `${T}`

/**
 * Provided type or the type casted to string
 */
export type MaybeStringified<
  T extends string | number | bigint | boolean | symbol,
> = T | Stringified<Exclude<T, symbol>>
