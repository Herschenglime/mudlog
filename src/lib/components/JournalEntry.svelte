<script lang="ts">
 import Card from "./Card.svelte";
 export let journalEntry:journalEntry;
</script>

<Card>
  <h2>{journalEntry.title}</h2>
  <h3>{journalEntry.date}</h3>
  <p>{journalEntry.body}</p>
</Card>
