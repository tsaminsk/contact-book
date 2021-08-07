<template>
  <div class="home-page">
    <home-menu />
    <div class="contacts-list">
      <ContactItem v-for="item in contacts" :item="item" :key="item.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeMenu from '@/components/HomeMenu.vue';
import ContactItem from '@/components/ContactItem.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeMenu,
    ContactItem,
  },
  setup() {
    const contacts = [
      { name: 'Petrov ' },
      { name: 'Ivanov ' },
      { name: 'Sidorov ' },
    ];
    return { contacts };
  },
});
</script>
