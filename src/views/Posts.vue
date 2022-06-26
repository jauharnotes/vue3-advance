<template>
  <Suspense>
    <template #default>
      <post-list />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import { useRoute } from 'vue-router';
import PostList from './PostList.vue';

export default {
  components: { PostList },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    console.log(id);
  },
};
</script>

<style></style>
