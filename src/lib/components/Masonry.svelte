<!-- 
  A lightweight masonry grid component for Svelte applications.
  Based on: https://css-tricks.com/a-lightweight-masonry-solution

  ⚠️ IMPORTANT: For async content (like images), you MUST bind and trigger refreshLayout:
    <Masonry bind:refreshLayout={refreshLayout}>
      <img on:load={refreshLayout} src="..." />
    </Masonry>

  Parameters:
    - stretchFirst (boolean): When true, stretches the first item across the full width
    - gridGap (string): Space between grid items (default: '0.5em')
    - padding (string): Padding around the entire grid (default: '0px')
    - colWidth (string): Column width using CSS grid values (default: 'minmax(Min(20em, 100%), 1fr)')
    - items (array): Optional array of data items - pass this if your grid content updates dynamically
    - reset (boolean): Trigger to force grid recalculation
    - refreshLayout (function): Bind to this to manually trigger layout updates

  Methods:
    - refreshLayout(): Critical for proper layout with async content
                      Must be called:
                      1. After images load (use on:load={refreshLayout})
                      2. When adding/removing items
                      3. When content dimensions change
                      4. Automatically handles window resizing

  Usage Example (with async images):
    <Masonry bind:refreshLayout={refreshLayout}>
      {#each items as item}
        <img 
          on:load={refreshLayout} 
          src={item.url} 
          alt={item.alt}
        />
      {/each}
    </Masonry>

  See demo: <a href="../">Back to Demo Page</a>
-->



<div bind:this={masonryElement} 
     class={`__grid--masonry ${stretchFirst ? '__stretch-first' : ''}`}
     style={`
      --masonry-grid-gap: ${gridGap}; 
      --masonry-padding: ${padding};
      --masonry-col-width: ${colWidth};
     `}
     >
  <slot></slot>
</div>



<script>
import { onMount, onDestroy, getContext, setContext, tick } from 'svelte'
export let stretchFirst = false,
           gridGap = '0.5em',
           padding = '0px',
           colWidth = 'minmax(Min(20em, 100%), 1fr)',
           items = [] // pass in data if it's dynamically updated
let grids = [], masonryElement


export let reset;
$: if(reset) {
  masonryElement = masonryElement
}


export const refreshLayout = async () => {
  // console.log("REFRESHING LAYOUT")
  grids.forEach(async grid => {
    /* get the post relayout number of columns */
    let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length
    
    grid.items.forEach(c => {
      let new_h = c.getBoundingClientRect().height;
      
      if(new_h !== +c.dataset.h) {
        c.dataset.h = new_h
        grid.mod++
      }
    });
    
    /* if the number of columns has changed */
    if(grid.ncol !== ncol || grid.mod) {
      /* update number of columns */ 
      grid.ncol = ncol;
      /* revert to initial positioning, no margin */
      grid.items.forEach(c => c.style.removeProperty('margin-top'))
      /* if we have more than one column */
      if(grid.ncol > 1) {
        grid.items.slice(ncol).forEach((c, i) => {
          let prev_fin = grid.items[i].getBoundingClientRect().bottom /* bottom edge of item above */, 
                curr_ini = c.getBoundingClientRect().top /* top edge of current item */;
          
          c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`
        })
      }
      
      grid.mod = 0
    }
  })
}

const calcGrid = async (_masonryArr) => {
  await tick()
  if(_masonryArr.length && getComputedStyle(_masonryArr[0]).gridTemplateRows !== 'masonry') {
    grids = _masonryArr.map(grid => {
      return {
        _el: grid, 
        gap: parseFloat(getComputedStyle(grid).gridRowGap),
        items: [...grid.childNodes].filter(c => c.nodeType === 1 && +getComputedStyle(c).gridColumnEnd !== -1), 
        ncol: 0, 
        mod: 0
      }
    })
    refreshLayout() /* initial load */
  }
}




let _window = null
onMount(() => {
  if(window) {
    _window = window
    _window?.addEventListener('resize', refreshLayout, false) /* on resize */
  }
})
onDestroy(() => {
  if(_window && window) {
    _window?.removeEventListener('resize', refreshLayout, false) /* on resize */
  }
})
  
  
$: if(masonryElement) { 
  calcGrid([masonryElement])
}
  
$: if(items) { // update if items are changed
  masonryElement = masonryElement // refresh masonryElement
}
</script>


<style>
  :global(.__grid--masonry) {
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--masonry-col-width));
    /* grid-template-rows: masonry; */
    justify-content: center;
    grid-gap: var(--masonry-grid-gap);
    padding: var(--masonry-padding);
    
  }
  :global(.__grid--masonry > *) { 
    align-self: start 
  }
  :global(.__grid--masonry.__stretch-first > *:first-child) { 
    grid-column: 1/ -1;
  }
</style>