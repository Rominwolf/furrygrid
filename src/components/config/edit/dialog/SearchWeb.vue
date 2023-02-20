<template>
  <div class="q-gutter-y-md">

    <div class="text-h5">{{ $t("WebLink") }}</div>

    <q-input filled type="textarea" :label="$t('WebLink')"
             v-model="link" :model-value="link"
             @keypress.enter="submit">
      <template v-slot:prepend>
        <q-icon name="public"/>
      </template>

      <template v-slot:append>
        <q-icon v-if="link !== ''" name="close" @click="link = ''" class="cursor-pointer"/>
      </template>
    </q-input>

    <q-btn unelevated color="primary" size="md" class="float-right" :label="$t('Submit')" @click="submit"/>
  </div>
</template>

<script>
export default {
  name: "SearchWeb",
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      link: "",
      name: ""
    }
  },
  methods: {
    submit() {
      let gridKey = this.gridTemplate.title;
      this.gridData["image"] = this.link;
      // this.$gridsData.updateValueAsKey(gridKey, "image", this.link);

      this.$smart.createNotify(this.$t("SucceedSubmitWebLink"));
    }
  }
}
</script>

<style scoped>

</style>
