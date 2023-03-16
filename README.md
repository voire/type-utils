# @voire/type-utils

Provides some new types for your typescript project.

[View the package on `npm`](https://www.npmjs.com/package/@voire/type-utils)

### `Bigint` types
```ts
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

```

### `Core` types
```ts
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
export interface NestedRecord<T, K extends Key = Key> extends Record<Key, T | NestedRecord<T, K>> {}

```

### `Hex` types
```ts
/**
 * Hex string with prefix
 * @since 1.2.0
 */
export type HexString = `0x${string}`

```

### `Infer` types
```ts
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

```

### `Number` types
```ts
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

```

### `Stringified` types
```ts
/**
 * Provided type casted to string
 * @since 1.2.0
 */
export type Stringified<T extends string | number | bigint | boolean> = `${T}`

/**
 * Provided type or the type casted to string
 * @since 1.2.0
 */
export type MaybeStringified<
  T extends string | number | bigint | boolean | symbol,
> = T | Stringified<Exclude<T, symbol>>

```

### `Ui` types
```ts
/**
 * Horizontal position
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type PositionX = 'left' | 'right'

/**
 * Vertical position
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type PositionY = 'top' | 'bottom'

/**
 * Position
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type Position = PositionX | PositionY

/**
 * X-Axis alignment
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type AlignX = PositionX | 'center'

/**
 * Y-Axis alignment
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type AlignY = PositionY | 'center'

/**
 * Alignment
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type Align = Position | 'center'

/**
 * Direction
 * Useful for defining some UI components' and animations' props
 * @since 1.2.0
 */
export type Direction = 'x' | 'y'

/**
 * Range of sizes
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type Size = 'sm' | 'md' | 'lg'

/**
 * Extended range of sizes
 * Useful for defining some UI components' props
 * @since 1.2.0
 */
export type SizeExtra = 'xs' | Size | 'xl'

```



## Development

### Set up linting

#### Git hooks

To update `README.md` with new code snippet.

Use [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) to auto-update `README.md` with new code snippet.

- Update packages with `yarn` / `@antfu/ni`
- Set git's hooks directory
  ```bash
  git config core.hooksPath .git/hooks/
  rm -rf .git/hooks
  ```
  _\* It's important because your local git hooks dir's path might be overriden by similar package - `husky` - if you have tried it._
- Say `simple-git-hooks` to start doing its magic:
  ```bash
  npx simple-git-hooks
  ```
