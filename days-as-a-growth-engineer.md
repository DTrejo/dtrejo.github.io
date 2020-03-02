---
title: Everything you should do in the first 30 days of a new growth engineering job
date: 2018-01-11 06:26 CET
tags: howto, growth, marketing, engineering
---
# ${this.title}

I’m going to lay out the things I did and wanted to do in the first 30 days of my growth engineering job at Credit Karma. I work on acquisition: getting us more traffic and more signups. My engineering work contributes to our efforts across SEO, conversation rate optimization, UX, and page speed optimization.

The following areas are important to me:

1) I wanted to gauge the amount of A/B testing and experimentation we've done across the key areas of the site. Neglected areas which are still in the conversion flow probably have easy conversion wins waiting for me.

2) I wanted to measure our copywriting skill and amount of copy testing, because as patio11<sup>⁂</sup> points out, a good homepage headline can create a 20% site-wide lift.

3) I wanted to tap into the voice and exact words used by our members so that I can find good headlines and copy and understand their painful, expensive problems†. This gives me the background I need to read a page and know how well it connects, and what CTAs will resonate best.

4) I wanted to understand WTF people are actually doing on our site. What pages do they visit most. Where do they bounce. What pages are dead ends without a CTA. What pages load like molasses. What pages suck on mobile. What pages look like when logged out vs logged in. What personalization can be shown when logged out, to continue to achieve the goal of the page. What other proven conversion tactics can we steal from other parts of the site and easily reuse. Where does the “scent,” aka intent, of a conversion flow get confusing for members. Where do they put their trust in us the most, and how can we reassure them at these key moments or ask for less (sensitive) information. And so on.

And here’s how I’ve gone about figuring out the above.

## #1 Finding Less Optimized Areas of the Conversion Flow
This is difficult because our particular team is on the newer side and we don’t have a well organized log of completed experiments, their results, and what parts of the site they were run on. Maybe if you use optimizely this would be easier to figure out.

## #2 Gauging Copywriting Skill
We have certain phrases that have certainly undergone testing in TV ads. I have noticed that we have very few tests for headlines or button copy. I sense we have a lot of wins waiting for us here :) I suspect that our paid revenue marketing teams have some great copy in their Facebook and Google ads, but I’ve yet to request access so I can read what they’re running.

## #3 Understanding How Our Members Talk and Their Expensive Problems
The best way to do this is with an Amy Hoy<sup>※</sup> Sales Safari. Because I haven’t bought the course (yet) and I was feeling lazy, I just signed up for f5bot.com and set up keyword searches for Credit Karma and the names of our competitors to see what people are saying about us on Reddit/HN. You can also use littlebirdie for this. I also asked member support to give me access to any places where they post feedback from our members (for us that is the #all-the-feels channel and the #bad-iOS-reviews / #bad-android-reviews channels).

Of course I want more than that, but I haven’t been super focused on conversion copywriting and sales writing lately, so it hasn’t been the highest priority. I wish I had more good words from our members because we have a lot of different services and I feel I don’t understand people well enough yet (and I suspect my coworkers are in a similar boat).

# #4 Figuring out WTF People Are Doing on Our Site
To accomplish this I did the following:

- Used Google Analytics to identify the top 20 pages by total sessions
- For each page, I printed that page's...
    - Desktop authenticated appearance (with one of those full page screenshotting tools)
    - Desktop unauthenticated appearance
    - Google analytics behavior flow (play around with the settings because yours might not display right by default: make sure you've set it to "automatically group pages").
    - Still TODO: mobile appearance
    - Still TODO: lighthouse page speed performance stats while 3G throttled
    - Labeled each printed screenshot with the traffic range (1-20)
- I also printed out our registration flow and did the same
- I also printed the emails we send to rescue incomplete signups. And I also pointed out how many people are in this state. After three emails we send them nothing at all, when we could be sending emails to increase trust. Lots of improvement here too).

This is very helpful because behavior flows tell you what pages someone visits before and after a page, as well as the dropoff rate. So you can get a high level feel for what people are doing.

I put all of these printouts on one of our large whiteboard walls. While giving people a tour of the wall and discussing it with coworkers, we found a lot of improvements to be made. We still have tests to run to see whether the improvements create lift. There are some that will create lifts with 100% certainty, such as adding a call to action at the end of a page that lacks one :)

I have yet to make a more exhaustive list of tests to run, and prioritize them. But I'm sure we'll get to it eventually.

I'd highly recommend this one for any growth team, because it gives you all shared context and lets you really SEE your site again. Looking at your site on a screen just shuts down your brain. Also, you likely don't frequently visit many of the top pages and flows that drive your business.

## Bonus: Make Yourself a Model to Translate Your Top Metrics into Revenue Numbers!

Someone on our team made a spreadsheet where you can plug in an incremental lift to any of the following metrics and it will spit out a revenue lift. I'd highly recommend you make one of these for yourself because it makes
back-of-the-napkin impact sizing MUCH easier. 

Here's what we can easily convert to revenue:

- New signups
- Returning member logins
- Revenue (duh)

## Here Are the Tactical Things I've Been Doing That Have Contributed to My Productivity and Overall Happiness:
- Have an expensive problem-style "why" conversation with the person who wants the project to happen, before writing any code. This lays out the business motivations of the project and helps you explore the solution-space for something satisfactory, rather than the PERFECT solution which would take forever to build.
- Size the expected impact of the project: +revenue, +signups, hours of saved, etc. This helps you prioritize and helps you guard your project and continue to invest in it. When you know it would be worth it to work on your project for a year, you’ll be able to defend continued investment even if factors outside your control delay or slow down your project.
- Wherever possible, I try to ship as soon as possible and cut scope as much as necessary to make this happen. Code in production is worth infinitely more than code langouring in a branch, picked over by code reviews (as patio11 also says). 
- Is it 80% done / good enough? Ship it. This isn't my advice, this is advice from my friend who founded three profitable bootstrapped businesses and exited two of them :) It works.
- I always, always, go talk to people in person if I have more than a few words to say over slack. You can't solve across the whole solution-space if you haven't given the other person complete knowledge of what you're trying to accomplish. Make sure to mention the words "experiment" and "prototype," so they give you the easy routes too. Also, ask if anyone else at the company is already using the API they suggest you use. You don't want to be on the bleeding edge of technology: boring technology<sup>‡</sup> is the way to go.
- Whenever I need a code review: immediately slack message everyone who I need approvals from. Or even stop by their desk if I know the review is a doozy (I do try to keep my PRs under 50 insertions though–Dan McKinley: I was listening!)


Good luck out there, may your tests win!   
David Trejo

<sup>⁂</sup> <http://www.kalzumeus.com/>   
† <https://ExpensiveProblem.com>   
<sup>※</sup> <http://yearofhustle.com/>  
<sup>‡</sup> <http://mcfunley.com/choose-boring-technology>  
