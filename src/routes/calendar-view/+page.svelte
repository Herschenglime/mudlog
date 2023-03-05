<script lang="ts">
  import { get } from 'svelte/store';

  import Card from '$lib/components/Card.svelte';
  import JournalEntry from '$lib/components/JournalEntry.svelte';
  import EntryForm from '$lib/components/EntryForm.svelte';

  import { InlineCalendar, themes as calendarThemes } from 'svelte-calendar';
  let selected: Date = new Date(new Date().toDateString());

  let entry:entry = {title:"", body:"", date:selected}

  interface entry {title: string, body: string, date:Date}

  import { dailyLogs } from '$lib/stores';
  import { theme as siteTheme } from '$lib/stores';

  console.log(get(siteTheme));
  $: calendarTheme = get(siteTheme) === 'dark' ? calendarThemes.dark : calendarThemes.light;

  // $dailyLogs.set(new Date(new Date().toDateString()),
  //   {title: "initial date", body: "test"}
  // )

  let editing = false;
  function createEntry() {
    $dailyLogs = $dailyLogs.set(selected.getDate(), {
      title: 'added entry',
      body: 'hulabaloo',
      date: selected
    });
  }

</script>

<body>
  <h1 style:text-align="center">Calendar View</h1>

  <p>Selected: {selected}</p>
  {#if $dailyLogs.has(selected.getDate())}
    <JournalEntry entry={$dailyLogs.get(selected.getDate())} />
  {:else}
    <Card>
      {#if !editing}
      <h2>No entry yet for this day</h2>
        <button on:click={() => (editing = true)}> Create Entry </button>
      {:else}
        <JournalEntry bind:entry/>
        <EntryForm bind:entry/>
        holy smoly you're editing

        <button on:click={() => (editing = false)}> stop that</button>
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
