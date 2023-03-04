<script lang="ts">
  import { get } from 'svelte/store';
  import { dailyLogs } from '$lib/stores';
  import Card from '$lib/components/Card.svelte';

  const logs = $dailyLogs;

 logs.set(new Date(), {title: "slay day", body: "today was so slay"})
</script>

<h1>List View</h1>

{#each [...logs] as [day, entry]}
  <Card>
    <h2>{entry.title}</h2>
    <h3>{day}</h3>
    <p>{entry.body}</p>
  </Card>
{/each}
