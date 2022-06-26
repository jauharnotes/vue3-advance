<template>
  <pre>{{ name }}</pre>
  <pre>{{ age }}</pre>

  <input-value v-model:name="name" v-model:age="age" />
</template>

<script>
import InputValue from '../components/InputValue.vue';
import { ref } from 'vue';
export default {
  components: { InputValue },
  setup() {
    const name = ref('');
    const age = ref(0);

    return { name, age };
  },
};
</script>

<style></style>
