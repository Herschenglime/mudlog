<script lang="ts">
  import { InlineCalendar, themes } from 'svelte-calendar';
  const { dark: theme } = themes;
</script>

<body>
  <h1 style:text-align="center">Calendar View</h1>
  <div class="calendar">
    <div class="calendar-inner">
      <InlineCalendar theme={themes.dark} />
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
