---
title: Develop on a Cloud Machine
date: 2018-08-26 05:55 CET
tags: howto, git

---
# ${this.title}

At Credit Karma we’ve found that doing our development work on AWS machines is much faster than working locally, especially for projects which involve our monolithic PHP application.

For us, developing on AWS machines is better than developing in a local VM, but it depends on the size of your company and how much memory/CPU your app needs.

There are a few reasons for this, at least at Credit Karma:

- We have 2+ engineers working on our cloud machine testing environment. Whereas we only have one person focusing less than part-time on our local VM testing environment.
- Multiple teams including our QA team rely heavily on our cloud machines. This means that breakages are discovered and fixed very quickly.
- Two m2x large amazon instances are much faster than our laptops

## How do you get your changes to the AWS machine?

There are a number of ways, including vi over ssh, sshfs, vscode extensions, and rsync.

I found rsync to be the most straightforward. Back at Voxer, CJ Silverio, now the CTO of npm, wrote a script for this. Her script checks the working directory for changes with `git status` and syncs only what has changed. I added awareness of our repo’s stable branch, so that you’re free to commit as you like, and your changes will still  end up on the AWS machine.

Using our script, which we call `pushuat`, we are able to develop at least 3x faster than in a local VM. We even see 10x+ development speed improvements for some parts of the codebase, where it is practically impossible to make changes because the app is so resource intensive.

I’m planning to open source the script and I hope to link to it here soon.

Here are a few of the symptoms you and your team should watch out for, to tip you towards working on cloud machines:

- It take 15+ seconds for certain page loads
- You frequently lose your place or get interrupted during complex testing flows, and forget where you were
- You find yourself budgeting for local VM breakages in your feature estimates

# How expensive is it to develop on an AWS machine?
At Credit Karma we run two machines in concert to create one development environment. That comes out to about $500/mo. 

I personally only need one development environment at any given moment. When it comes to my happiness and productivity as an engineer, I find it very worth it.

Based on my meetings with the team that maintains the build process for the AWS machines, it is worth it for them too. After my talk at our engineering summit, we had so many new machines spun up that we ran out of our IP range. Thankfully, they opened up more IPs for us :)

From a developer experience perspective, they’ve made the process of requesting a new machine very smooth. You visit a shortlink, enter a few parameters into a jenkins build, and then wait for an email saying your machine is ready. They’ve done a great job on this.

That’s all for now—I highly recommend you try working on a cloud machine. Email if you have questions :)

Cheers,  
_David Trejo_  
<Email/>
