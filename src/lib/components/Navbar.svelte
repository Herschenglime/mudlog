<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<nav>
  <Card background="var(--color-light)"><strong>müdlog</strong></Card>
  <div>
      <Card>test</Card>
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
