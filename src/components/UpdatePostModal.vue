<template>
  <b-modal
    :visible="visible"
    title="Edytuj post"
    title-tag="h2"
    @hide="closeModal"
  >
    <form>
      <b-form-group
        label="Tytuł"
        label-for="title"
      >
        <b-textarea
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
          rows="6"
        />
      </b-form-group>
    </form>
    <template v-slot:modal-footer>
      <b-btn
        @click="closeModal"
      >
        Anuluj
      </b-btn>
      <b-btn
        variant="primary"
        class="d-block ml-auto"
        @click.prevent="submit"
      >
        Wyślij
      </b-btn>
    </template>
  </b-modal>
</template>

<script>
  import axios from "axios";

  export default {
    name: "UpdatePostModal",
    props: {
      visible: {type: Boolean, default: false},
      post: {type: Object, default: null},
    },
    data() {
      return {
        title: this.post ? this.post.title : "",
        body: this.post ? this.post.body : "",
      };
    },
    watch: {
      post(val) {
        if (val) {
          this.title = val.title;
          this.body = val.body;
        }
      },
    },
    methods: {
      async submit() {
        const id = this.post ? this.post.id : null;
        const data = {
          title: this.title,
          body: this.body,
        };
        const response = await axios.patch(`/posts/${id}`, data);
        console.log(response);
        this.$emit("updated");
        this.closeModal();
      },
      closeModal() {
        this.$emit("close");
      },
    },
  }
</script>

<style scoped>
  h5 .modal-title {
    font-size: 136px;
  }
</style>