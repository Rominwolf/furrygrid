<template>
  <router-view/>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',

  async mounted() {
    this.$smart.updateMetaTitle();
  },
})
</script>
