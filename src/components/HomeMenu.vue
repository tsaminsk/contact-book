<template>
  <div class="home-menu">
    <div class="home-menu__search">
      <div class="home-menu__search-input">
        <input type="text" v-model="search" />
      </div>
      <div class="home-menu__button">
        <div class="home-menu__button-icon">
          <IconSearch :icon-size="30" />
        </div>
        <div class="home-menu__button-label">search</div>
      </div>
    </div>
    <div
      class="home-menu__button"
      @click="store.dispatch('setModalState', modal)"
    >
      <div class="home-menu__button-icon">
        <IconAdd :icon-size="30" />
      </div>
      <div class="home-menu__button-label">Add</div>
    </div>
    <div class="home-menu__button" @click="isOpen = !isOpen">
      <div class="home-menu__button-icon">
        <IconMenu :icon-size="30" />
      </div>
      <div class="home-menu__button-label">menu</div>
      <transition name="fade">
        <div class="home-menu__dropdown" :class="{ 'is-open': isOpen }">
          <div class="home-menu__dropdown-elem">Settings</div>
          <div class="home-menu__dropdown-elem">Save contacts</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import { useAppStore } from '@/store';

export default defineComponent({
  name: 'HomeMenu',
  components: {
    IconSearch,
    IconAdd,
    IconMenu,
  },
  setup() {
    let search = ref('');
    let isOpen = ref(false);
    const store = useAppStore();
    const modal = {
      isOpen: true,
      component: 'contact-form',
    };
    // const search = reactive({ title: 'Vue 3 Guide' })

    return { search, isOpen, store, modal };
  },
});
</script>
