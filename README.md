# irta-and-mike

1. Should be able to push update with: `npm run deploy` from within the main brach. This will otehrwise
2. May need depencies: `npm install gh-pages --save-dev`

## Resources

- This tutorial was helpful for general setup: https://www.youtube.com/watch?v=7hnBYLa9B4k
  - (It's wrong however, since we have a github org, we just need '/' as the base path in the vite.config.js).
- Also sort of useful: https://www.youtube.com/watch?v=XQAaAQnw2Mk
- Vite stuff
    - https://vite.dev/guide/
 
## Some of my debugging

Structured with a 'subtree' for the gh-pages branch.

```
 2044  vim vite.config.ts 
 2045  npm run build
 2046  apt update nodejs
 2047  apt update
 2048  sudo apt update
 2049  sudo npm install n -g
 2050  n stable
 2051  sudo n stable
 2052  npm run build
 2053  git add dist -f
 2054  git commit -m "adding dist"
 2055  git subtree push --prefix dist origin gh-pages
 2056  git pull
 2057  git subtree push --prefix dist origin gh-pages

```
