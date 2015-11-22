#!/usr/bin/env bash
set -ex

branch=$TRAVIS_BRANCH

if [[ "$branch" = "develop" ]]; then
  git config user.email "rapha.fabeni@gmail.com"
  git config user.name "raphaelfabeni"
  git config --global push.default simple
  git fetch origin master:master
  git fetch origin develop:develop
  git rebase master
  git push develop HEAD:develop
  git checkout master
  git merge develop
  rm .gitignore
  mv _gitignore .gitignore
fi