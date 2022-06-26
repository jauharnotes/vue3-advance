<script>
import User from './components/User.vue';
import User2 from './components/User2.vue';
import { ref, onErrorCaptured } from 'vue';
export default {
  components: { User, User2 },
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return { error };
  },
};
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <Suspense v-else>
    <template #default>
      <div>
        <user />
        <user-2 />
      </div>
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>

<style></style>
