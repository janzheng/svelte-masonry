<script>
  import Masonry from 'svelte-masonry';
  import { foods as data } from './foods.js';

  let itemCount = 2;
  let refreshLayout;

  const addItem = () => {
    if (itemCount < data.length) {
      itemCount += 1;
    }
  };

  const resetItems = () => {
    itemCount = 2;
  };
</script>

<main>
	<h1>Masonry Test</h1>
  
	<div class="controls">
		<button on:click={addItem}>Add Item</button>
		<button on:click={resetItems}>Reset</button>
		<p>Showing {itemCount} of {data.length} items</p>
	</div>

	<Masonry
		items={data.slice(0,itemCount)}
		bind:refreshLayout={refreshLayout}
	>
		{#each data.slice(0,itemCount) as item}
			<div class="masonry-item">
				<header>
					<h3>{item.name}</h3>
				</header>
				<section>
					<p>{item.text}</p>
				</section>
			</div>
		{/each}
	</Masonry>
</main>

<style>
	main {
		padding: 2rem;
		margin: 0 auto;
		max-width: 1200px;
	}

	.controls {
		position: sticky;
		top: 1rem;
		background: white;
		margin-bottom: 2rem;
		z-index: 10;
	}

	.masonry-item {
		padding: 1rem;
		border: 1px solid #d1d5db;
		background: white;
		border-radius: 4px;
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

	h3 {
		margin: 0 0 1rem 0;
	}
</style>