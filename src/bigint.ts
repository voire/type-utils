import type { HexString } from './hex'
import type { MaybeStringified, Stringified } from './stringified'

/**
 * bigint or a bigint-like string
 */
export type StringifiedBigint = Stringified<bigint>

/**
 * bigint or a bigint-serializable string
 */
export type BigintLike = MaybeStringified<bigint> | HexString
