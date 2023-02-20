<template>
  <div class="q-col-gutter-y-sm">
    <div class="q-px-md text-h6">{{ $t("EditGrids") }}</div>

    <q-list dense class="rounded-borders">
      <q-expansion-item v-for="(classInner, classIndex) in gridsTemplate" :key="classIndex"
                        header-class="edit-grid-items" :group="gridsTemplate">

        <template v-slot:header>
          <q-item-section avatar>
            <q-circular-progress
              show-value
              :value="finishProgress(classIndex, true)"
              :thickness="0.1" color="black" track-color="transparent" size="md"
              class="text-black">
              <q-icon :name="classInner.info.icon" size="sm"/>
            </q-circular-progress>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ classTitleTranslated(classInner.info.name) }}</q-item-label>
            <q-item-label caption>{{ finishProgress(classIndex) }}</q-item-label>
          </q-item-section>
        </template>

        <q-expansion-item v-for="(item, index) in classInner.items" :key="index" :class-key="classIndex"
                          dense :label="$t(item.title).replaceAll('/','')" :group="classInner"
                          :header-inset-level=1 :content-inset-level=1
                          @show="eventExpansionItemShow(this, item.title)">

          <EditGridItem
            :grid="{data: gridsData[item.title], template: item, classIndex: classIndex, itemIndex: index}"/>

        </q-expansion-item>

      </q-expansion-item>
    </q-list>

  </div>
</template>

<script>
import {capitalize, ref} from "vue";
import EditGridItem from "components/config/edit/EditGridItem";

export default {
  name: "EditGridItems",
  components: {EditGridItem},
  data() {
    return {
      gridsTemplate: this.$gridsData.template.basic,
      gridsData: ref(this.$gridsData.data),
      dialogSearch: false,
      chooseGrid: null
    }
  },

  methods: {
    /**
     * 类标题 ID -> 翻译后
     * @param name ID
     */
    classTitleTranslated(name) {
      return this.$t("GridClassTitle_" + capitalize(name));
    },

    /**
     * 展开详情栏后高亮左侧格子
     * @param event 事件
     * @param gridKey 格子 ID
     */
    eventExpansionItemShow(event, gridKey) {
      this.highlightGridItem(gridKey);
    },

    /**
     * 高亮指定格子
     * @param gridKey 格子 Key
     */
    highlightGridItem(gridKey) {
      let id = `#grid${gridKey}`;
      this.$smart.scrollToElement(id, -16).then(() => {
        this.$smart.animateDOM(id, "animation-grid-highlight");
      });
    },

    finishProgress(classIndex, onlyNumerical = false) {
      let classesGrids = this.gridsTemplate[classIndex];
      let now = 0;
      let all = 0;

      classesGrids.items.forEach(grid => {
        all++; //所有表单+1封面
        let gridKey = grid.title;
        let gridData = this.gridsData[gridKey] ?? {};

        //有图片则已完成 +1
        if (gridData.image) now++;

        if (grid.hasSubtitle) {
          all++;//所有表单+1副标题
          if (gridData["subtitleContent"]) now++; //如果有副标题则已完成 +1
        }

        if (grid.hasCaption) {
          all++;//所有表单+1说明栏
          if (gridData["captionContent"]) now++; //如果有说明栏则已完成 +1
        }
      });

      //进度
      let progress = ((now / all) * 100).toFixed() ?? 0;

      //是否只显示数值
      if (onlyNumerical) return progress;

      //根据不同进度返回不同文案
      if (progress >= 100)
        return this.$t("AllFilled");

      let alreadyFilled = this.$t("AlreadyFilled");
      return `${alreadyFilled} ${progress}%`;
    },
  }
}
</script>

<style scoped>

</style>
