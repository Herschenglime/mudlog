<script lang="ts">
 export let entry:entry;
</script>

<div class="card">
  <h4>{entry.dateString}</h4>
  <div><p style:white-space=pre-wrap>{entry.body}</p></div>
  {#if entry.imageID}
  <div>
    <img src="./images/graphs/{entry.imageID}.png" alt={('image with id' + entry.imageID)}/>
  </div>
  {/if}
</div>


<style>
  .card {
    border-radius: 10px;
    padding: 5px;
    flex: 1;
    transition: transform 0.3s ease;
    margin: 5%;
    background-color: #219edc	;
    /* margin: 5px; */
  }
div {
   word-wrap: break-word;
   width: flex;
}

img{
  /* max-width: fit-content; */
  max-width: 100%;
  height: auto;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;

  
}
</style>
