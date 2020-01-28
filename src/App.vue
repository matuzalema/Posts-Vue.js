<template>
  <div id="app">
    <app-title class="m-5" />
    <new-post-form
      class="m-5"
      @created="reloadPosts"
    />
    <posts
      ref="posts"
      class="m-5"
    />
  </div>
</template>

<script>
import AppTitle from "./components/AppTitle.vue"
import Posts from "./components/Posts";
import NewPostForm from "./components/NewPostForm";

export default {
  name: "App",
  components: {
    NewPostForm,
    Posts,
    AppTitle
  },
  methods: {
    reloadPosts() {
      this.$refs.posts.loadPosts();
    }
  },
}
</script>

<style scoped>

</style>
