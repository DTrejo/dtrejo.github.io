---
title: Engineering Lead Checklists
date: 2018-10-19 05:55 CEST
tags: howto, growth
---
# ${this.title}

This article attempts to describe  how to replicate the decision making processes that a lean-ish engineering team lead would make, along with how they’d want their coworkers to help.

Let’s say that our definition of engineering lead is someone who leads an engineering project that spans multiple engineers/teams/months.

The way the team lead uses these lists, is that for every new project, they make a copy of the lists and then whenever the list is being executed by another person, they review it together to add/delete/reword items so that the person agrees and understands the work requested of them. Ideally this helps people feel they have decision-making power over their own work, and aren’t blindly executing.

Please note these checklists are very specific to Credit Karma—you’d definitely want to customize them to match your workplace.

## Team Lead’s Checklist
- Make a copy of all the checklists
- Set up 30min 1-1s with all teammates weekly, to solicit and give feedback, and understand how things are going overall
- Set up 1 hour weekly project coordination time block for getting yourself organized, thinking about how the project is going, thinking about what course corrections to make, etc
- Review each checklist executed by teammates with respective teammate to gain shared understanding on how they will help. Ask them to create their own checklist ahead of time, so they thought about their work and feel less pressured to simply say “yes.” 
- Meet with the managers of new teammates and/or ask said teammates how they like working together best
- Ask yourself whether you or your team or company have trouble investing the right amount to really finish projects you start. If the answer feels like a “yes”, these checklists are for you: you need to communicate the investment needed in the project otherwise management may become antsy and interrupt you, because they didn’t make an investment decision knowing it would take as much effort as it does.
- As much as possible, get you and your team close to the business reasons for the project. You need to fully understand the problem to choose the least wasteful solution. This also means you should try and get your designer and/or analyst and/or business person to sit with you and your engineers.
- If this is a multi-part project that will be involve another team later, make efforts to involve them right away, find their point person, and plan holistically, all the way to the end of their part of the work. This may reveal hidden work you do / don’t need to complete. 
- Start working through your project’s estimation checklist

## Estimation checklist
- How long did a recent similar project take your team? The planning fallacy is your biggest risk in the phase. 
- What kinds of 1-2 hour prototypes can we make to uncover the riskiest parts of implementation? Second biggest project risk: not looking at any code or writing a bit of pseudo code while estimating, leaving implementation risks to lie in wait. Impact: waste; having to do rewrites.
- How well tested is this area of the codebase? What tests do we need to add to feel confident about our code going into production?
- Whose approvals do we need? Security, Compliance, etc. Invite them all to say “no” to you constantly because if you don’t, you won’t know their true boundaries and surprise “no”s are the worst.
- Make a technical document laying out your discoveries from the previous steps and how you’d approach the project
- Ask all teammates and your approver peers to review your document even as you write it, iterating on their feedback is what makes the document, and your estimate, “done.”
- Strive to split the project into as many deployable pieces as possible. This reduces inventory, risk, and delivers value to your members ASAP while maximizing learning.
- Create a slack channel for all discussions related to the project, post your planning document, JIRA epic, pull requests, etc.
- Communicate project status daily in slack channel
- Show your plan to the big bosses and get real approval; start work 

## Engineer checklist
- Ask for a similar plan document for their portion of the project if you didn’t already write it (you should lean towards NOT writing it yourself if you can)
- Copy any other relevant estimation checklist items here
- Share updates with your team lead daily on your progress
- If working with a designer, have them sit next to you and discuss how you will work together. Use this [article on prototyping](https://dtrejo.com/chaos-in-your-product-prototyping) so you’re both on the same page.

## Pull request checklist 
- [Pull request checklist I wrote to help myself](https://dtrejo.com/pull-requests)
- Squash to 1 commit before merging to make rollback easier.
- Save intense testing for last, after PR feedback, so you have energy to do a thorough good job of it and catch bugs introduced by review feedback.

## Release & Deploy Checklist
- Release steps
- Production monitoring steps, e.g Splunk searches 
- Metrics monitoring steps: which key metrics will stay flat or improve?
- Who do you need to check in with in order to do the deploy and stay appraised that things are not breaking? E.g Related teams, member support

## Project wrap up checklist
- Hold a retro with everyone involved 

More coming soon! Currently discussing this with my experienced friends. Your feedback on this article is welcome too.

A toast to your next successful project!  
<span class="serif i">David Trejo</span><br/>
${this.email || ''}