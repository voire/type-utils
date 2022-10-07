# @voire/type-utils

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

export type Entry<TKey = string, TValue = any> = [TKey, TValue]
export type Entries<TKey = string, TValue = any> = Entry<TKey, TValue>[]

export type DateISO = `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}.${number}${number}${number}Z`

export type PartialRecord<TKey extends Numeric | symbol, TValue> = {
  [Key in TKey]?: TValue
}

export type Mapper<TSource = any, TTarget = any> = (data: TSource) => TTarget

export interface NestedRecord<T> extends Record<string, T | NestedRecord<T>> {}

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
