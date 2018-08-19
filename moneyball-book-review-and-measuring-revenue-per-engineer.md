---
title: Moneyball Book Review and Measuring Revenue per Engineer
date: 2017-05-18 04:40 CEST
tags: hiring
---
# ${this.title}

First, I've pulled out the highlights of Moneyball for you. The book is about
how the Oakland A's baseball team buys players who are undervalued by the rest
of the league. This allows them to build an amazing team despite their budget.

Second, we'll look at ways to measure revenue per engineer, and related numbers we'd want to know. Are you an engineering leader with 20+ people in your organization? You'll like this section because you're always trying to give headcount to the teams who'll most favorably improve revenue. You're also trying to hire engineers who care about your business.

*Reading time: 11 minutes, 2 seconds–but don't let that scare you away.*

## 1. Moneyball Book Review
My style of book review is to pull out the best sections, so here they are:

> […] baseball, more than other sports, gave you meaningful things to count, and that by counting them you could determine the value of the people who played the game
<br>– page 69

> As the thirty-fifth pick approaches, Erik once again leans into the speaker phone. If he leaned in just a bit more closely he might hear phones around the league cliciking off, so that people could laugh without being heard. For they do laugh. They will make fun of what the A's are about to do, and there will be a lesson in that. The inability to envision a certain kind of person doing a certain kind of thing because you've never seen someone who looks like him do it before is not just a vice. It's a luxury. What begins as a failure of imagination ends as a market inefficiency: when you rule out an entire class of people from doing a job simply by their appearance, you are less likely to find the best person for the job.
<br>– page 115

> A set of Platonic ideas is one of the gifts the Wall Street traders gave to Paul DePodesta. The precision of the AVM system, copied by Paul, enabled him to think about every event that ocurred on a basedball field in a new and more satisfying way. Any ball hit anyplace on a baseball field had been hit just that way thousands of times before: the average of all those hits was the Platonic idea. Call it a line drive hit at *x* trajectory and *y* sp speed to point #968. From the ten years worth of data you ca see that there have been 8,642 practically identical hits. You can see that 92 percent of the time the hit went for a double, 4 percent for a single, and 4 percent it was caught. Suppose the average value of that event is .50 of a run. *No matter what actually happened,* the system credits the hitter with having generated .50 of a run, and the pitcher with having given up .50 of a run. If Johnny Damon happens to get one of his trademark jumps and makes a sprawling catch, he is credited with saving his team .50 of a run.
>
> The beauty of the value of a hit (or catch) was that the game gave it to you, the game *told* you how valuable every event was, by telling you how valuable it had been, on average, over the past ten years. By listening to what the game told him about the value of events, Paul could take every ball hit in the area broadly defined as center field and determine its "expected run value".
<br>– page 135

Author notices that the A's in the video room watch the game in a completely different manner. They reply:

> "It's looking at process rather than outcomes," Paul says. "Too many people make decisions based on outcomes rather than process."
>
> The route a pitch takes to the cather's mitt *is* an outcome, I say. It's just a more subtle outcome.
>
> "It's not what happened," says Paul, "it's how our guy approached it."
<br>– page 146

> […] meant little to the Oakland A's, who were forever looking for dirt-cheap opportunities to accept bad defense for an ability to get on base. One trick of theirs was to pound on a player just after he'd had what appeared to be a career-threatening injury. Billy Beane had a favorite saying, which he'd borrowed from the Wall Street investor Warren Buffet: the hardest thing to find is a good investment.
<br>– page 161

I can already think of a few life events that devalue engineers for most employers.

> The reason the Oakland A's, as run by Billy Beane, played as if they were a different team in the second half of a season is that they *were* a different team. As spring turned to summer the market allowed Billy to do things that he could do at no other time of the year. The bad teams lost hope. With the loss of hope came a desire to cut costs. With the desire to cut costs came the dumping of players. As the supply of players rose, their prices fell. By midsummer, Billy Beane was able to acquire players he could never have afforded at the start of the season.
<br>– page 193-194

Makes me think that every engineering leader should have very friendly relationships with both their reports and their peers at other companies. When an engineer is ready to leave, and isn't interested in moving internally, why let them quit when you might be able to call a friend and trade them for someone else, leaving everyone happier?

> His reduced circumstances had forced Billy Beane to embrace a different mental model of the BIg League Pitcher. In Billy Beane's mind, pitchers were nothing like high-performance sports cars, or thoroughbred racehorses, or any other metaphor that implied a cool, inbuilt superiority. They were more like writers. LIke writers, pitchers pitchers initiated action, and set the tone for their games. THey had all sorts of ways of achieving their effects and they needed to be judged by those effects, rather than by their outward appearance, or their technique. To place a premium on velocity for its own sake was like placing a premium on big vocabulary for its own sake. […] Good pitchers were pithcers who got outs; how they did it was beside the point.
>
> Good pitchers were like writers in another way too: their output was harder than it should have been to predict.
><br>– page 222

> […] Jackie Robinson was exactly the sort of player the A's and the Jays salivate over. He had stats they tended to stress–high on-base, plate discipline, great power for a second baseman, etc.–*plus he was undervalued.* Indeed, one way of looking at the revolution in baseball management is a search for less dramatic version fo Jackie Robinsonºplayers who, for one unfair reason or another, often because of their appearance, had been maligned and undervalued by the market.
> <br>– page 297

---

## 2. Measuring Revenue per Engineer: Applying Moneyball to Engineers

We want to track the engineering equivalent of expected runs, not fastball speed or whether they have a good body.

## What are the engineer equivalents of Moneyball's baseball stats?

Raw engineering skill does not necessarily correlate with revenue.

Many still try (and fail) to gauge engineering skill using whiteboard interviews.

Another set of companies test engineering skill with live coding, pair programming, homework projects, and coding challenges.

I've yet to hear of someone who has explicitly said they hire based on the candidate's future value to their company.

How do we measure engineering **value** (not skill) for various roles?

- Frontend
- Backend
- Systems
- Growth
- Native

### What do we wish we knew?

- Cost per line of code (bugs + churn + initial-time-cost-to-write). NASA measured this, they paid $1,000 per LOC related to the *Challenger* accident.\*
- Revenue generated per line of code
- Revenue generated over time
- Time to ship (from e.g. design phase until production)
- Amount of time code spends in inventory before sale (code in branches awaiting deployment count as inventory; production counts as sale)
- Server costs saved (number of servers + cost for servers + number of pager alerts + revenue per server-dollar)
- Client-side device costs saved (latency + CPU + energy + data + value of customer's time)
- Customer value created (usually we use revenue as a proxy for customer value)

### Secondary metrics that correlate in well-known ways with the above:

- Page speed increases
- Test suite speed increases
- Team efficiency increases
- Lines of code deleted
- Number of deploys per week
- Amount of downtime
- Improved new engineer onboarding speed
- Bugs fixed (ideally in a way that isn't gameable)
- Bugs fixed *before anyone else knew they existed.* Communicating and getting credit for these is a very difficult problem for some of my friends.

You and your company have certain things you value. If you're not sure what you
value, survey your current
team's resumes and past performance reviews for what stats got them noticed. You
can turn these into questions to ask before a phone screen or instead of a
resume. Personally I don't believe in resumes, because as engineers we usually aren't good at
reducing our value down to bullet points.

## Measuring the Value of Your Teams

You can work numbers for the metrics above from the front or from the back.

Working the numbers from the back means looking at...

- Profit and loss for company &rarr; P & L for team &rarr; team size &rarr; single team-member &rarr; fraction of impact
- Team shape, e.g. who worked on a particular feature: number engineers of each type, number of designers, number of PMs

Even if you can't quantify the value of a single engineer, you can still
understand the value of a department or a team. Then you can use the amount you pay
each person to *estimate* the fraction of value they bring. The amount you pay a
person doesn't always correlate with how much value they bring, but
it's a start.

Working the numbers forward means you evaluate existing teammates based on any stat that the person had the presence of mind to track and share, then convert it to a dollar amount.

As for discovering new and promising engineers, you might look at…

- Ruby gems stats
- Github repo stats
- npm module stats
- Bullet points on their resume, adjusted to fit your company's situation and reduced to dollar figures. For example, a 20% reduction in server fleet size, applied to your 2000 servers which cost you $Y per year, means if you hire this devops person and they do the same optimization, you stand to save... $Y-(Y*.2) annually.)

Ideally, we want a technique that works well on people without public
work. Thus a questionnaire would work well, assuming they can give us stats or at
least rough numbers. For people without past industry experience, the best we can do is measure engineering skill and potential in an unbiased way.

### Onboarding for Newly Hired Engineers

Zach Millman, Senior Product Engineer at Lever, throws in:

> Onboarding/retraining can be a large cost. Someone who isn't fully comfortable with browser and web stack might still have productivity similar to a junior engineer, even after half a year.
> 
>There's also a danger in measurement. Any time someone is incentivized to increase a number, they'll do it–even if it's not sustainable long term (e.g salespeople promising features that don't exist).
>
> I think one of the things that makes engineering really different from baseball is how much the knowledge of the particular team and stack matter in actual productivity. A hitter will have roughly the same "productivity" on any team. A junior engineer who's been working at a company for two years is often much more productive than a senior engineer who's been there for half a year and hasn't seen all the codebase.
>
> Switching costs are brutal :(
>
> – Zach Millman

### What increases the value of an engineer?

Someone who has the same stats, but is from a historically underpaid group in
tech, or who has work experience that no one else knows how to assess or value. This is why Matasano has such success with their CTFs.*

### What are other people measuring?

Some teams measure as part of how they lead/manage:

> I want everyone on my team to be able to go home confident they’ve done their job well, and not worry if I’ve just had a bad day. [...]
> Our team pays attention to:
>
  - Commit frequency: we encourage everyone to check in multiple times daily
  - Commit size: keeping work surface area small to lower risk
  - Code churn: in retrospectives and to notice when someone is stuck
  - Legacy refactoring: to notice when people are cleaning up the codebase
  - Helping others: to recognize team players
  - Review Speed: because it can be tied directly to business value delivered
>
> – Andrew Templeton, Engineering Director ([@ayetempleton](https://twitter.com/ayetempleton))\*

## Choosing what to measure

You **don't** want to measure business outcomes on a day-to-day basis, because
that is demotivating. You want to measure activities that you know lead to good
business outcomes. For example, you wouldn't only give people credit for
successful A/B tests, instead you'd know that 1 in 6 A/B tests were successful last year,
and encourage people to run more (within reason).

What do you wish you could measure? How are your measurements coming along?

Yours,<br>
David<br>
david åt dtrejo.com

P.S. Thank you [Chy](https://www.linkedin.com/in/chyheim-jackson-burgess-507b3930/) and [Zach](https://twitter.com/zmillman) for your critique!

#### Footnotes

\* [NASA's cost per LOC](https://history.nasa.gov/sts1/pages/computer.html)

\* [Erin on Matasano's CTFs](https://sockpuppet.org/blog/2015/07/13/starfighter/); [Thomas' article on hiring](https://sockpuppet.org/blog/2015/03/06/the-hiring-post/)

\* [Andrew Templeton on what KPIs he tracks in an interview with GitPrime](https://blog.gitprime.com/why-kpis-matter-for-software-engineering-andrew-templeton)

Related articles:

- [Dan Luu on programmer moneyball](http://danluu.com/programmer-moneyball/)
- [Dan Luu on information asymmetry in hiring (who is great?)](http://danluu.com/hiring-lemons/)
