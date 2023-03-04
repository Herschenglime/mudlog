<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  export let link: string, background: string = 'var(--color-lighter)';
</script>

<Card {background} highlightOnHover={true}>
  <a href={link}
  style:text-decoration="none"
  style:color="inherit">
    <slot />
  </a>
</Card>

<style>
</style>
