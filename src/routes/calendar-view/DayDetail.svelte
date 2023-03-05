<script>
    export let day;
  
    function formatDate(date) {
      // format the date in a desired way
    }
  </script>
  
  <div>
    <h2>{formatDate(day.date)}</h2>
    <ul>
      {#each day.tasks as task}
        <li>{task}</li>
      {/each}
    </ul>
  </div>
  