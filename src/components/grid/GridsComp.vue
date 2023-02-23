<template>
  <div class="q-col-gutter-y-lg">
    <div v-for="(classInner, classIndex) in gridsTemplate" :key="classIndex"
         :id="`gridClass${classIndex}`"
         class="row">

      <div class="col-4-percent">
        <GridCardClassTitle :class-inner="classInner"></GridCardClassTitle>
      </div>

      <div class="col-96-percent row q-col-gutter-sm">
        <GridCard v-for="(item, index) in classInner.items" :key="index"
                  :grid="
                {data: gridsData[item.title], template: item, classIndex: classIndex, itemIndex: index}"
                  class="col-20-percent"/>
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import GridCard from "components/grid/GridCard";
import GridCardClassTitle from "components/grid/GridCardClassTitle";

export default {
  name: "GridsComp",
  components: {GridCardClassTitle, GridCard},

  data() {
    return {
      tableData: this.$gridsData.data.value[":TableData"],
      gridsTemplate: ref(this.$gridsTemplates.data),
      gridsData: ref(this.$gridsData.data)
    }
  },

  watch: {
    gridsData: {
      async handler() {
        await this.$gridsData.database.databaseGridsPutAll();
      },
      deep: true
    },

    tableData: {
      handler(newValue, oldValue) {
        let mode = newValue.mode;
        this.$gridsTemplates.refreshTemplate(mode);
      },
      deep: true
    },
  },

}
</script>

<style scoped>

</style>
