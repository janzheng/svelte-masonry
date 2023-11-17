# svelte-masonry

This is an implementation of Masonry based on this excellent article by Ana Tudor (@anatudor) on CSS Tricks: https://css-tricks.com/a-lightweight-masonry-solution. It's really great. It requires no external dependencies, is super light-weight, etc.

Basically I just wrapped Svelte around the Masonry code as a reusable component.

Here's a REPL demo: https://svelte.dev/repl/d5ff70834832498882d1570b9355561e?version=3.24.1

Nov 17, 2023 Update: Updated this thing to be Sveltekit / Svelte Package friendly, but not sure I did it right. Also added an async loading example that worked, and got rid of all the other vuln errors. Might have broken previous (svelte-masonry@0.0.18) releases.




## Usage

Add svelte-masonry to your package:

```
npm install svelte-masonry
```

or use yarn

```
yarn add svelte-masonry
```

Then import the masonry component in your project. Honestly I'm not sure if this is the correct way, but this method works on my projects:

```
import Masonry from 'svelte-masonry/Masonry.svelte'
```

Now you can use it as component and wrap around your repeating `{#each}` blocks.


```

<Masonry>
  {#each data as o}
    <div>
    	Content: {o.content}
    </div>
  {/each}
</Masonry>

``` 

If you have any implementation questions, please hit me up on twitter @yawnxyz or create an issue.



## Manually Refreshing

Sometimes you might need to dynamically refresh the grid calculations. You can do this by binding `refreshLayout` like so: `bind:refreshLayout={refreshLayout}` and then calling that function when everything's finished loading. Here's an example: https://svelte.dev/repl/2c5a8e5ae579471ea22b3f5561268d11?version=3.24.1


## Options

There are a few props you can pass to the Svelte component as options.

- `stretchFirst` (default: `false`): Setting `stretchFirst={true}` will stretch the first item across all items
- `gridGap` (default: `".5em;"`): This is a CSS value that sets the grid gap and padding for each element 
- `colWidth` (default: `"minmax(Min(20em, 100%), 1fr);"`): This is a CSS value that sets the width of each column. The default allows for some leeway before the grids collapse.
- `items` (default: `[]`): Set this to your array of data if you have dynamic items and want masonry to recalculate when you add new items




## Development + Feedback

You're welcome to create an issue, feature request, or a pull request and I'll take a look, but this won't be a very managed repo. Instead, please read the the CSS tricks articlecheck out the source code, or ask the author (@anatudor) directly.




## License

The code was lifted from Ana Tudor (@anatudor) from CSS tricks. They have a funny license page, so you should take a look (https://css-tricks.com/license/). Do whatever you'd like with this example! 











# create-svelte

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

Read more about creating a library [in the docs](https://kit.svelte.dev/docs/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
