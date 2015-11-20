git add -A
git commit -m "Travis #$TRAVIS_BUILD_NUMBER"
git push "https://${GH_TOKEN}@github.com/raphaelfabeni/raphaelfabeni.github.io"