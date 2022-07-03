<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/product/${post.id}`">{{
          post.product_nama
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { HTTP } from '../http-common';
export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  async created() {
    try {
      const getData = await HTTP.get(`/api/v1/products/`);
      this.posts = getData.data.data.datas;
      console.log(this.posts);
    } catch (err) {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        console.log('Server Error:', err);
      } else if (err.request) {
        // client never received a response, or request never left
        console.log('Network Error:', err);
      } else {
        console.log('Client Error:', err);
      }
    }
    // HTTP.get(`/api/v1/products/`)
    //   .then((response) => {
    //     this.posts = response.data.data.datas;
    //     console.log(this.posts);
    //   })
    //   .catch((e) => {
    //     this.errors.push(e);
    //   });
  },
};
</script>
<style></style>
