# svelte-masonry

This is an implementation of Masonry based on this excellent article by Ana Tudor (@anatudor) on CSS Tricks: https://css-tricks.com/a-lightweight-masonry-solution. It's really great. It requires no external dependencies, is super light-weight, etc.

Basically I just wrapped Svelte around the Masonry code as a reusable component.

Here's a REPL demo: https://svelte.dev/repl/d5ff70834832498882d1570b9355561e?version=3.24.1





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

Peace




### Options

There are a few options

- stretchFirst
- grid-gap
- col-width




## Development + Feedback

You're welcome to create an issue, feature request, or a pull request and I'll take a look, but this won't be a very managed repo. Instead, please read the the CSS tricks articlecheck out the source code, or ask the author (@anatudor) directly.




## License

The code was lifted from Ana Tudor (@anatudor) from CSS tricks. They have a funny license page, so you should take a look (https://css-tricks.com/license/). Do whatever you'd like with this example! 




