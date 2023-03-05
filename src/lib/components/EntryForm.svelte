<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import { createForm } from 'svelte-forms-lib';
  export let entry:entry;

 // $: entry.title = $form.title;
  $: entry.body = $form.body;

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      // title: '',
      body: ''
    },
    onSubmit: () => {
      dispatch('submit');
    }
  });
</script>

<!-- <form on:submit={handleSubmit}>
  <label for="title">Title</label>
  <input id="title" name="title" on:change={handleChange} bind:value={$form.title} />

  <label for="body">Body</label>
  <textarea id="body" name="body" on:change={handleChange} bind:value={$form.body} />

  <button type="submit">Submit</button>
</form> -->

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  label {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  input,
  textarea {
    border: 2px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 95%;
  }

  textarea {
    height: 10rem;
  }

  button[type="submit"] {
    background-color: #008CBA;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button[type="submit"]:hover {
    background-color: #005f79;
  }
</style>

<form on:submit={handleSubmit}>
  <!-- <label for="title">Title</label>
       <input id="title" name="title" on:change={handleChange} bind:value={$form.title} />
  -->
  <label for="body">Body</label>
  <textarea id="body" name="body" on:change={handleChange} bind:value={$form.body} />

  <button type="submit">Submit</button>
</form>

