<script lang="ts">
  export let background = "var(--color-light)";
</script>

<div class="card" style:background>
  <slot />
</div>

<style>
  .card {
    border-radius: 10px;
    padding: 5px;
    flex: 1;
    transition: transform 0.3s ease;
    margin: 5%;
    /* margin: 5px; */
  }
</style>
