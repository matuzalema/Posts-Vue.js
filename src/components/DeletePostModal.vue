<template>
  <b-modal
    :visible="visible"
    title="Usuwanie"
    title-tag="h2"
    @hide="closeModal"
  >
    <p class="my-4">
      Czy na pewno chcesz usunąć post?
    </p>
    <template v-slot:modal-footer>
      <b-btn
        @click="closeModal"
      >
        Anuluj
      </b-btn>
      <b-btn
        variant="warning"
        class="d-block ml-auto"
        @click="DELETE"
      >
        Usuń post
      </b-btn>
    </template>
  </b-modal>
</template>

<script>
  import axios from "axios";

  export default {
    name: "DeletePostModal",
    props: {
      visible: {type: Boolean, default: false},
    },
    data() {
      return {
        posts: this.posts,
      };
    },
    methods: {
      async DELETE() {
        // const postId = this.post ? this.post.id : null;
        // const resp = await axios.patch(`/posts/${postId}`, data);
        // console.log(resp);
        this.$emit("delete");
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