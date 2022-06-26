<template>
  <Suspense>
    <template #default>
      <post-detail />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import PostDetail from './PostDetail.vue';

export default {
  components: { PostDetail },
};
</script>

<style></style>
