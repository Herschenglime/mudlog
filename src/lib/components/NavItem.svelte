<script lang="ts">
  export let link = '/';
  export let highlightOnHover = true;
  let hovering = false;
  let held = false;
  let mousedown = false;

  function enter() {
    hovering = true;
    console.log("hover started")
  }

  function leave() {
    hovering = false;
  }
</script>

<div
  class="nav-item"
  on:mouseenter={enter}
  on:mouseleave={leave}
  on:mousedown="{() => (mousedown = true)}"
  on:mouseup="{() => (mousedown = false)}"
  class:hovering="{highlightOnHover && hovering}"
  class:mousedown="{hovering && mousedown}"
>
  <a href={link} style:text-decoration="none" style:color="inherit">
    <slot />
  </a>
</div>

<style>
  .nav-item {
    border-radius: 10px;
    padding: 5px;
    flex: 1;
    display: inline-flex;
    transition: transform 0.3s ease;
    /* margin: 5px; */
  }
  .hovering {
    background: black;
  }

  .mousedown {
    background: aqua;
  }
</style>
