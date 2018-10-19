---
title: Chaos in Your Product Prototyping
date: 2017-02-17 05:50 CET
tags: lean, prototyping, growth
---
# ${this.title}

Note: **I no longer believe that product ideas should be _validated_.** One should only
build after one has pre-sold or collected signed letters of intent to buy at
a specific price-point.

I wrote this for the rest of the team at Neo, where we built new lines of
business for Fortune 500 companies. Our projects were 12 weeks long. We
designed, built, and launched new products for our clients.

This article is an amalgamation of tactical advice, written for teams of at least one
designer and one engineer who want to build a new product more quickly. It can
be applied to building a new feature as well.

## What is Chaos?

It's this strange feeling that you're not as productive as you could be because
the flow of work and coordination and communication with your team is not at its
best. It's the feeling that you are occasionally doing inefficient things, or
that you don't know what's going to happen next, or taking steps backward. Your
"chaos" as an engineer is different from that of a designer, something to be
aware of.

## Areas of Chaos
- Design flow – flow of a design from whiteboard to code
- Experiment choice – given what's already been built, your team's decision on what fidelity the next experiment should be
- Figuring out the definition of "MVP"
- Figuring out what the "MVP" is for this solution space

## Reducing Chaos
Here we explain each area of chaos, along with some ways to reduce chaos.

## Less Chaos: Design Flow

As an engineer, it's difficult to know when to jump in and code. Has the design
undergone enough feedback from users? Is it at a high-enough fidelity? Will the
design change drastically soon? Is there a major flaw that won't be noticed
until it gets coded up? These are difficult questions to answer–I'll outline a
full flow, and then I'll outline an "ideal" flow that might help us move faster
on future designs. Having this conversation with Alex (the designer on the project)
was very helpful for us.

Each bolded step includes some feedback from the Engineer, if needed. And
possibly feedback from another Neo designer, but not too much! Too much feedback
leads to more chaos. Advice can make you regress to a previous step in the flow,
and it takes much longer to finish it. Also, not all advice is worth taking even
though it may be "better," so you may have done yourself a disservice. It all
depends on the situation.

### Full Flow
- **Whiteboard the design**
- Customer feedback
- **Paper prototype**
- Customer feedback
- **Put design into proto.io or invisionapp.com**
- Customer feedback
- Make a psd of the design
- Customer feedback
- **CODE the design**
- Customer feedback

### Fast flow
- **Whiteboard the design**
- Co-worker feedback (3 people)
- **Put design into proto.io or invisionapp.com**
- Customer feedback, co-worker feedback
- **Make a psd of the design**
- **CODE the design**
- Customer feedback

## You really should...
- Include real copy in the design(s)–this can change information hierarchy, the
sizes of page elements, what design works or doesn't work, etc
- Consider choosing standard widths and sizes for your code and design. Alex and
I chose the following: 1rem = 16px, and the height/width/spacing of
everything on the page is a multiple 16px, or 8px. This makes coding the page
much easier. Don't forget that line-height is not the same as the top of the
letter "M", this means not every number in your design/code will be pretty (b/c
CSS typography doesn't directly map to visual beauty: Ask Gon for more
information about this, he can draw you a picture to show you what I mean).

## Less Chaos: Experiment Choice
It is difficult to choose the next experiment. It is difficult to assess how
"confident" you are about the product. Are you truly confident enough to build
the MVP right now? Here's the rough progression of experiments that eventually
help you get comfortable enough to build the MVP. It is expected that you will
run an experiment, it will fail, and you could return even to the first few
bullet points! I don't recommend choosing to validate two ideas at once. Ask and
share common conversion numbers for each step.

- [Optional] Find/Validate the problem
  - Do customer development and figure out what their problems are
  - Figure out which is the most painful
- Find/Validate the solution to the problem
  - Come up with solutions
  - Do customer development to see which one people want more, discounted by the fact that customer's don't always know what they want
- Do a lean canvas on the top problems, eliminating the ones that don't have good ROI
- Do customer development on the remaining most-painful problem
- Make a landing page for the problem, drive traffic to it. 
  - e.g. fit experiment: Adwords CTR: 0.54%, email signup conversion: 24.5%; Style experiment: Adwords CTR: 0.19% email signup conversation: 10.17%
- Make a concierge MVP
- Make an MVP
- Make a real Product
- Optionally A/B tests if you have enough traffic, to improve the copy/product
- Acquire more and more users
- Success!

### Less Chaos: MVP Choice
This is hard. No way around it. Think about it for a really long time. Here's a list of ways you can make your product simpler:

- Cut down on your audience until it is only one person
  - E.g. women, in the bay area, buying pants, and only plus-sizes. Jane Doe.
- Cut down to only one value prop
  - E.g. "I want to know how it will fit and look on someone like me": show variously sized models in the same pair of pants
- Do things by hand, only program at the last moment, use spreadsheets
- Deliver less product less often
  - E.g. we will send you one look (on four different models) every week
- Only one problem
- Only one solution to one problem
- Only something you could do yourself manually
- Only what you can get done in 7 days / 100 days
- ...

## Client Gotchas

It's really best to 100% ignore the fact that your client has an existing
audience. You certainly can send an email to a segment of their audience, but
this will take weeks to make happen and won't make a significant difference to
whether people use/need your product. Your other acquisition channels should
already be working.

Thanks <a href="https://twitter.com/wakeupmrkim">Alex Kim</a>,
<a href="https://twitter.com/gonzif">Gon Zifroni</a>, and everyone else at Neo!

Yours,<br>
David
