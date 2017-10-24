#!/usr/bin/env bash
set -ex

branch=$TRAVIS_BRANCH

if [[ "$branch" = "develop" ]]; then
  git config user.email "rapha.fabeni@gmail.com"
  git config user.name "raphaelfabeni"
  git config --global push.default simple
  git checkout -b master develop
fi
