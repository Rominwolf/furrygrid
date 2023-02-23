<template>
  <div class="q-px-md q-col-gutter-y-sm">
    <div class="flex justify-end q-pt-none">
      <a class="flex-1 text-h6">{{ $t("EditTable") }}</a>
      <q-toggle left-label dense :label="$t('Customize')"
                v-model="tableData.customize" :model-value="tableData.customize"/>
    </div>


    <q-input filled dense :label="$t('FillAuthor')"
             v-model="tableData.owner" :model-value="tableData.owner"
             class="col-grow"/>

    <q-select filled dense options-dense map-options emit-value :label="$t('Mode')"
              v-model="tableData.mode" :options="modeOption" :model-value="tableData.mode"/>

    <div v-if="tableData.customize" class="q-col-gutter-y-sm">
      <q-select filled dense options-dense map-options emit-value :label="$t('ClassTitleStyle')"
                :options="classTitleStylesOption"
                v-model="tableData.classTitleStyle" :model-value="tableData.classTitleStyle"/>

      <q-select filled dense options-dense map-options emit-value :label="$t('FooterShowLink')"
                :options="footerShowLinkOption"
                v-model="tableData.footerShowLink" :model-value="tableData.footerShowLink"/>

      <q-select filled dense options-dense map-options emit-value :label="$t('SeparateGridsData')"
                :options="separateGridsDataOption"
                v-model="separateGridsData" :model-value="separateGridsData"/>
    </div>
  </div>
</template>

<script>

import {LocalStorage} from "quasar";

export default {
  name: "EditTableConfig",
  data() {
    return {
      separateGridsData: LocalStorage.getItem("separateGridsData") ?? false,
      tableData: this.$gridsData.data.value[":TableData"],
    }
  },

  computed: {
    modeOption() {
      return [
        {value: "basic", label: this.$t("Basic")},
        {value: "full", label: this.$t("Full")},
      ]
    },
    classTitleStylesOption() {
      return [
        {label: this.$t("EdgeMode"), value: 0},
        {label: this.$t("FillMode"), value: 1},
      ]
    },
    footerShowLinkOption() {
      return [
        {label: this.$t("Show"), value: true},
        {label: this.$t("Hide"), value: false},
      ]
    },
    separateGridsDataOption() {
      return [
        {label: this.$t("Yes"), value: true},
        {label: this.$t("No"), value: false},
      ]
    },
  },

  watch: {
    async separateGridsData(newV) {
      await LocalStorage.set("separateGridsData", newV);
      await this.$gridsData.database.databaseRefresh();
    }
  }
}
</script>

<style scoped>

</style>
