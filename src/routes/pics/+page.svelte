<script>
	
  import { onMount } from 'svelte';
  import Masonry from '$lib/components/Masonry.svelte';

  let data = [], refreshLayout;
  let heights = [200, 300, 400, 500, 600];
    
  async function getPics(numPics=12) {
    const pics = await fetch(`https://picsum.photos/v2/list?limit=${numPics}&page=${Math.floor((Math.random() * 50) + 1)}`)
    const _data = await pics.json()
    return _data
  };
    
  onMount(async () => {
    data = await getPics(7)
  });
    

    
    
  let fakeMess2 = 0	
  const getMore2 = async (e) => {
    console.log(e.keyCode)
    if(e.keyCode == 77){
      e.preventDefault()
      // hit m
      console.log('reset data')
      data = await getPics(3)
    }
    if(e.keyCode == 32){
      e.preventDefault()
      // press space
      data = [...data, ...await getPics(3)] //Add new data to items
      console.log('adding data', data.length)
    }
  };
</script>

<svelte:window on:keydown={getMore2}/>
 


<div class="container">
  <h1>Masonry Async Loading Demo</h1>
  <p>
    Here's a basic demo of async loading thanks to <a href="https://github.com/janzheng/svelte-masonry/issues/2">@ambrt / issue #2</a>
  </p>

  <div class="_sticky">
    <button on:click={async () => {
      data = [...data, ...await getPics(3)];
      refreshLayout();
      }}>
      Add Items
    </button>
    <button on:click={async ()=> {
      data = await getPics(3);
      refreshLayout();
    }}>
      Reset
    </button>
  </div>

  <Masonry gridGap={'0.75rem'} items={data} bind:refreshLayout={refreshLayout}>
    {#each data as o, i}
      <div
        class="_card _padding"
        >
        <div>
          <h3>{i}</h3>
        </div>
        
        <section>
          <div>
            <img alt="lol" on:load={refreshLayout} src={o.download_url} height={heights[Math.floor((Math.random() * heights.length))]} />
          </div>
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
    border: 0px solid black;
  }

  ._sticky {
    position: sticky;
    top: 12px;
  }

  img {
    width: 100% !important;
    height: auto;

  }

  .is-overflow-x-hidden{
    overflow-x: hidden;
  }

</style>
