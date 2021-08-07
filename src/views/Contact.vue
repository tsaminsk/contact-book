<template>
  <div class="contact-page">
    <h1>This is an {{ title }} page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'Contact',
  setup() {
    const title = 'Contact';

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('Component is mounted!');
    });

    return { title };
  },
});
</script>
