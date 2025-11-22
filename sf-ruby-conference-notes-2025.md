---
title: SF Ruby Conference 2025 Notes
date: 2025-11-19 05:55 CET
tags: ruby, rails, ai, engineering
---
# ${this.title}

My SF Ruby notes (with tons of AI engineering homework for me 🤩📚). Most exciting items are 🌟 starred (both headings and bullets). There were plenty of cool things I didn't write down–see the full conference lineup on <https://sfruby.com/schedule/#day1> (click through days 1-3).

## Table of contents
- [AI apps](#ai-apps)
- [Testing with realistic data](#testing-with-realistic-data)
- [Terminal](#terminal)
- [🌟 Vibe engineering](#-vibe-engineering)
- [Templates](#templates)
- [Libraries](#libraries)
- [🌟 AI news and communities](#-ai-news-and-communities)
- [Concepts/talks people liked which I didn’t catch](#conceptstalks-people-liked-which-i-didnt-catch)
- [Upcoming events](#upcoming-events)
- [Personal finance](#personal-finance)

---
- Include latest features in your framework in your prompts so people and AI use them appropriately.ie.g. in agents.md or CLAUDE.md. Docs on all rails features as a table of contents would help, or context7 possibly.
- Lethal trifecta (https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) - e.g. ANY source of user content that gets logged and then consumed by a DD MCP could lead to a compromise if handled on an engineer machine AI agent.

## AI apps​
- 🌟 https://RubyLLM.com is a SUPER clean api for doing everything that langchain etc can do. Excited to use this in Monocle. Also, has tons of built in features and async support for many concurrent scalable ai calls in fibers.
- Async / reducing sidekick usage - more popular: concurrent ruby. Also, https://paolino.me/async-ruby-is-the-future/

## Testing with realistic data
- [https://github.com/kaspth/oaken](https://github.com/kaspth/oaken) - set up all the test scenarios once as seed data for the rails app so everyone always has a good setup locally. Also, seed data is used for the tests which greatly reduces test DB setup time and test time.
- What Gusto did: 1) Sampling and sanitizing prod data 2) tool to describe describe scenario then pull data into dev and sanitize and use it for testing
​
## Terminal
- [https://terminalwire.com/](https://terminalwire.com/) - auto-updating CLI that doesn’t need any update tooling - best for talking to APIs or a SaaS product
- Ubicloud CLI has a very cool thin client approach that allows a web API to be exposed as a CLI and kept up to date just like a webapp.
​
## 🌟 Vibe engineering
Met a guy who hasn't been typing his code for 3 years, who shared his workflow and what he's excited about.
- Claude skills from Every and compound engineering prompts [https://github.com/EveryInc/every-marketplace/tree/main/plugins/compounding-engineering](https://github.com/EveryInc/every-marketplace/tree/main/plugins/compounding-engineering)​
- Above prompts also go well with Droid AI coding assistant by factory.ai
- New area of exploration: **ambient agents** - they notice when things are wrong and just fix them for you.
- Lots of videos from Kieran Klaassen, who has been vibe engineering for 3 years: [https://m.youtube.com/results?sp=mAEA&search_query=kieran+klaassen](https://m.youtube.com/results?sp=mAEA&search_query=kieran+klaassen)
- See his workflow: https://youtu.be/8IOeygZRIY8?t=191
​
## Templates
- [https://railsbytes.com/](https://railsbytes.com/) - templates for common rails enhancements (stripe! etc.). Very helpful for new full stack rails apps.
​
## Libraries
- Use HERB not .html.erb - it’s not just a big string, has autoformatting, etc.
- [https://github.com/socketry/async-cable](https://github.com/socketry/async-cable) - better actioncable option
- 🌟 [https://github.com/spinel-coop/rv](https://github.com/spinel-coop/rv) - Install new ruby versions in 1-2 seconds without building (rbenv replacement)
​
## 🌟 AI news and communities
- Ruby AI builder discord - [https://discord.com/invite/ruby-ai-builders-1081742403460923484](https://discord.com/invite/ruby-ai-builders-1081742403460923484)
- Every AI discord [https://every.to/everything/the-sunday-digest-draft-a0c691a4-ed89-420d-922c-c659f035c099](https://every.to/everything/the-sunday-digest-draft-a0c691a4-ed89-420d-922c-c659f035c099)
- Ruby AI newsletter [https://rubyai.beehiiv.com/](https://rubyai.beehiiv.com/)
- Bad Dave's robot army, https://github.com/dgriffith/bad-daves-robot-army?tab=readme-ov-file#-command-categories, e.g. https://davegriffith.substack.com/p/sometimes-it-really-is-that-easy
​
## Concepts/talks people liked which I didn’t catch
- “Rails riffing” a creative design and project typing process done in a single Ruby file [https://www.youtube.com/watch?v=vH-mNygyXs0](https://www.youtube.com/watch?v=vH-mNygyXs0)
​
## Upcoming events
- [https://www.blastoffrails.com/](https://www.blastoffrails.com/)
​
## Personal finance
- [https://tend.cash/](https://tend.cash/) - extremely simple mint based on a budgeting strategy used for 100 years

Enjoy!  
_David Trejo_  
${this.email || ''}
