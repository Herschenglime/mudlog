  <script>
    import { createForm } from "svelte-forms-lib";

    const { form, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: "",
        name: ""
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
      name="Title"
      on:change={handleChange}
      bind:value={$form.title}/>

    <label for="name">name</label>
    <input
      id="name"
      name="name"
      on:change={handleChange}
      bind:value={$form.name}
    />

    <button type="submit">Submit</button>
  </form>
