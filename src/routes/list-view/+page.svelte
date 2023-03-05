<script lang="ts">
  import { get } from 'svelte/store';
  import Card from '$lib/components/Card.svelte';

  import { dailyLogs } from '$lib/stores';
  const logs = $dailyLogs;

</script>

<h1>List View</h1>
  daily logs: {[...$dailyLogs]}

{#each [...logs] as [day, entry]}
  <Card>
    <h2>{entry.title}</h2>
    <h3>{day}</h3>
    <p>{entry.body}</p>
  </Card>
{/each}
