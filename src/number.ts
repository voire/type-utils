import type { HexString } from './hex'
import type { MaybeStringified, Stringified } from './stringified'

/**
 * Number or a number-like string
 */
export type StringifiedNumber = Stringified<number>

/**
 * Number or a number-serializable string
 */
export type NumberLike = MaybeStringified<number> | HexString
