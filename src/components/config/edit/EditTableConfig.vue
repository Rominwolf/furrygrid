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

    <q-select disable filled dense options-dense map-options emit-value :label="$t('Mode')"
              v-model="tableData.mode" :options="modeOption" :model-value="tableData.mode"/>

    <div v-if="tableData.customize">
      <q-select filled dense options-dense map-options emit-value :label="$t('ClassTitleStyle')"
                v-model="tableData.classTitleStyle" :options="classTitleStylesOption"
                :model-value="tableData.classTitleStyle"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "EditTableConfig",
  data() {
    return {
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
  },
}
</script>

<style scoped>

</style>
