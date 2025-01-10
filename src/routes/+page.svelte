<script>
	import Masonry from '$lib/components/Masonry.svelte'

  let itemCount = 2
  import { foods as data } from '$lib/foods.js'
  
  const resetItems = () => {
    itemCount = 2;
  };
</script>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  /* Margins */
  .mx-8 {
    padding: 2rem;
    margin: 0 auto;
    max-width: 1200px;
  }

  /* Padding */
  .p-3 {
    padding: 0.75rem;
  }

  /* Border */
  .border {
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
  }

  .border-gray-300 {
    border-color: #d1d5db;
  }

  /* Position */
  .sticky {
    position: sticky;
    background: white;
    margin-bottom: 2rem;
    z-index: 10;
  }

  .top-3 {
    top: 0.75rem;
  }

  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    background: #ff3e00;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background: #ff6240;
  }

  h1 {
    color: #ff3e00;
    margin-bottom: 2rem;
  }
</style>

<div class="mx-8">
  <h1>Svelte Masonry</h1>
  <p>
    Here's a pretty basic demo on how this Masonry component code works (<a href="https://github.com/janzheng/svelte-masonry#readme">get it here</a>). 
    Make this window wider to see what happens! This is an implementation of Masonry based on this excellent article by Ana Tudor (@anatudor) on CSS Tricks: 
    <a href="https://css-tricks.com/a-lightweight-masonry-solution">https://css-tricks.com/a-lightweight-masonry-solution</a>.
  </p>
  <p>If you want to load images async, check out the <a href="/pics">pics</a> demo. </p>

  <div class="sticky top-3">
    <button on:click={()=>(itemCount<data.length?itemCount+=1:undefined)}>
      Add Food!
    </button>
    <button on:click={resetItems}>
      Reset
    </button>
    Showing foods: {itemCount} of out {data.length}
  </div>

  <Masonry stretchFirst={true} gridGap={'0.75rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'} items={data.slice(0,itemCount)}>
    {#each data.slice(0,itemCount) as o}
      <div class="p-3 border border-gray-300">
        <header>
          <h3>{o.name}</h3>
        </header>
        <section>
          <p>{o.text}</p>
        </section>
      </div>
    {/each}
  </Masonry>
</div>
