<template>
  <h2>This is User compenent</h2>
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
        return setTimeout(() => resolve((data.value = 'jauhar')), 2000);
      });

    await getData();
    // datax.valu = 2323;

    return { data };
  },
};
</script>

<style></style>
