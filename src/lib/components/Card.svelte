<script lang="ts">
  export let highlightOnHover = false;
  let hovering = false;
  let held = false;
  let mousedown = false;
  export let background = 'blue';

  function enter() {
    hovering = true;
  }

  function leave() {
    hovering = false;
  }
</script>

<div
  class="card"
  style="--backgroundColor: {background}"
  on:mouseenter={enter}
  on:mouseleave={leave}
  on:mousedown={() => (mousedown = true)}
  on:mouseup={() => (mousedown = false)}
  class:hovering={highlightOnHover && hovering}
  class:mousedown={hovering && mousedown}
>
  <slot />
</div>

<style>
  .card {
    border-radius: 10px;
    padding: 5px;
    flex: 1;
    display: inline-flex;
    background: var(--background-color);
    transition: transform 0.3s ease;
    /* margin: 5px; */
  }
  .hovering {
    background: var(--color-lightest);
  }

  .mousedown {
    background: aqua;
  }
</style>
