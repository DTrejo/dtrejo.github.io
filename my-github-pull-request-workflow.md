---
title: My Github pull request workflow
date: 2012-07-06 00:00 CET
tags: git, howto
---
# ${this.title}

<img alt="git logo" src="./images/00000000-Git-Logo-2Color.png" class="mt0 fr p0 pl3 pb3" style="height:75px"/>

Let's say I'm taking pull requests for [node_redis][1].

Here's how I go about it.

<!-- more -->

```bash
export NUM=214 # for convenience
curl -s https://github.com/mranney/node_redis/pull/$NUM.patch > $NUM.patch

# see what changed, and make sure it applies cleanly
git apply --stat $NUM.patch
git apply --check $NUM.patch

# add the commits to master
git am --signoff < $NUM.patch

# if I need to make some changes, I do the following and put "e" next
# to the commits that need changes
git rebase -i origin/master

# If there's only one commit in the PR, I use
git commit --amend
# (you should make an alias for this)
```

Yes, rebase can be scary. I recommend reading about [how to undo **anything**
using git's reflog][2], even a botched rebase or merge.

### Update: here are some simpler ways:

```bash
export NUM=8
curl -s https://github.com/dtrejo/readmetree/pull/$NUM.patch | git am --signoff
```

Or even add this to your `~/.gitconfig` (via [piscisaureus][3])

```ini
[alias]
  # via https://gist.github.com/piscisaureus/3342247
  pullify = config --add remote.origin.fetch '+refs/pull/*/head:refs/remotes/origin/pr/*'
```

[1]:https://github.com/mranney/node_redis
[2]:http://gitfu.wordpress.com/2008/04/06/git-reflog-no-commits-left-behind
[3]:https://gist.github.com/piscisaureus/3342247
