<template>
  <div v-if="classTitleStyle === 0"
       class="full-height flex text-h7 text-primary">
    <a class="grid-class-title text-weight-bold text-uppercase block"
       :class="`text-${classInner.info.color}`"
       style="width: 24px">
      {{ classTitleTranslated(classInner.info.name) }}
    </a>
    <q-separator vertical size="4px" color="primary" :class="`bg-${classInner.info.color}`"></q-separator>
  </div>

  <div v-if="classTitleStyle === 1"
       class="full-height flex justify-center items-start q-mr-sm q-pt-sm text-h7 text-white"
       :class="`bg-${classInner.info.color}`">
    <a class="grid-class-title text-weight-bold text-uppercase text-center">
      {{ classTitleTranslated(classInner.info.name) }}
    </a>
  </div>
</template>

<script>
import {capitalize} from "vue";

export default {
  name: "GridCardClassTitle",

  props: ["classInner"],

  data() {
    return {
      tableData: this.$gridsData.data.value[":TableData"],
    }
  },

  computed: {
    classTitleStyle() {
      let style = this.tableData.classTitleStyle;
      return style === undefined ? 0 : style;
    },
  },

  methods: {
    /**
     * 类标题翻译
     * @param name 类 ID
     */
    classTitleTranslated(name) {
      return this.$t("GridClassTitle_" + capitalize(name));
    },
  },

}
</script>

<style scoped>
.grid-class-title {
  writing-mode: vertical-lr;
  letter-spacing: 0.1rem;
}
</style>
