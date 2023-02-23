<template>
  <div v-if="gridData.prop === undefined"
       class="absolute-bottom text-center q-gutter-x-xs z-top"
       style="padding-top: 4px; padding-bottom: 4px;">

    <!-- 副标题（第二行）-->
    <div v-if="gridTemplate.hasSubtitle"
         class="ellipsis text-subtitle2 q-col-gutter-x-xs">
      <a v-if="gridTemplate.showSubtitleTitle" class="text-grey-1">{{ $t(gridTemplate.subTitleTitle) }}</a>
      <a>{{ analyzeContent("subtitle") }}</a>
    </div>

    <!-- 说明栏（第三行）-->
    <div v-if="gridTemplate.hasCaption"
         class="ellipsis text-caption q-col-gutter-x-xs">
      <a class="text-grey-5" v-if="gridTemplate.showCaptionTitle">{{ $t(gridTemplate.captionTitle) }}</a>
      <a class="text-grey-4">{{ analyzeContent("caption") }}</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardLines",
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,
    }
  },

  methods: {
    analyzeContent(type) {
      let result = "";

      let contentLabel = `${type}Content`; //原始内容标签 如subtitleContent
      result = this.gridData[contentLabel]; //原始内容

      return result !== null && result !== undefined && result !== "" ? result : this.$t("NoContent");
    },
  }
}
</script>

<style scoped>

</style>
