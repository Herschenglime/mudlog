<script lang="ts">
 import Card from "./Card.svelte";
 export let entry:entry;
</script>

<Card>
  <h2>{entry.title}</h2>
  <h3>{entry.date}</h3>
  <p>{entry.body}</p>
</Card>
