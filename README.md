# svelte-masonry

A lightweight Masonry implementation for Svelte, based on [Ana Tudor's CSS-Tricks article](https://css-tricks.com/a-lightweight-masonry-solution/). No external dependencies required.

[Demo](https://svelte-masonry.surge.sh)

Both demos can be found under `/src/routes/`

This is an implementation of Masonry based on this excellent article by Ana Tudor (@anatudor) on CSS Tricks: https://css-tricks.com/a-lightweight-masonry-solution. It's really great. It requires no external dependencies, is super light-weight, etc.

Basically I just wrapped Svelte around the Masonry code as a reusable component.


## Installation

```bash
npm install svelte-masonry
```

or

```bash
yarn add svelte-masonry
```

## Basic Usage

```svelte
<script>
  import Masonry from 'svelte-masonry';
  
  let data = [
    { name: 'Item 1', text: 'Some content...' },
    { name: 'Item 2', text: 'More content...' }
  ];
</script>

<Masonry 
  stretchFirst={true} 
  gridGap={'0.75rem'} 
  colWidth={'minmax(Min(20em, 100%), 1fr)'}
>
  {#each data as item}
    <div class="card">
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
  {/each}
</Masonry>
```

## Component Props

- `stretchFirst` (boolean): Stretches the first item across the full width
- `gridGap` (string): Space between grid items (default: '0.5em')
- `padding` (string): Padding around the entire grid (default: '0px')
- `colWidth` (string): Column width using CSS grid values (default: 'minmax(Min(20em, 100%), 1fr)')
- `items` (array): Optional array of data items - pass this if your grid content updates dynamically
- `reset` (boolean): Trigger to force grid recalculation

## Working with Dynamic Content

### Images and Async Content
When working with images or other async content, use the `refreshLayout` binding:

An example can be found under `/src/routes/pics/+page.svelte`



```svelte
<script>
  import Masonry from 'svelte-masonry';
  import { onMount } from 'svelte';

  let refreshLayout;
  let images = [];
  
  onMount(async () => {
    images = await fetchImages();
  });
</script>

<Masonry 
  items={images}
  bind:refreshLayout={refreshLayout}
  gridGap={'0.75rem'}
>
  {#each images as image}
    <img 
      src={image.url} 
      alt={image.alt}
      on:load={refreshLayout}
      class="w-full h-auto"
    />
  {/each}
</Masonry>
```

### Dynamic Updates (e.g., "Load More")

```svelte
<script>
  import Masonry from 'svelte-masonry';
  let items = [];
  let refreshLayout;
  
  async function loadMore() {
    const newItems = await fetchMoreItems();
    items = [...items, ...newItems];
  }
</script>

<button on:click={loadMore}>Load More</button>

<Masonry 
  items={items}
  bind:refreshLayout={refreshLayout}
  gridGap={'0.75rem'}
>
  {#each items as item}
    <div class="card">
      <h3>{item.name}</h3>
      <p>{item.text}</p>
    </div>
  {/each}
</Masonry>
```

## Important Implementation Notes

1. **Async Content Loading**
   - Always bind `refreshLayout` when working with async content
   - Trigger `refreshLayout` on image load events
   - Pass the `items` prop when content updates dynamically

2. **Layout Updates**
   The layout automatically refreshes when:
   - Window is resized
   - Items array changes
   - `reset` prop is triggered
   - `refreshLayout()` is manually called

3. **Grid Behavior**
   - Uses CSS Grid under the hood
   - Automatically adjusts columns based on viewport width
   - Can stretch first item full-width with `stretchFirst`
   - Centers content with `justify-content: center`



## Development

You're welcome to create an issue, feature request, or a pull request and I'll take a look, but this won't be a very managed repo. Instead, please read the the CSS tricks article, check out the source code, or ask the author (@anatudor) directly about the implementation (this repo is not related to the author, but an implementation of the CSS tricks article).


## License

The code was lifted from Ana Tudor (@anatudor) from CSS tricks. They have a funny license page, so you should take a look (https://css-tricks.com/license/). Do whatever you'd like with this example! 




## Deployment / Packaging

This project was built with Sveltekit Package https://svelte.dev/docs/kit/packaging / https://www.npmjs.com/package/@sveltejs/package. 

To build the package, run `npm run package`. This will build the package and create a dist folder with the built files.

To publish the package, run `npm publish`. This will publish the package to the npm registry.

