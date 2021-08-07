<template>
  <div class="contacts-list__item">
    <div class="contacts-list__item-icon">
      <IconUser v-if="!item.icon" :icon-size="40" />
      <img v-else :src="item.icon" alt="" />
    </div>
    <div class="contacts-list__item-name">{{ item.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconUser from '@/components/icons/IconUser.vue';

export default defineComponent({
  name: 'ContactItem',
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  components: {
    IconUser,
  },
  setup(props) {
    return {};
  },
});
</script>
