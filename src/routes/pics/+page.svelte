<script>
	
  import { onMount } from 'svelte';
  import Masonry from '$lib/components/Masonry.svelte';

  let data = [], refreshLayout;
  let heights = [200, 300, 400, 500, 600];
    
  async function getPics(numPics=1) {
    const results = [];
    for(let i = 0; i < numPics; i++) {
      const width = 400;  // fixed width
      const height = Math.floor(Math.random() * 400) + 200;  // random height between 200-600
      const randomId = Math.floor(Math.random() * 100) + 1;
      results.push({
        download_url: `https://picsum.photos/id/${randomId}/${width}/${height}`,
        author: `Random ${i}`,
        id: randomId
      });
    }
    return results;
  };
    
  onMount(async () => {
    data = await getPics(3)
  });
    

    
    
  let fakeMess2 = 0	
  const getMore2 = async (e) => {
    console.log(e.keyCode)
    if(e.keyCode == 77){
      e.preventDefault()
      // hit m
      console.log('reset data')
      data = await getPics(3);
      refreshLayout();
    }
    if(e.keyCode == 32){
      e.preventDefault()
      // press space
      data = [...data, ...await getPics(1)] //Add new data to items
      console.log('adding data', data.length);
      refreshLayout();
    }
  };
</script>

<svelte:window on:keydown={getMore2}/>
 


<div class="mx-8">
  <h1>Masonry Async Loading Demo</h1>
  <p>
    Here's a basic demo of async loading thanks to <a href="https://github.com/janzheng/svelte-masonry/issues/2">@ambrt / issue #2</a>. Images are loaded from <a href="https://picsum.photos/">picsum.photos</a>. 
    For proper async image loading, note that we bind to refreshLayout and trigger it on each image load: 
    <code>bind:refreshLayout</code> and <code>on:load=&lcub;refreshLayout&rcub;</code>.
  </p>
  <div>
    <p>Keyboard controls:</p>
    <ul>
      <li><code>Space</code> - Add one new image</li>
      <li><code>M</code> - Reset with one new image</li>
    </ul>
  </div>
  <p>
    <a href="../">Back to home</a>
  </p>

  <div class="sticky top-3">
    <button on:click={async () => {
      data = [...data, ...await getPics(1)];
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
      <div class="border-0 border-black">
        <div>
          <h3 class="mb-0">{i}</h3>
        </div>
        
        <section>
          <div>
            <img alt="image" on:load={refreshLayout} src={o.download_url} class="w-full h-auto" />
          </div>
        </section>
      </div>
    {/each}
  </Masonry>
</div>

<style>
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  p {
    line-height: 1.5;
  }

  /* Container */
  .mx-8 {
    padding: 2rem;
    margin: 0 auto;
    max-width: 1200px;
  }

  /* Sticky controls */
  .sticky {
    position: sticky;
    background: white;
    margin-bottom: 2rem;
    z-index: 10;
  }

  .top-3 {
    top: 0.75rem;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  /* Button styles */
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

  /* Image container */
  .p-3 {
    padding: 0.75rem;
  }

  /* Image styles */
  .w-full {
    width: 100%;
  }

  .h-auto {
    height: auto;
  }

  img {
    border-radius: 4px;
  }
</style>
