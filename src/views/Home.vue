<template>
  <div class="home-page">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const title = 'Home page';
    return { title };
  },
});
</script>
