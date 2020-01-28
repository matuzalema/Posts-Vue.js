<template>
  <div>
    <h2>Lista postów</h2>
    <table class="table table-bordered ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tytuł</th>
          <th>Treść</th>
          <th>Edycja</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="post in visiblePosts"
          :key="post.id"
        >
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <b-btn
              variant="primary"
              @click="openUpdatePostModal(post)"
            >
              <i class="fas fa-pencil-alt" />
            </b-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <b-pagination
      v-model="page"
      :total-rows="total"
      :per-page="perPage"
      :disabled="total === 0"
      align="center"
      class="my-2"
    />
    <update-post-modal
      :visible="!!selectedPost"
      :post="selectedPost"
      @close="selectedPost = null"
      @updated="loadPosts"
    />
  </div>
</template>

<script>
  import axios from "axios";
  import UpdatePostModal from "./UpdatePostModal";

  export default {
    name: "Posts",
    components: {UpdatePostModal},
    data() {
      return {
        posts: [],
        page: 1,
        selectedPost: null,
      };
    },
    computed: {
      perPage() {
        return 3;
      },
      total() {
        return this.posts.length;
      },
      visiblePosts() {
        const end = this.page * this.perPage;
        const start = end - this.perPage;
        return this.posts.slice(start, end);
      },
    },
    mounted() {
      this.loadPosts();
    },
    methods: {
      async loadPosts() {
        const {data} = await axios.get("/posts");
        this.posts = data;
      },
      openUpdatePostModal(post) {
        this.selectedPost = post;
      },
    },
  }
</script>

<style scoped>

</style>