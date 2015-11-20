#!/usr/bin/env bash
set -ex

branch=$TRAVIS_BRANCH

if [[ "$branch" = "develop" ]]; then
  git config user.email "rapha.fabeni@gmail.com"
  git config user.name "raphaelfabeni"
  git config --global push.default simple
  git fetch origin master:master
  git checkout master
  git merge develop
  mv .gitignore __gitignore
  mv _gitignore .gitignore
  travis_retry gem install jekyll -v '2.4.0'
  travis_retry gem install kramdown -v 1.7.0
  travis_retry gem install jekyll-sitemap
  travis_retry gem install html-proofer
  travis_retry npm install -g bower
  travis_retry npm install -g grunt-cli
  npm install 
  bower install
  grunt ci
  grunt build
  git add -A
  git commit -m "Travis #$TRAVIS_BUILD_NUMBER"
  git push "https://${GH_TOKEN}@github.com/raphaelfabeni/raphaelfabeni.github.io"
fi