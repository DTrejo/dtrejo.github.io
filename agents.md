All development must be done from the `develop` branch, never directly on `master`.

`master` is built/deployed via CircleCI from `develop`; see `.circleci/config.yml` (the `if [ $CIRCLE_BRANCH == 'develop' ]` block that runs `npm run build` and pushes to `master`).

For new article steps, see [readme.md](./readme.md).
