<template>
  <q-layout view="hHh lpR fFf">
    <DrawerConfig></DrawerConfig>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import DrawerConfig from "components/config/DrawerConfig";
import {LoadingBar} from "quasar";

export default defineComponent({
  name: 'MainLayout',
  components: {DrawerConfig},

  setup() {
    LoadingBar.start();
  },

  methods: {
    /**
     * 初始化事件
     */
    initEvents() {
      window.onload = () => {
        LoadingBar.stop();
      }
    }
  },

  mounted() {
    this.initEvents();
    this.$smart.updateMetaTitle();
  },
})
</script>
