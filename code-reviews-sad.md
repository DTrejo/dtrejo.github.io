---
title: Code reviews are sad
date: 2025-05-09 05:55 CET
tags: git
---
# ${this.title}

The current state of code review best practices and tooling is somewhat sad. We have been using the same GitHub pull request UI for years. We give code reviews of varying levels of quality from a quick scan to simulating every line of code in our heads and running the tests and viewing the code in our editors. With the advent of AI, which can write very low-quality code, we need to get much better at reviewing, rejecting, and improving code before it gets into our codebase, clogs up our context, and makes everything more difficult to read and debug. Soon, everyone in the company will be writing apps, and we are going to need to get way better at giving code reviews, both as humans and with AI-assisted reviews.

## Current state of human code reviews

Before we can talk about how to improve code reviews done by humans, we need to talk about what the best practices are for code reviews, as well as how people currently do code reviews.

## Code reviewer’s quality investment from least to most
- Quick scan of the side-by-side or vertical diff
- Read over functions and logic and think about issues
- Look at the complete files and functions, possibly in your editor with syntax highlighting, and mentally simulate a run of the modified code paths, and imagine ways it can go wrong.
- Run the code locally along with tests and set the debugger break points to inspect and validate the data at various points in the program execution.

The majority of advice around code reviews focuses on standards for the author of the pull request to follow. This is good, but not enough because it is important for the code reviewer to deeply understand the new code, maintain their expertise in the codebase, and find problems with the pull request. Deep understanding of a codebase allows an engineer to contribute to it much more quickly and easily.

Those of you who use debuggers frequently know that you can fix an issue at least twice as quickly when you use a debugger compared to when you do print-line debugging. How long does it take you to figure out a bug when simply reading the code and without executing it at all? That is where we are today with code reviews.

## Bringing code reviews into the 21st century

Here is my wish list as a code reviewer:
1. Allow me to step through the code execution paths that have been modified in the pull request, based on the tests that have been modified. 
2. Allow me to see the data being handled in variables as I look through the code.
3. Allow me to see code coverage of each part of the code.
4. Show me the full file as I am navigating through the program execution so that I can feel the level of abstraction and notice nearby repetition or code that would benefit from being cleaned up.

Yes, I know that I have essentially described a debugger; however, it is more accurate to say that I am describing saved and replayable debugger sessions based on the tests. Reviewing the code needs to be fast and browser-browser to eliminate setup friction.

Good news: if you want something like this in development, tidewave is doing this for Rails, which makes their AI a lot smarter.

Good news: I just discovered that if you press “.” on a GitHub pull request you can see all the code in a browser-based VSCode editor. You can comment, commit, approve, and see the full diff in its full file context. I’ll be trying this out a lot more and see if it improves my code review quality.

I strongly believe that if we had tooling like this, our human code reviews would improve a huge amount. If we plug AI into a similar workflow, it will be able to give much better code review feedback. We are already seeing AI embedded next to language servers and debuggers while engineers write their code (tidewave); this is a logical next step. Why should AI be the only one to have a superior working environment? Humans need this too.

Wishing you a deep and valuable code review experience!
_David Trejo_  
${this.email || ''}