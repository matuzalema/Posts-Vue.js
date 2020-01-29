<template>
  <form @submit.prevent="submit">
    <h2>Dodaj nowy post</h2>
    <b-form-group
      label="Tytuł"
      label-for="title"
    >
      <b-input
        id="title"
        v-model="title"
      />
    </b-form-group>
    <b-form-group
      label="Treść"
      label-for="body"
    >
      <b-textarea
        id="body"
        v-model="body"
      />
    </b-form-group>
    <b-alert
      :show="!!error"
      variant="danger"
    >
      Wystąpił błąd: {{ error }}
    </b-alert>
    <b-btn
      type="submit"
      variant="primary"
      class="d-block ml-auto"
    >
      Wyślij
    </b-btn>
  </form>
</template>

<script>
  import axios from "axios";

  export default {
    name: "NewPostForm",
    data() {
      return {
        title: "",
        body: "",
        error: null,
      };
    },
    computed: {
      url() {
        return "/posts";
      }
    },
    methods: {
      async submit() {
        const data = {
          title: this.title,
          body: this.body,
        };
        try {
          const response = await axios.post(url, data);
          console.log(response);
          this.$emit("created");
        } catch(error) {
          console.error(error);
          this.error = error;
        }
      },
    },
  }
</script>

<style scoped>
.btn-clear-form {
  margin: 0 15px;
}
</style>