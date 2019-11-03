---
title: A Faster Git Workflow with Ampline
date: 2013-10-12 00:00 CET
tags: git, productivity
---
# ${this.title}

<img alt="git logo" src="./images/00000000-Git-Logo-2Color.png" class="mt0 fr p0 pl3 pb3" style="height:75px" />

I find myself copy-pasting long filenames way too often when I work with
git. Tab completing deep paths is just as annoying. What might be a better way?

<!-- more -->

What if `git status -s` showed me this?

```bash
$ git status -s
1 M  lib/child_process.js
2 M  lib/sys.js
3 ?? newfile.md
```

And then I could do this:

```bash
$ vim 1
$ git add 3
```


Does anyone know of a tool that allows this?

If it doesn't exist, let's see if I can make it :)

Cheers,  
D

## **Update**: I made it and I've been using it for years!
And I'm not the only one who loves it.

[&rarr; Check out Ampline.](https://github.com/dtrejo/ampline)

[And here are my shell aliases.](https://github.com/DTrejo/dotfiles/blob/master/dot-profile#L197)
