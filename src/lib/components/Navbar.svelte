<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
  import LinkCard from './LinkCard.svelte';
</script>

<nav>
  <div>
    <LinkCard link="/" highlightOnHover={false}>
      <strong>müdlog</strong>
    </LinkCard>
  </div>
  <div>
    <LinkCard link="/about">About</LinkCard>
    <LinkCard link="/calendar-view">Calendar</LinkCard>
    <LinkCard link="/list-view">Entry List</LinkCard>

    <Card>
      <div style="display: inline">
        Theme Picker: <ThemeSwitch />
      </div>
    </Card>
  </div>
</nav>

<style type="text/css" media="screen">
  nav {
    border-radius: 10px;
    border-style: solid;
    border-width: thin;
    background: var(--color-light);
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
</style>
