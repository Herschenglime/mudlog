<script lang="ts">

  import { get } from 'svelte/store';

  import Card from '$lib/components/Card.svelte';
  import JournalEntry from '$lib/components/JournalEntry.svelte';
  import EntryForm from '$lib/components/EntryForm.svelte';

  import { InlineCalendar, themes as calendarThemes } from 'svelte-calendar';
  let selected: Date = new Date(new Date().toDateString());
  $: dateString = selected.toDateString().substring(4)

  let entry = { title: '', body: '', date: selected, dateString: dateString };
  $: entry.dateString = dateString;

  import { dailyLogs } from '$lib/stores';
  import { theme as siteTheme } from '$lib/stores';

  console.log(get(siteTheme));
  let calendarTheme = get(siteTheme) === 'dark' ? calendarThemes.dark : calendarThemes.light;

  let editing = false;

  function createEntry() {
    $dailyLogs = $dailyLogs.set(dateString, entry);
    editing = false;
  }

  //getting in the example data
  import entryValues from '$lib/data/entries.json';
  entryValues.forEach((mockEntry, index) => {
    $dailyLogs.set(mockEntry.title, {dateString: mockEntry.title, body: mockEntry.body, imageID:(index+1)})
    console.log(mockEntry)
    console.log($dailyLogs.get(mockEntry.title))
  })
 $dailyLogs = $dailyLogs;

</script>

<body>
  <h1 style:text-align="center">Calendar View</h1>

  <!-- <p>Selected: {selected}</p> -->

  {#if $dailyLogs.has(dateString)}
    <JournalEntry entry={$dailyLogs.get(dateString)} />
  {:else}
    <Card>
      {#if !editing}
        <h2 class="center">No entry yet for this day</h2>
        <div class="center">
          <button class="buttons" on:click={() => (editing = true)}> + </button>
        </div>
      {:else}
        <JournalEntry {entry} />
        <EntryForm bind:entry on:submit={createEntry} />

        <button on:click={() => (editing = false)}>Cancel Editing</button>
      {/if}
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
  .center {
    text-align: center;
    font-family: 'Proxima Nova';
  }
  .buttons {
    display: inline-block;
    opacity: 100;
    background-color: transparent;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 20px;
    text-decoration: none;
    text-align: center;
    animation: pulse 1s infinite;
  }

  .buttons:hover {
    background-color: #005f79;
  }
</style>
