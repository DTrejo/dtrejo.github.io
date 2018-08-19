---
title: How to Publish a Vue CodeSandbox.io to Github Pages on a Custom Domain
date: 2018-05-25 05:55 CET
tags: howto, js
---
# ${this.title}

Here's how I recently published [dtrejo.com/colorpreview](https://dtrejo.com/colorpreview).

- I started developing with the vue template on [codesandbox.io](https://codesandbox.io).
- Once I had something I liked and had shown it to a few people, I felt ready to
put it on my site.
- I used codesandbox to create a repo named `colorpreview`.
- My site, `dtrejo.com`, is a gh-pages site, which means that `dtrejo.com/$PROJECTNAME` 
  will resolve to any `$PROJECTNAME` github pages site for a repo under 
  `github.com/dtrejo/$PROJECTNAME`
- So I published `github.com/dtrejo/colorpreview`, and it will show 
  under `dtrejo.com/colorpreview`
- I cloned the repo locally (github.com/dtrejo/colorpreview) and ran
    ```bash
    npm i 
    # I was told i needed these by `npm run build`
    npm i --save-dev stylus stylus-loader 
    ```
- I ran `npm run build` to create a `dist/` folder, which I could then publish 
  to `gh-pages`.
- Problem: the paths on the files were wrong, because they expected to be 
  deployed at `/`, not `dtrejo.com/colorpreview`. 
- Here's the fix for that: 
  https://github.com/DTrejo/colorpreview/commit/fe4a316e82d9d29a3444b470b09a7835c60522d9#diff-c8c5ee8e781f831e4927a392fa3565e6L53
  Make sure you edit only the prod configuration.
    ``` js
    // for github pages off dtrejo.com/colorpreview/*
    assetsPublicPath: '/colorpreview/',
    ```
- Run `npm run build` again
- move the `dist` folder somewhere else, e.g. `dist-temp`, just for now
- Clone your repo into `dist` (yes, again)
- cd into `dist`, delete all the files and dotfiles except for the .git folder
- Copy the files from `dist-temp` back into dist
- add all the files and commit and push them to the `gh-pages` branch:
    ```bash
    git checkout -b gh-pages
    git add .   # repeat from here whenever you rebuild
    git commit -m 'deploy'
    git push -u origin gh-pages
    ```
- Now check e.g. `https://dtrejo.com/colorpreview` and you'll see your app!
- The most time consuming part of this was waiting for the webpack prod build to finish :(
- Success!

Thankfully, I spent almost 0 time messing with webpack configs, and developing
modern js apps in codesandbox is super painless. **Thank you codesandbox**. 

It will be cool when it can support building/deploying to gh-pages and/or easy 
setup with a CI system that does the same. I suppose I should have investigated 
using travis or something to do deploys for me, maybe next time.

Yours,  
David Trejo
