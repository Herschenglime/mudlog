<script lang="ts">
 export let background = "var(--color-lighter)";
</script>

<!-- style:display lets it be passed in -->
<div class="card" style:background>
  <slot />
</div>

<style>
  .card {
    border-radius: 10px;
    background: var(--color-lighter);
    padding: 5px;
	  display: inline-flex;
    /* margin: 5px; */
  }
</style>
