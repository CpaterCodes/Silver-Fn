# Silver - Fn

This application is based on the svelte app template, at https://github.com/sveltejs/template.

### Rationale

I was recently made aware of the [SvelteJS](https://svelte.dev/) framework, which works
by precompiling Svelte compoments into pure JS before runtime.
Curious about this younger and lesser known framework, I decided to follow the
tutorial to learn more. In order to apply the framework to a tangible project,
I once again wanted to incorporate my interest in the natural world while
outsourcing my backend data to a dedicated API so I could focus on frontend
interface design and data handling.

Thankfully, the [Fishbase API](https://fishbase.ropensci.org/) provides a number
of datapoints on thousands of species which I've decided to build an interface
upon using SvelteJS.

I have also configured the project so that I can make use of typescript in my
svelte files, as this allows me to further audit and track the types of data
that I am retrieving and utilising.

### User stories

```
As a User
So that I may learn about fish species
I wish to be presented with panels containing names and images
[status: complete]

As a User
So that I may discover new fish in the process
I wish to be able to click and see a new random species
[status: complete]

As a User
So that I can gain more in-depth information
I wish to be able to hover over a fish for more
[status: pending]
```

*Additional note: the application currently exhibits a memory leak.
A fix is pending*

### Setup and runtime

1: Fork and pull this repository

2: Install the dependencies as follows
```bash
npm install
```

3: Run test suite as needed

```bash
npm test
```
4: Start [Rollup](https://rollupjs.org) and explore the project firsthand at
[localhost:5000](http://localhost:5000). Use ctrl+c to end the process.

```bash
npm run dev
```

5: Discover a range of fish species!
