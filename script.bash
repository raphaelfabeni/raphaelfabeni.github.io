#!/usr/bin/env bash
set -ex

branch=$TRAVIS_BRANCH

if [[ "$branch" = "develop" ]]; then
  mv .gitignore __gitignore
  mv _gitignore .gitignore
  git config user.email "rapha.fabeni@gmail.com"
  git config user.name "raphaelfabeni"
  git config --global push.default simple
  git fetch origin master:master
  git add -A
  git commit -m "Travis #$TRAVIS_BUILD_NUMBER"
  git checkout master
  git merge develop
  git push "https://${GH_TOKEN}@github.com/raphaelfabeni/raphaelfabeni.github.io"
  mv .gitignore _gitignore
  mv __gitignore .gitignore
fi