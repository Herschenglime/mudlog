<script lang="ts">
  import { get } from 'svelte/store';
  import Card from '$lib/components/Card.svelte';
  import JournalEntry from '$lib/components/JournalEntry.svelte';

  import { InlineCalendar, themes as calendarThemes } from 'svelte-calendar';
  let selected: Date;

  import { dailyLogs } from '$lib/stores';
  import { theme as siteTheme } from '$lib/stores';

  console.log(get(siteTheme));
  let calendarTheme = get(siteTheme) === 'dark' ? calendarThemes.dark : calendarThemes.light;

  // $dailyLogs.set(new Date(new Date().toDateString()),
  //   {title: "initial date", body: "test"}
  // )

  function createEntry() {
    $dailyLogs = $dailyLogs.set(selected, { title: 'added entry', body: 'hulabaloo', date:selected});
  }
</script>

<body>
  <h1 style:text-align="center">Calendar View</h1>
  daily logs: {[...$dailyLogs]}

  <p>Selected: {selected}</p>

  {#if $dailyLogs.has(selected)}
    <JournalEntry journalEntry={$dailyLogs.get(selected)}/>
  {:else}
    <Card>
      <h2>No entry yet for this day</h2>
      <button on:click={createEntry}> Create Entry </button>
    </Card>
  {/if}

  <div class="calendar">
    <div class="calendar-inner">
      <InlineCalendar theme={calendarTheme} bind:selected />
    </div>
  </div>
</body>

<style>
  /* :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    } */
  .calendar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calendar-inner {
    max-width: 800px;
    max-height: 800px;
    background-color: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
