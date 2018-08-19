#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd ./dist

git init
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa -F /dev/null'
git config github.user = "DTrejo"
git config user.name "DTrejo"
git config user.email "david.daniel.trejo@gmail.com"
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:dtrejo/dtrejo.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
