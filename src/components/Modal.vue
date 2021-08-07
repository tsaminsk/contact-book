<template>
  <div class="modal" :class="{ 'is-open': store.getters.getModalOpen }">
    <div
      class="modal__outer"
      @click.once="store.dispatch('setModalState', modal)"
    >
      <div class="modal__inner" @click.prevent.stop>
        <div
          class="modal__close"
          @click="store.dispatch('setModalState', modal)"
        >
          <IconClose />
        </div>
        <h1>{{ title }}</h1>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '@/store';
import IconClose from '@/components/icons/IconClose.vue';

export default defineComponent({
  name: 'Modal',
  components: {
    IconClose,
  },
  setup() {
    const store = useAppStore();
    const modal = { isOpen: false, component: '' };

    return { store, modal };
  },
});
</script>
