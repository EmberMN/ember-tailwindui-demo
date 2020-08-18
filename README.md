# ember-tailwindui-demo

Repository for TailwindUI demo/talk at EmberMN meetup:
https://www.meetup.com/EmberMN/events/271954553/

Note: due to [licensing restrictions](https://www.notion.so/Tailwind-UI-License-644418bb34ad4fa29aac9b82e956a867),
I cannot publish the source templates/HTML provided by Tailwind Labs. 
That portion of this demonstration is in a private repository. 
However, Tailwind Labs has hired some people and appears to be interested
in expanding their offerings to include Vue & React components rather than just static HTML examples. 
A few days ago I tried to reach Robin Malfait via email about the possibility of providing an ember-addon as well, 
but so far I have not received any reply. 

For this demo, I will use only the free components.



## Discussion / outline / plan

### Introduction / greetings / housekeeping
* Audio / video check
* Record?
* Would love someone else to organize a meeting in the next few months. 
I need to finish my MS thesis this fall as otherwise I will get dropped, so I'm not planning to volunteer much until 2021.
* Questions / concerns before starting?
* Overview:
  1. Context: I (jacobq) care about good UI/UX but am admittedly not great at making them from scratch.
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
  2. Talk about TailwindCSS
  3. Talk about TailwindUI
  4. Talk about making an ember addon to provide some TWUI components

### [TailwindCSS](https://tailwindcss.com/)      
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


### [TailwindUI](https://tailwindui.com/)
Bills itself as:

> Beautiful UI components, crafted by the creators of Tailwind CSS.
> Fully responsive HTML components, designed and developed by Adam Wathan and Steve Schoger.

Basically, it's an organized collection of examples/solutions for various UI tasks written in HTML using TailwindCSS.
If you want to learn more you then checkout the website, watch their videos, etc.    
https://vimeo.com/393580241/82c6d7c5f6


### Let's make a TailwindUI ember addon

(Alternatively, you can use `npm` instead of [`yarn`](https://classic.yarnpkg.com/lang/en/), if you want.
I (jacobq) am using `yarn` out of personal preference.)

1. `ember addon ember-tailwindui --yarn`
2. `cd ember-tailwindui`
3. `ember install ember-cli-postcss`
4. `yarn add postcss-import tailwindcss @tailwindcss/ui @tailwindcss/typography typeface-inter`
5. Create `tailwind.config.js`
6. Edit `ember-cli-build.js` (add `postcssOptions`)
6. ember g component ` 










# **Note:** The following information was auto-generated by `ember-cli`

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-tailwindui-demo`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
