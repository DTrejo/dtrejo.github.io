---
title: How to Run an Intern Program Like Cloudera's
date: 2014-03-31 21:14 CET
tags: hiring, intern, howto
---
# ${this.title}

As you probably already know, intern programs are a great way to hire soon-to-be
new-grads. You both get to test each other out, and you can give them an offer
afterwards if they are a junior, or keep them in mind for later when they
graduate university. One CTO I met recently does the majority of his hiring from
his pool of past interns. He sounded very happy with his setup.

When I participated in it, I found Cloudera's internship program very well run.

Here's how they did it:

- Each team brainstorms list of 15-20 project ideas before the interns arrive
  - You choose your project based on what drives you
    - Reducing customer/user pain
    - Reducing co-worker pain
    - Most interesting technically
    - Delivers most value to the company
    - ?
  - We were given 3 days to choose. We were not rushed
- No two interns were on the same project
- Interns work semi-closely with other full-timers
- Each intern has own mentor
- Your mentor is busy but not so busy they don't have time for you
- Physically Your mentor sits somewhat close to you, but no TOO close otherwise you'd ask them too many questions
- Your mentor is willing to sit with you for chunks of time to teach you what you need to know, e.g. a 15 minute lesson on how to use git rebase
- Cloudera's Git best practices were taught:
  - There is a learn Git session with a pro (hi Todd Lipcon!)
  - How to rebase
  - How to undo anything with the reflog
  - :/search to reference a commit whose message matches "search"
  - We never merge commit
- Someone keeps track of time to first commit to master, as a metric of onboarding's effectiveness
- We used review board for code reviews
  - Tracks intra-review changes even with a rebase, because we upload a diff
  - When you have a few ship-it's, from whoever is the person that cares most about that code, you push to master
  - Your mentor helps you figure out who you need the ship-it from
- Your mentor sits down with you and helps you design your project. You run your design by them to make sure it is good, discuss pros and cons and choose the best option
- Teams are 8ish people, so standups are...
  - Relevant to everyone
  - ~15 minutes
  - People actually stand up
- When teams get to too big (12-16ish), they split up
- On first commit to master, they ring a gong to commemorate the moment. Yes, this might sound cheesy, but it feels good as a new employee/engineer to be appreciated
- There are bi-monthly demo sessions, where you show what you've been working on to your co-workers. This helps with appreciation and also visibility on what people are good at and work on. This also makes it easier for people to switch to a more relevant project once they finish their current one
- Your PM knows who did what and overcame what obstacle, and tells the CEO who was key in getting shit done. And then when releases come around and the monthly all-hands meeting comes around, and the CEO can call specific people out and make them feel good and appreciate their work
- Your PM is the person you feel comfy talking to about organizational issues that may not be going the best for you, if that is the case
- Sprint planning: I'd sit down with the PM, list what I think I can get done, by what date. It goes on a wiki, which you update as things go right/wrong
- At the end of week I would post to the wiki, for the PM to read: what did I do, what will I do next week, what are my blockers
- I helped organize an intern meetup, I think it was worth it–many engineering interns attended from great companies
- We did offsites, e.g. hiking, picnik, a baseball game
- At the end of internship they talked to me, and they asked me about my impressions and what I would change about the company

- They DIDN'T do an end of internship evaluation of me, as a engineer. I would have liked to have heard some feedback. I also didn't ask, because it didn't occur to me.

Yours,<br>
David

PS Here's my article on [how to run an intern meetup][internmeetup].

[internmeetup]:/how-to-run-an-intern-meetup.html
