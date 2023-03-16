# @voire/type-utils

Provides some new types for your typescript project.

<-- CODE -->

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
