<script>
	import Masonry from '$lib/components/Masonry.svelte'

  let itemCount = 2
  import { foods as data } from '$lib/foods.js'
  
</script>
<!-- 
<Accordion collapse --accordion-width="60ch">
  {#each items as item, i}
    <AccordionItem open={i === 0}>
      <svelte:fragment slot="title">{item.title}</svelte:fragment>
      <svelte:fragment slot="content">{item.content}</svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
 -->

<div class="container">
  <h1>Masonry Demo</h1>
  <p>
    Here's a pretty basic demo on how this Masonry component code works (<a href="https://github.com/janzheng/svelte-masonry#readme">get it here</a>). 
    Make this window wider to see what happens! This is an implementation of Masonry based on this excellent article by Ana Tudor (@anatudor) on CSS Tricks: 
    <a href="https://css-tricks.com/a-lightweight-masonry-solution">https://css-tricks.com/a-lightweight-masonry-solution</a>.
  </p>
  <p>If you want to load images async, check out the <a href="/pics">pics</a> demo. </p>


  <div class="_sticky">
    <button on:click={()=>(itemCount<data.length?itemCount+=1:undefined)}>
      Add Food!
    </button>
    Showing foods: {itemCount} of out {data.length}
  </div>

  <Masonry stretchFirst={true} gridGap={'0.75rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'} items={data.slice(0,itemCount)}>
    {#each data.slice(0,itemCount) as o}
      <div class="_card _padding">
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











<style>
  .container {
    margin: 2rem;
  }

  ._padding {
    padding: 12px;
  }
  
  ._card {
    border: 1px solid #ccc
  }
  
  ._sticky {
    position: sticky;
    top: 12px;
  }
</style>
