---
title: Questions that Senior Systems Engineers want answered
date: 2017-05-16 23:32 CEST
tags: hiring
---
# ${this.title}

You know that interviewing is a painful and expensive problem when your friends
send you pages worth of questions that they use to evaluate future employers.

These questions come from an experienced senior systems engineer friend of mine.
They gave me permission to publish, but asked to remain anonymous. This person
is currently interviewing.

If you're not looking to hire systems engineers, this article is less relevant
to you, but I think you'll still find it valuable.

– David

---

_Anonymous writes..._

Things I want to know about a prospective employer. At the conclusion of this list, I will attempt to define questions that will elicit the answers to these questions. Note that the questions actually asked may not necessarily correspond to the questions that one wants to ask.

## What I Really Want to Know

- Project prioritization
  - What metrics are used to guide prioritization efforts?
  - What do project proposals look like? Are engineers forced to clearly define the problem or do they just propose various things they want to do?
  - Does someone maintain a backlog of potential projects and reassess things periodically?
  - Is there a centralized individual who selects what goes into a release from the top down, or are individual teams empowered to do their own prioritization?
  - How are projects staffed? In particular, how are projects that nobody *wants* to do staffed? It’s easy to find people to work on projects that will have high visibility or a technically rewarding environment, but the real test of culture is how gaps are identified and staffed.
- Software development lifecycle process
  - What’s the code review process like?
  - How strictly are requirements enforced when it comes to getting reviews and performing automated testing?
  - Do developers write both code and tests, or is there an organizational split between development and QA?
  - How are conflicts mediated, both on the design level and the implementation level?
  - What’s the average time required to fix an “average sized” bug, from receiving the bug to closing it? Large times would reveal inefficiencies in the software development lifecycle. Over 8 hours saps motivation. Under 4 hours is a huge dopamine rush for highly productive developers. :)
- Approach to quality & technical debt
  - Are people who introduce technical debt held accountable for removing it?
  - Is technical debt tracked at all?
  - When was the last time someone was promoted for their work on technical debt and other “hard to quantify” things (like developer productivity, internal infrastructure, build and test frameworks, etc.)
  - Are corporate and cultural incentives set up for adding or removing technical debt?
  - What is the ratio of short-term fixes to long-term fixes (and why)?
- Remote work and WFH policy
- How do you grow engineers? How important is mentorship to company culture?
- How do you give constructive feedback...
  - ...to managers?
  - ...to other engineers?
- Are you hiring too fast or too slow?
- What is your policy towards brilliant jerks?
- What is your policy towards open source?

## Be careful:

- Don’t come across as lazy when asking about WFH policies
- Avoid using the phrase “technical debt” directly, as you don’t want to come across as an engineer who won’t provide high business value
- Avoid the phrase “unfortunately”, as you want to come across as someone who builds things up rather than puts things down
- Ask innocent, friendly, and natural questions

## Safer Phrasings That Get at the Same Answers

The following practical questions might provide insights into the above theoretical questions:

- Re: build and continuous integration system, test frameworks, and technical debt:
  - When was the last time someone made a meaningful contribution to software development lifecycle and developer productivity tooling? Tell me how they went about it (both organizationally and technically).
  - Do developers push code and tests at the same time (to the same repository), or is there a separate QA organization that writes tests asynchronously from features being pushed?
- Show me a “non trivial” code review (use this to asses quality standards, the review process, the no asshole rule, and testing requirements):
  - Ask how things are handled when you ask someone to make a change and they don’t want to do it. Is the default policy to “file a bug” and do it later? Do those bugs just get closed out in two months, or is action ever taken? When the problematic code ends up causing production issues, does the issue come back to the person who wrote it?
  - How do you resolve arguments about code style? Do engineers waste colossal amounts of time arguing about style in reviews, or are there automated style checks and formatting tools that allow the discussion to shift toward matters of substance?
  - Note: you can’t ask a new hire this question, you need to ask a long-time employee who has been around the block and seen how things play out
  - Did the developer have to re-run tests due to flakiness? Is there a dashboard showing the state of the build? Are flaky tests tracked? Are there metrics regarding how often tests flake so that the most flaky areas can be addressed?
- What are the attributes that get people promoted?
  - Be specific: Ask when the last time a close colleague was promoted and what they did to earn the promotion.
- Whose responsibility, if any, is developer productivity?
  - “Everyone’s responsibility” is the worst possible answer to this question, as it means “nobody’s responsibility”
  - If answers are vague, follow up with: “What was the last thing you did personally?”
    - Risk: This might embarrass the person if they did nothing.
    - This is a bit hardball, only go this far if you must.
- How does the culture change near the end of the release?
  - Does all hell break loose and people just push low quality code to get things out the door?
  - If so, how is the remaining work to “do it right” tracked?
  - What is the power relationship between engineers and managers? Do managers strongly imply you need to work late nights and long hours to ship a release?
- How do engineers interact with customers?
  - A bit of a fluff question, but can reveal a fair amount about how the company works. Can engineers own a problem from customer interaction to solution, or are they just cogs in the wheel of a giant organization of salespeople and product managers?
- How much time have mentors spent with interns and/or new hires this year?
  - Goal should be to find a company where mentorship is valued. Mentors shouldn’t blink at the idea of dropping whatever they’re doing for 2 hours to help a mentee (assuming the mentee is worth their time investment).
- What is the weirdest bug that you’ve worked on recently?
  - Goal is to see how the organization responds to failure
  - How did you fix it in the short-term?
  - How did you fix it in the long-term?
    - This is the most interesting part
  - You ideally want to be at a company with good war stories, because then people are excited to do their job
  - Do people actually debug things, or just work around them and restart it?
  - Does the company have a culture of root causing issues on first failure, or do they just throw their hands in the air if they can’t reproduce the issue?

– Anonymous<br>
Senior systems engineer in the SF bay area

---

David here. You may see the pattern: more senior people, even those who are
extremely technical, want high autonomy work, and want to be involved in
business decisions. They want to avoid teams and managers where they're just
another pair of hands, where no one tracks the impact of engineering work. They
want their engineering leaders to perceive the kinds of rot and dysfunction that
are difficult to explain to non-technical decision-makers.

You'll also notice that even someone who is more senior is cautious about asking
hard questions. Interestingly, I ask similar questions in my interviews for full
stack growth engineering positions, although they lean towards growth.

Yours,<br>
David<br>
david ått dtrejo.com

PS Want to impress all your engineering candidates with how great you and your company are? Email me, I can help.

PPS Tomorrow I'll be writing and sending my book review of Moneyball–you're going to like it because you'll get a better feel for how to measure & value engineering work.

In the mean time, I made this tool for you: [EngineerWorth.com](http://engineerworth.com/)–it helps you calculate whether an engineering feature will pay back the time investment. You can drag the numbers to adjust them to your situation.
