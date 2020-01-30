<template>
  <form @submit.prevent="submit">
    <h2>Dodaj nowy post</h2>
    <b-row>
      <b-col lg="6">
        <b-form-group
          label="Tytuł"
          label-for="title"
        >
          <b-input
            id="title"
            v-model="title"
          />
        </b-form-group>
      </b-col>
      <b-col lg="6">
        <b-form-group
          label="Treść"
          label-for="body"
        >
          <b-textarea
            id="body"
            v-model="body"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-alert
      :show="!!error"
      variant="danger"
    >
      Wystąpił błąd: {{ error }}
    </b-alert>
    <b-row align-h="end">
      <b-btn
        type="button"
        variant="warning"
        @click="cleanForm"
      >
        Wyczyść
      </b-btn>
      <b-btn
        type="submit"
        variant="primary"
        class="btn-send-form"
      >
        Wyślij
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
      async submit() {
        const data = {
          title: this.title,
          body: this.body,
        };
        try {
          const response = await axios.post(this.url, data);
          console.log(response);
          this.$emit("created");
          this.title="";
          this.body ="";
        } catch(error) {
          console.error(error);
          this.error = error;
        }
      },
      cleanForm(){
        this.title = ""
        this.body = ""
      },
    },
  }
</script>

<style scoped>
.btn-send-form {
  margin: 0 15px;
}
</style>