<template>
  <div class="q-px-md q-py-sm bg-white" style="max-width: unset">
    <q-select label="Choose Language"
              dense borderless emit-value map-options options-dense
              style="min-width: 200px"
              v-model="locale" :options="localeOptions" :model-value="locale"
              @update:model-value="changedLanguage"/>
  </div>
</template>

<script>
import {useI18n} from "vue-i18n";
import {LocalStorage} from "quasar";

export default {
  name: "LanguageSwitcher",
  setup() {
    const {locale} = useI18n({useScope: "global"})

    return {
      locale,
      localeOptions: [
        {value: 'zh-cn', label: "简体中文"},
        {value: 'en', label: "English"},
      ]
    }
  },

  methods: {
    changedLanguage(value) {
      this.$gridsData.database.databaseRefresh();
      this.$smart.updateMetaTitle();
      LocalStorage.set("language", value);
    }
  }
}
</script>

<style scoped>

</style>
