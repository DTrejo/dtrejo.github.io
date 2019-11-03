---
title: How Open Source People Do Pull Requests and What We Can Learn from Them
date: 2018-10-14 05:55 CET
tags: howto, git

---
# ${this.title}

I want to describe the way I’ve observed the open source community does pull requests. I feel the pull request workflow within companies can benefit a lot from the way OSS people accept contributions.

- First, you open an issue asking the maintainers if they want a pull request for the feature you want to add. If they say no, that gives you a starting point for understanding why they don’t want the feature.
- If they say yes, you can ask for guidance on their preferred way to implement it, or you can make a pull request with psuedocode to make sure they approve of your initial design direction
- You create a barely working prototype which will likely uncover some implementation details which change your design 
- You solicit feedback on the code and make changes until it is ready to merge
- You do one last, very thorough testing session, which along with your unit tests makes you feel very confident in the code
- It gets merged


There are a couple less obvious risks that a workflow like this helps you defuse. The most important one is that it prevents you from investing too much engineering effort prior to consensus from the maintainers that they do in fact want the feature.

The secondary risk reduction has to do with your testing energy as an engineer. By making incremental changes and saving your intense testing session for the end, you conserve a lot energy. Frequently we introduce bugs that make it to production because we make a change based on a code review. Then, something breaks when we are not expecting it to, and because we are so close to merging it, and have already done so much testing (and are tired out), we don’t catch the bug.

You’ve probably heard the saying that fixing a bug in production is 10x more expensive than fixing it in development, so an approach like this is very worth it.

What practices do you and your team benefit from in your pull request process?

Cheers,  
_David Trejo_  
${this.email || ''}

PS Here are a couple more tips I’ve found very useful in my engineering work at Credit Karma:

- Prototype: create a terribly written version of the thing in 1-2 hours which demonstrates the concept and forces you to familiarize yourself with the parts of the codebase you'll be working in. This uncovers engineering risks, security risks, and compliance risks early in the process so you can have those conversations before you build something that won't work or won't get approved. Open a PR as soon as you have this and add experienced engineers on your team and other teams.
- Experiment: use the words "experiment" and "prototype" in ALL your conversations about the feature, because even for security sensitive features, they may approve you to ramp until you have significance. This is enough to help you justify further investment and reimplementation in a more secure way.
- Code on an AWS machine: I discovered that developing on a cloud machine is blissful. My team has started developing on cloud machines and have seen great productivity improvements. The company was low on new laptops, so our intern got an old slow one which couldn't run our VM, but she is still able to develop using a cloud machine. [Here is my article all about developing on a cloud / AWS machine.](https://dtrejo.com/develop-on-a-cloud-machine)

