<script lang="ts">
    import CardGroup from "./CardGroup.svelte";


  export let background = 'var(--color-lighter)';
  export let highlightOnHover = false;
  let hovering = false;


 function enter() {
   hovering = true
 }

 function leave() {
   hovering = false
 }

</script>

<div
  class="card"
  style:background={highlightOnHover ?
                   (hovering ? "blue" : background) :
                   background}
  on:mouseenter={enter}
  on:mouseleave={leave}
  class:hovering
>
  <slot />
</div>

<style>
  .card {
    border-radius: 10px;
    padding: 5px;
    flex: 1;
    display: inline-flex;
    /* margin: 5px; */
  }

</style>
