#!/usr/bin/env bash
set -ex

branch=$TRAVIS_BRANCH

if [[ "$branch" = "develop" ]]; then
  git fetch origin master:master
  git checkout master
  git merge develop
  git push "https://${GH_TOKEN}@github.com/raphaelfabeni/raphaelfabeni.github.io"
fi