<template>
  <div>
    <q-card :id="`grid${gridTemplate.title}`" flat bordered>
      <q-img crossorigin="anonymous" referrerpolicy="no-referrer" fit="cover" :ratio="1"
             class="bg-deep-purple-2" img-class="blur-10"
             :src="gridData.image">
        <template v-slot:default>
          <!-- 第二行和第三行 -->
          <CardLines :grid="grid"></CardLines>

          <!-- 显示在顶部的图片 -->
          <q-img crossorigin="anonymous" referrerpolicy="no-referrer" fit="contain" :ratio="1"
                 :src="gridData.image"/>

          <div v-if="gridData.image === undefined"
               class="full-height full-width column justify-center content-center bg-grey-3 text-grey-9">
            <q-icon name="question_mark" size="xl" class="self-center"/>
            <div class="text-subtitle2">{{ $t("NotChoose") }}</div>
          </div>

        </template>
        <template v-slot:error>
          <!-- 第二行和第三行 -->
          <CardLines :grid="grid"></CardLines>
          <div class="full-height full-width column justify-center content-center bg-red-3 text-grey-9">
            <q-icon name="error" size="xl" class="self-center"/>
            <div class="text-subtitle2">{{ $t("CantLoadImage") }}</div>
          </div>
        </template>
      </q-img>

      <q-card-section class="q-py-sm">
        <div class="column">
          <a v-if="title(0) !== ''"
             class="text-subtitle2" :class="letterSpacing(title(0), 'sm')">
            {{ title(0) }}
          </a>
          <a class="text-subtitle1" :class="letterSpacing(title(1), 'md')">
            {{ title(1) }}
          </a>
          <a v-if="$t(gridTemplate.title).split('/').length === 3"
             class="text-subtitle2 no-wrap" :class="letterSpacing(title(2), 'sm')">
            {{ title(2) }}
          </a>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import CardLines from "components/grid/CardLines";

export default {
  name: "GridCard",
  components: {CardLines},
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,
      gridClassIndex: this.grid.classIndex,
      gridItemIndex: this.grid.itemIndex
    }
  },

  methods: {
    title(index) {
      let titleId = this.gridTemplate.title;
      return this.$t(titleId).split("/")[index];
    },

    titleTrim() {
      let titleId = this.gridTemplate.title;
      return $t(titleId).replaceAll('/', '');
    },

    analyzeContent(type, item) {
      let result = "";

      let contentLabel = `${type}Content`; //原始内容标签 如subtitleContent
      result = item[contentLabel]; //原始内容

      return result !== null && result !== undefined && result !== "" ? result : this.$t("NoContent");
    },

    /**
     * 分析长度，决定是否挤压字符串
     * @param content 字符串内容
     * @param size 文字类型（md, sm）
     */
    letterSpacing(content, size) {
      let maxLength = 19;
      if (size === "md") maxLength = 13;

      let length = this.$smart.getLength(content);
      return length >= maxLength ? " systolic-letter-spacing" : "";
    }
  },
}
</script>

<style scoped>

</style>
