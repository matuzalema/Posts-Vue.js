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
    <b-row align-h="end">
      <b-btn
        type="submit"
        variant="primary"
        class="btn-send-form"
      >
        Wyślij
      </b-btn>
      <b-btn
        type="button"
        variant="warning"
        class="btn-clear-form"
        @click="cleanForm"
      >
        Wyczyść
      </b-btn>
    </b-row>
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
      cleanForm(){
        this.title = ""
        this.body = ""
      },
      async submit() {
        this.data.push({ 
          title: this.title,
          body: this.body,
        });
        try {
          const response = await axios.post("../../db.json", data);
          console.log("ddd");
          
          // const response = await axios.post("http://localhost:3001", data);
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