import type { HexString } from './hex'
import type { MaybeStringified, Stringified } from './stringified'

/**
 * bigint or a bigint-like string
 * @since 1.2.0
 */
export type StringifiedBigint = Stringified<bigint>

/**
 * bigint or a bigint-serializable string
 * @since 1.2.0
 */
export type BigintLike = MaybeStringified<bigint> | HexString
