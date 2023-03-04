<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  export let highlightOnHover = true;
  export let link: string, background: string = 'var(--color-lighter)';
</script>

<div style:background>
  <a href={link}
  style:text-decoration="none"
  style:color="inherit">
    <slot />
  </a>
</div>

<style>
</style>
