<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import { createForm } from 'svelte-forms-lib';
  export let entry:entry;

  $: entry.title = $form.title;
  $: entry.body = $form.body;

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      title: '',
      body: ''
    },
    onSubmit: () => {
      dispatch('submit');
    }
  });
</script>

<form on:submit={handleSubmit}>
  <label for="title">Title</label>
  <input id="title" name="title" on:change={handleChange} bind:value={$form.title} />

  <label for="body">Body</label>
  <textarea id="body" name="body" on:change={handleChange} bind:value={$form.body} />

  <button type="submit">Submit</button>
</form>
