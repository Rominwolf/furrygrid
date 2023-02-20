<template>
  <div class="q-col-gutter-y-md">
    <div v-for="(classInner, classIndex) in gridsTemplate" :key="classIndex"
         :id="`gridClass${classIndex}`"
         class="row">

      <div v-if="classTitleStyle === 0"
           class="flex justify-start items-start col-4-percent text-h7 text-primary">
        <a class="grid-class-title text-weight-bold text-uppercase">
          {{ classTitleTranslated(classInner.info.name) }}
        </a>
        <q-separator vertical size="4px" color="primary" style="height: 25%"></q-separator>
      </div>

      <div v-if="classTitleStyle === 1"
           class="flex justify-start items-start col-4-percent text-h7 text-white">
        <div class="q-px-xs q-pt-sm q-pb-md bg-primary">
          <a class="grid-class-title text-weight-bold text-uppercase">
            {{ classTitleTranslated(classInner.info.name) }}
          </a>
        </div>
      </div>

      <GridCard v-for="(item, index) in classInner.items" :key="index"
                :grid="
                {data: gridsData[item.title], template: item, classIndex: classIndex, itemIndex: index}"
                class="col-19-dot-2-percent q-px-sm"/>

    </div>
  </div>
</template>

<script>
import {capitalize, ref} from 'vue'
import GridCard from "components/grid/GridCard";

export default {
  name: "GridsComp",
  components: {GridCard},

  data() {
    return {
      tableData: this.$gridsData.data.value[":TableData"],
      gridsTemplate: this.$gridsData.template.basic,
      gridsData: ref(this.$gridsData.data)
    }
  },

  computed: {
    classTitleStyle() {
      let style = this.tableData.classTitleStyle;
      return style === undefined ? 0 : style;
    },
  },

  watch: {
    gridsData: {
      async handler(oldValue, newValue) {
        await this.$gridsData.database.databaseGridsPutAll();
      },
      deep: true
    }
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
