<script lang="ts">
  import { get } from 'svelte/store';

  import Card from '$lib/components/Card.svelte';
  import JournalEntry from '$lib/components/JournalEntry.svelte';
  import EntryForm from '$lib/components/EntryForm.svelte';

  import { InlineCalendar, themes as calendarThemes } from 'svelte-calendar';
  let selected: Date = new Date(new Date().toDateString());
  $: dateString = selected.toDateString();

<<<<<<< HEAD
=======
  let entry = { title: '', body: '', date: selected, dateString: dateString };
  $: entry.dateString = dateString;

>>>>>>> main
  import { dailyLogs } from '$lib/stores';
  import { theme as siteTheme } from '$lib/stores';

  console.log(get(siteTheme));
  let calendarTheme = get(siteTheme) === 'dark' ? calendarThemes.dark : calendarThemes.light;

  let editing = false;

<<<<<<< HEAD
  function selectedDebug() {
    console.log('debugging selected');
    console.log($dailyLogs);
    console.log(selected);
    console.log($dailyLogs.get(selected));
=======
  function createEntry() {
    $dailyLogs = $dailyLogs.set(dateString, entry);
    editing = false;
>>>>>>> main
  }
</script>

<body>
  <h1 style:text-align="center">Calendar View</h1>

  <p>Selected: {selected}</p>
<<<<<<< HEAD
  {#if $dailyLogs.has(selected.getDate())}
    <JournalEntry journalEntry={$dailyLogs.get(selected.getDate())} />
=======
  {#if $dailyLogs.has(dateString)}
    <JournalEntry entry={$dailyLogs.get(dateString)} />
>>>>>>> main
  {:else}
    <Card>
      {#if !editing}
        <h2>No entry yet for this day</h2>
        <button on:click={() => (editing = true)}> Create Entry </button>
      {:else}
<<<<<<< HEAD

        <EntryForm/>
        holy smoly you're editing
=======
        <JournalEntry {entry}/>
        <EntryForm bind:entry on:submit={createEntry} />
>>>>>>> main

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
</style>
