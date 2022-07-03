<template>
  <div>
    <h2>{{ posts.product_nama }}</h2>
    <div v-html="posts.product_description"></div>
    <p>{{ posts.pkategori_id }}</p>

    <div v-for="(post, i) in posts.primgs" :key="i">
      <img :src="post" alt="" />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { HTTP } from '../http-common';
export default {
  data() {
    return {
      posts: [],
    };
  },

  async created() {
    const route = useRoute();
    const id = route.params.pkategori_id;
    console.log(id);

    try {
      const getData = await HTTP.get(`/api/v1/products/${id}`);
      this.posts = getData.data.data;
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
