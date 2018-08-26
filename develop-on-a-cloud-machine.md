---
title: Develop on a Cloud Machine
date: 2018-08-26 05:55 CET
tags: howto, git

---
# ${this.title}

At Credit Karma we’ve found that doing our development work on AWS machines is much faster than working locally, especially for projects which involve our monolithic PHP application.

Developing on AWS machines is better than developing in a local VM, but it depends on the size of your company and how much memory/CPU your app needs.

There are a few reasons for this, at least at Credit Karma:

- We have 2+ engineers working on our cloud machine testing environment. Whereas we only have one person focusing less than part-time on our local VM testing environment.
- Multiple teams including our QA team rely heavily on our cloud machines. This means that breakages are discovered and fixed very quickly.
- Two m2x large amazon instances are much faster than our laptops

## How do you get your changes to the AWS machine?

There are a number of ways, including vi over ssh, sshfs, and rsync.

I found rsync to be the most straightforward. Back at Voxer, CJ Silverio, now the CTO of npm, wrote a script for this. Her script checks the working directory for changes with `git status` and syncs only what has changed. I added awareness of our repo’s stable branch, so that you’re free to commit as you like, and your changed will still  end up on the AWS machine.

Using our this script, which we call `pushuat`, we are able to develop at least 3x faster than in a local VM. We even see 10x+ development speed improvements for some parts of the codebase, where it is practically impossible to make changes because the app is so glacial & resource intensive.

[more writing coming soon! please wait :) ]

Thanks in advance,  
_David Trejo_  
<Email/>
