<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
    <br /><br />

    <button @click="addLike">Like</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
  async setup() {
    const data = reactive({
      title: '',
      body: '',
    });

    const route = useRoute();
    const id = route.params.id;
    const store = useStore();

    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const { title, body } = await result.json();

    data.title = title;
    data.body = body;

    const addLike = () => {
      store.commit('increment');
    };

    return { ...toRefs(data), addLike };
  },
};
</script>

<style></style>
