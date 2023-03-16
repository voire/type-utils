import type { HexString } from './hex'
import type { MaybeStringified, Stringified } from './stringified'

/**
 * Number or a number-like string
 * @since 1.2.0
 */
export type StringifiedNumber = Stringified<number>

/**
 * Number or a number-serializable string
 * @since 1.2.0
 */
export type NumberLike = MaybeStringified<number> | HexString
