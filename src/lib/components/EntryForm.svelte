  <script>
    import { createForm } from "svelte-forms-lib";

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: "",
        body: ""
      },
      onSubmit: values => {
       alert(JSON.stringify(values));
      }
    });
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
