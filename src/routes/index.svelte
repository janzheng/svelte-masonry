<!-- 

  Masonry demo page

 -->


<template>

  <div class="_section-article _margin-center">
    <h1>Masonry Demo</h1>
    <p>Here's a pretty basic demo on how the Masonry code works. This is an implementation of Masonry based on this excellent article by Ana Tudor (@anatudor) on CSS Tricks: <a href="https://css-tricks.com/a-lightweight-masonry-solution">https://css-tricks.com/a-lightweight-masonry-solution</a>
    </p>
  </div>


  <Masonry stretchFirst={true} gridGap={'0.5rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'}>
    {#each data as o}
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

</template>




<script>

// https://css-tricks.com/a-lightweight-masonry-solution
import { onMount, onDestroy, getContext, setContext } from 'svelte'
import Masonry from '../../Masonry.svelte'


// useMasonry(document, getComputedStyle, onMount, onDestroy)

let data = [
  {
      name: 'Gingerbread', 
      date: '21st of July 2020', 
      tags: ['ginger', 'cloves', 'nutmeg', 'cinnamon', 'honey'], 
      text: 'Tiramisu biscuit liquorice dragée tootsie roll. Marzipan soufflé donut bonbon powder. Sugar plum chocolate bar donut cake marzipan biscuit liquorice liquorice. Muffin brownie chocolate cake biscuit. Soufflé cookie pastry jelly beans pudding. Oat cake cupcake cheesecake tootsie roll. Croissant wafer caramels. Lollipop macaroon gingerbread pudding.'
  }, 
  {
      name: 'Macaron', 
      date: '4th of June 2020', 
      tags: ['egg whites', 'sugar', 'almond', 'cream'], 
      text: 'Tart jelly. Marshmallow brownie icing tart. Sugar plum brownie sugar plum tootsie roll liquorice lemon drops croissant. Dragée pudding chocolate jelly-o brownie.'
  }, 
  {
      name: 'Lava cake', 
      date: '23rd of May 2020', 
      tags: ['chocolate', 'cake', 'gooey', 'moist'], 
      text: 'Cheesecake marzipan chocolate bar lollipop. Sweet roll oat cake powder brownie chupa chups gingerbread wafer wafer. Tiramisu cheesecake fruitcake cake. Jelly beans dessert fruitcake carrot cake ice cream.'
  }, 
  {
      name: 'Salted caramel truffles', 
      date: '2nd of May 2020', 
      tags: ['salted caramel', 'truffle'], 
      text: 'Fruitcake jelly chocolate cake croissant donut pastry cookie jelly beans gingerbread. Candy canes macaroon dragée jelly beans tootsie roll icing jelly fruitcake tiramisu. Lemon drops wafer jujubes. Tootsie roll caramels chocolate cake sugar plum cookie biscuit tootsie roll apple pie cake. Marzipan pudding cake. Carrot cake ice cream chocolate bar toffee apple pie toffee.'
  }, 
  {
      name: 'Lemon ice cream', 
      date: '8th of April 2020', 
      tags: ['ice cream', 'lemon', 'cooling'], 
      text: 'Wafer lollipop sugar plum. Candy chupa chups sweet roll. Cookie dessert marshmallow apple pie brownie tiramisu cookie candy. Jujubes bonbon danish cotton candy bonbon croissant cheesecake jelly-o icing. Carrot cake marshmallow jelly candy. Carrot cake pie lollipop sweet roll sweet roll ice cream caramels cheesecake chupa chups. Sugar plum lemon drops tiramisu pie. Chocolate gummies jelly-o. Fruitcake halvah dessert marshmallow jelly-o cake.'
  }, 
  {
      name: 'Brownie', 
      date: '20th of March 2020', 
      tags: ['pecan', 'chocolate', 'caramel', 'moist'], 
      text: 'Liquorice muffin dessert toffee tootsie roll tiramisu. Lollipop gummi bears bonbon. Gummies gummi bears brownie muffin gingerbread. Cheesecake chocolate bar brownie. Tiramisu wafer cotton candy bonbon. Soufflé wafer jelly dragée candy cake gummi bears gingerbread dessert. Gummies cupcake lollipop soufflé biscuit icing sweet. Tart cake chupa chups gingerbread cake. Powder bonbon lollipop lollipop marzipan fruitcake.'
  }, 
  {
      name: 'Apple pie', 
      date: '17th of February 2020', 
      tags: ['pie', 'apple', 'moist'], 
      text: 'Lollipop cheesecake sugar plum macaroon fruitcake. Powder muffin jelly beans carrot cake sweet roll gingerbread powder. Brownie brownie carrot cake gummi bears cotton candy cookie candy topping topping.'
  }
]




</script>


