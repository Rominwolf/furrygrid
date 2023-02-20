<template>
  <q-card>
    <q-card-section class="q-py-sm q-px-md row q-col-gutter-x-sm">
      <div class="flex full-width q-gutter-x-sm q-pl-none q-pb-sm">
        <q-btn dense unelevated color="primary" :label="$t('ChangeChoose')" class="col-grow"
               @click="this.dialogSearch = true"/>

        <q-btn round dense unelevated icon="delete" color="primary"
               @click="removeGridInfo">
          <q-tooltip>{{ $t('RemoveGridInfo') }}</q-tooltip>
        </q-btn>
      </div>

      <div class="full-width">
        <q-banner v-if="gridTemplate.tip" dense rounded class="bg-grey-3 q-mb-sm">
          <template v-slot:avatar>
            <div class="self-center">
              <q-icon size="xs" name="tips_and_updates" color="primary"/>
            </div>
          </template>
          <a class="text-caption systolic-line-height">{{ $t(gridTemplate.tip) }}</a>
        </q-banner>
      </div>

      <div class="col-8 q-gutter-y-sm">
        <q-input filled dense :label="$t(gridTemplate.subTitleTitle)"
                 class="col-grow"
                 v-model="gridData[fieldSubtitleContent]"
                 :model-value="gridData[fieldSubtitleContent]"/>
        <q-input v-if="gridTemplate.hasCaption"
                 filled dense :label="$t(gridTemplate.captionTitle)"
                 class="col-grow"
                 v-model="gridData[fieldCaptionContent]"
                 :model-value="gridData[fieldCaptionContent]"/>
      </div>

      <div class="col-4 q-gutter-y-sm">
        <q-img crossorigin="anonymous" referrerpolicy="no-referrer" fit="contain" :ratio="1"
               :src="gridData.image"
               class="full-width bg-grey-3 rounded-borders cursor-pointer"
               @click="this.dialogSearch = true;"/>
      </div>

    </q-card-section>
  </q-card>

  <q-dialog v-model="dialogSearch">
    <SearchCard :grid="grid"></SearchCard>
  </q-dialog>
</template>

<script>
import SearchCard from "components/config/edit/dialog/SearchCard";

export default {
  name: "EditGridItem",
  components: {SearchCard},
  props: ["grid"],

  data() {
    return {
      fieldSubtitleContent: "subtitleContent",
      fieldCaptionContent: "captionContent",

      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,
      gridClassIndex: this.grid.classIndex,
      gridItemIndex: this.grid.itemIndex,
      gridKey: this.grid.template.title,

      dialogSearch: false,
      chooseGrid: null
    }
  },

  methods: {
    removeGridInfo() {
      this.$gridsData.removeGridDataAsKey(this.gridKey);
      this.$smart.createNotify(this.$t("RemovedGridInfo"));
    },
  }
}
</script>

<style scoped>
.edit-grid-item-highlight-btn {
  position: fixed;
  left: 20px;
  padding-left: 0;
}
</style>
