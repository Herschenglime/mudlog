<script lang="ts">
 import Card from "./Card.svelte";
 export let entry:entry;
</script>

<Card>
  <h4>{entry.dateString}</h4>
  <h2>{entry.title}</h2>
  <p>{entry.body}</p>
</Card>
