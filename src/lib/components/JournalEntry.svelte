<script lang="ts">
 import Card from "./Card.svelte";
 export let entry:entry;
</script>

<Card>
  <h4>{entry.dateString}</h4>
  <div><p>{entry.body}</p></div>
  {#if entry.imageID}
  <div>
    <img src="./images/graphs/{entry.imageID}.png" alt={('image with id' + entry.imageID)}/>
  </div>
  {/if}
</Card>


<style>


div {
   word-wrap: break-word;
   width: flex;
}
</style>
