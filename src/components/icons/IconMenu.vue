<template>
  <svg
    :style="{ width: `${iconSize}px`, height: `${iconSize}px` }"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import baseIconProps from '@/mixins/baseIconProps.ts';

export default defineComponent({
  name: 'IconMenu',
  props: {
    ...baseIconProps,
  },
  setup(props) {
    return {};
  },
});
</script>
