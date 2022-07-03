<template>
  <div>
    <label for="username">User Name</label>
    <input type="text" id="username" v-model="username" />
    <label for="password">Password</label>
    <input type="password" id="password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const username = ref('');

    const login = () => {
      localStorage.setItem('authenticated', true);
      store.commit('setUsername', username.value);
      router.push({ name: 'Home' });
    };
    return { login, username };
  },
};
</script>

<style></style>
