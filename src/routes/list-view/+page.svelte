<script lang="ts">
  import { get } from 'svelte/store';
  import { dailyLogs } from '$lib/stores';
  import Card from '$lib/components/Card.svelte';

  const logs = $dailyLogs;

  logs.set('tuesday', 'tuesday sucked :(');
</script>

<h1>List View</h1>

{#each [...logs] as [day, entry]}
  <Card>
    <h2>{day}</h2>
    <p>{entry}</p>
  </Card>
{/each}
