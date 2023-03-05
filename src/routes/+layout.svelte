<script lang="ts">
 import { theme } from '$lib/stores'
 import Navbar from '$lib/components/Navbar.svelte'
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Navbar></Navbar>

<slot />

<style>
 :root {
   /* https://www.w3schools.com/css/css_font.asp */
   font-family: "Proxima Nova"
 }
</style>
