### @voire/type-utils

Provides some new types for your typescript project.

```ts
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Numeric = string | number

export type MaybePromise<T> = T | Promise<T>
export type MaybeArray<T> = T | T[]

export type ModelConstructor<TData, TModel = TData> = {
  new (data: TData): TModel
}

export type Entries<TKey = string, TValue = any> = [TKey, TValue][]

export type DateISO = `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}.${number}${number}${number}Z`

export type PartialRecord<TKey extends Numeric | symbol, TValue> = {
  [Key in TKey]?: TValue
}
```
