<template>
  <div class="app-wrapper">
    <router-view />
    <transition name="fade">
      <modal>
        <h2>Modall from app</h2>
      </modal>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from '@/components/Modal.vue';

export default defineComponent({
  name: 'App',
  components: {
    Modal,
  },
  setup() {
    const title = 'Contact page';
    return { title };
  },
});
</script>
