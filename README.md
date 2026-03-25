# irta-and-mike

## Website url

- public facing url: https://irta-mike.github.io/

## Workflow

0. You may need to install these dependencies
   - `npm install gh-pages --save-dev`
1. `git clone https://github.com/irta-mike/irta-mike.github.io.git`
2. `cd irta-mike.github.io`
3. Make any changes as needed, and then merge changes into the main branch.
4. Run `npm run deploy` (from within the main branch)
  -  This will 'push' the '/dist' folder to the gh-pages branch from which the page pulls updates.
5. You can view in 'settings' on github.com the branch that is deploying the website (from gh-pages).

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

- If website is not showing up, try adding a file called 'CNAME' with the contents 'irta-mike.com' in it in the 'gh-pages' branch.
     - It seems the CNAME file will automatically setup the DNS for the settings/pages to ensure that our page forwards automatically.
