<h1>Calendar View</h1>

<a href="/about">Check out this cool ass about page</a>

<script>
  import { InlineCalendar, themes } from 'svelte-calendar';
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  const onDaySelect = (date) => {
    setSelectedDate(date);
  };
  
  /**
     * @type {{ toLocaleDateString: () => void; }}
     */
  let selectedDate;
  const setSelectedDate = (/** @type {{ toLocaleDateString: () => void; } | null} */ date) => {
    selectedDate = date;
  };
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .calendar {
    width: 100vw;
    height: 100vh;
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
  
  .day-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .day {
    width: 80%;
    height: 80%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .day-expanded {
    transform: scale(2);
    background-color: #f1f1f1;
  }
  
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    color: #777;
    cursor: pointer;
  }
</style>

<div class="calendar">
  <div class="calendar-inner">
    <InlineCalendar
      theme={themes.dark}
      on:onDaySelect={onDaySelect}
      monthNavigator  
      yearNavigator
    />
  </div>
  
  {#if selectedDate}
    <div class="day-container" on:click={() => setSelectedDate(null)} on:keydown>
      <div class="day selectedDate && 'day-expanded'">
        <span>{selectedDate.toLocaleDateString()}</span>
        <textarea rows="10"></textarea>
        <button class="close-button" on:click={() => setSelectedDate(null)}>X</button>
      </div>
    </div>
  {/if}
</div>  
