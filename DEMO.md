# TailwindUI + Ember.js demo

## Overview

1. Introduction / motivation / context
2. Talk about TailwindCSS
3. Talk about TailwindUI
4. Talk about making an ember app/addon to provide some TWUI components


## Introduction / motivation / context

I (jacobq) care about good UI/UX but am admittedly not great at making them from scratch.
Plus, I'm often in situations where I don't have the luxury of a designer to help me (without resorting to begging).
In the past I've leaned on things like
[Bootstrap](https://getbootstrap.com/), 
[MaterializeCSS](https://materializecss.com/), or
[`ember-paper`](https://miguelcobain.github.io/ember-paper/#/).
These aren't bad tools. They can certainly save time and lead to UIs that aren't awful.
However, they all suffer from the problem that they are difficult to customize beyond some predefined level
(e.g. color palettes, themes, etc.).
This can be a problem if you need to match branding guidelines, need something the kit doesn't provide, or simply don't like the way something looks.
This is a major part of the motivation for TailwindCSS, yet in trying not to "do too much" TailwindCSS puts much of the burden of design
back on its users, which makes it less attractive for solving the problem I originally mentioned.


## [TailwindCSS](https://tailwindcss.com/)      
Aims to be "A utility-first CSS framework for rapidly building custom designs."
"With Tailwind, you style elements by applying pre-existing classes directly in your HTML [rather than writing CSS]"
https://tailwindcss.com/docs/utility-first

When I first saw that I thought, "Wait, wait, won't this lead to lots of duplication?"
I didn't see it as any different than simply applying `style="..."` attributes to elements.
I also didn't like the idea of yet another thing to learn/remember (e.g. `mx-auto py-2` for `margin-x: auto;` & `padding-y: 2`).
Additionally, `ember-cli`'s `ember serve` command supports automatically reloaded style changes without refreshing the page,
so an argument about "flipping back and forth between HTML and CSS" probably wouldn't inflence me much.
However, there are a number of reasons why Tailwind's approach has stopped bothering me now:
1. Nowadays we aren't manually putting together lots of HTML documents. We are writing templates.
   This is usually even true for static, non-JS pages as they are typically created by static-site generators. 
   Hence it should be feasible to confine any duplication that occurs to the rendered output, not in the source code.
   https://tailwindcss.com/docs/extracting-components  
2. In my experience, it's not uncommon to write CSS rules that apply to only one element. 
   So is CSS adding much value in that case vs. inline styling? Not really.
3. It's more than just writing CSS as class names on HTML elements.
   It offers a lot of additional features, such as theming and plugins. 

How do I use Tailwind with Ember?
This is actually confusing, because one might be inclined to suspect that `ember install ember-cli-tailwind` would be the recommended approach.
Unforunately, [`ember-cli-tailwind`](https://github.com/embermap/ember-cli-tailwind) ([video](https://embermap.com/video/using-postcss-and-tailwind)) was **deprecated** about a year ago. 
Does that mean you have to wire it up from scratch? Thankfully not, but you will need to get familiar with PostCSS.
PostCSS is a "tool for transforming CSS with JavaScript" (https://postcss.org/), and [Tailwind uses it](https://tailwindcss.com/#designed-to-be-customized).
Another relief is that you can `ember install ember-cli-postcss` and there're also plenty of examples, 
e.g. https://github.com/chrism/emberjs-tailwind-purgecss 


## [TailwindUI](https://tailwindui.com/)
Bills itself as:

> Beautiful UI components, crafted by the creators of Tailwind CSS.
> Fully responsive HTML components, designed and developed by Adam Wathan and Steve Schoger.

Basically, it's an organized collection of examples/solutions for various UI tasks written in HTML using TailwindCSS.
If you want to learn more you then checkout the website, watch their videos, etc.    
https://vimeo.com/393580241/82c6d7c5f6


## Let's use it with Ember

The most direct way to get started is to create a new ember application, install ember-cli-postcss, 
and simply start copying and pasting markup from TWUI into components as you make them with `ember generate component ...`.
In fact, that is what I did when I started using TWUI for the first time (out of laziness & a need to slap together a demo quickly).
This isn't ideal though, for a couple reasons:

1. We would like to minimize the amount of "wheel reinventing" and "boilerplate code" we need to write.
   Many components have interactivity, described in the HTML comments but not implemented.
   It is very likely that every time we copy/paste from TWUI we'll need to write some JS to make the thing work right.  

2. If you have custom branding, style guides, etc. then it's likely you'll also have more than one application,
   and you'll definitely want to be able to share common components amongst them.
   Unless care is taken, this direct approach will lead to [duplice code](https://en.wikipedia.org/wiki/Duplicate_code), 
   an enemy of robust, maintainable software.   

The conventional solution to this is to make an [ember addon](https://cli.emberjs.com/release/writing-addons/).
Indeed, I believe this is probably the best path for this also though I haven't attempted it yet
(need to think a little more about how to best deal with PostCSS setup and tailwind config first).
I'm also planning to watch and learn from how the developers at Tailwind Labs go about making React and Vue components.
Perhaps eventually I and others from the Ember.js community can help get a similar solution in place for TWUI and Ember.
 
For now, let's pretend you're trying to start a small business and want to make a single, smallish app quickly,
but you hope to grow someday so don't want to [paint yourself into a corner](https://idioms.thefreedictionary.com/paint+into+a+corner).
It is relatively easy to move Ember.js components from one application or addon to another, and this provides us with some
justification for not splitting everything out from the get-go. 

Side-note: I'd be curious to hear people's opinions about [monorepos](https://en.wikipedia.org/wiki/Monorepo) in the chat.

* In favor 
  - https://www.mylittletechlife.com/ember-monorepo (featured in [The Ember Times #138](https://blog.emberjs.com/2020/03/06/the-ember-times-issue-138.html))
  - https://medium.com/swlh/yarn-workspaces-monorepo-beginners-guide-ed89de47aa25
* Opposed
  - https://medium.com/@mattklein123/monorepos-please-dont-e9a279be011b
* Mixed/Neutral/Other
  - https://medium.com/@taleodor/using-monorepo-do-not-rebuild-unchanged-components-in-ci-c386e7c03426
  - https://dev.to/tallyb/six-blind-people-and-a-monorepo-1n49
  - https://dev.to/patarapolw/monorepo-git-submodules-or-something-else-4l5b

so for better or for worse we can feel OK 
provides some justification for the decision  allows us to feel OK about having the 
(or at least gives )  
 
Note: In case it's not obvious, you can use `npm` instead of [`yarn`](https://classic.yarnpkg.com/lang/en/), if you want.
I (jacobq) am using `yarn` out of personal preference.

1. `ember new ember-tailwindui-demo --yarn --no-welcome`
2. `cd ember-tailwindui-demo`
3. `ember install ember-cli-postcss`
4. `yarn add postcss-import tailwindcss @tailwindcss/ui @tailwindcss/typography typeface-inter`
5. We need to configure the `postcssOptions` and bring in the "Inter" font,
   which we do by editing the `ember-cli-build.js` file.
   This part gets a little tricky when building an addon instead.
6. Configure our project to run TailwindCSS processing.
   Create `config/tailwind.config.js`
   (if you prefer, you can locate this somewhere else like `app/tailwind/config.js`)
   and add the TailwindCSS postcss plugin to our list in `postcssOptions` in `ember-cli-build.js`.
7. ember g component ` 


