<script lang="ts">
 import JournalEntry from '$lib/components/JournalEntry.svelte';

  import { dailyLogs } from '$lib/stores';
  const logs = $dailyLogs;

</script>

<h1>List View</h1>

{#each [...logs] as [day, entry]}
  <JournalEntry {entry}/>
{/each}
