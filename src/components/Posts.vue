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
          <th>Usuń</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="post in visiblePosts"
          :key="post.id"
          class="row-table"
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
          <td>
            <b-btn
              variant="warning"
              @click="openDeletePostModal(post)"
            >
              <i class="fas fa-trash-alt" />
            </b-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <b-table 
      stacked 
      :items="visiblePosts" 
      class="table-min hide"
    />
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
    <delete-post-modal
      :visible="!!deletePost"
      :posts="posts"
      @close="deletePost = null"
      @delete="onDeletePost(deletePost)"
    />
  </div>
</template>

<script>
  import axios from "axios";
  import UpdatePostModal from "./UpdatePostModal";
  import DeletePostModal from "./DeletePostModal";

  export default {
    name: "Posts",
    components: {UpdatePostModal, DeletePostModal},
    data() {
      return {
        posts: [],
        page: 1,
        selectedPost: null,
        deletePost: null,
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
      openDeletePostModal(post){
         this.deletePost = post;
      },
      onDeletePost(deletePost){
        this.posts = this.posts.filter(item => item !== deletePost);
      },
    },
  }
</script>

<style scoped>
.table.b-table.b-table-stacked{
  display: none;
}
.table {
  min-width: 500px;
}
.row-table {
  transition: .5s;
}
.row-table:hover {
  background-color: rgb(236, 236, 236);
}

@media (max-width: 576px) {
  .table.b-table.b-table-stacked{
  display: block;
  min-width: 100%;
  }
  .table {
    display: none;
  }
}
</style>