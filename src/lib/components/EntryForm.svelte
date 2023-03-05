  <script lang="ts">
    import { createForm } from "svelte-forms-lib";
    export let entry:entry;

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: "",
        body: ""
      },
      onSubmit: values => {
       entry.title = values.title;
       entry.body = values.body;
      }
    });

   $: entry = {title: $form.title, body: $form.body}
  </script>

  <form on:submit={handleSubmit}>
    <label for="title">Title</label>
    <input
      id="title"
      name="title"
      on:change={handleChange}
      bind:value={$form.title}/>

    <label for="body">Body</label>
    <textarea
      id="body"
      name="body"
      on:change={handleChange}
      bind:value={$form.body}
    />

    <button type="submit">Submit</button>
  </form>
