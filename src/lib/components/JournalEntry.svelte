<script lang="ts">
 import Card from "./Card.svelte";
 export let entry:entry;
</script>

<Card>
  <h4>{entry.dateString}</h4>
  <!-- <h2>{entry.title}</h2> -->
  <div><p>{entry.body}</p></div>
</Card>


<style>


div {
   word-wrap: break-word;
   width: flex;
}
</style>
