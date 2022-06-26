<template>
  <h2>This is User 2 compenent</h2>
  <p>{{ data }}</p>
</template>

<script>
// import { ref } from 'vue';
import { ref } from 'vue';
export default {
  async setup() {
    const data = ref(null);
    // const dataValue = data.value;

    const getData = async () =>
      new Promise((resolve) => {
        return setTimeout(() => resolve((data.value = 'yanto')), 5000);
      });

    await getData();
    // datax.valu = 2323;

    return { data };
  },
};
</script>

<style></style>
