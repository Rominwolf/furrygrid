<template>
  <q-card class="min-height-unset">
    <q-card-section>
      <q-splitter horizontal v-model="splitterModel" :model-value="splitterModel">

        <template v-slot:before>
          <q-tabs outside-arrows mobile-arrows v-model="tab" class="bg-primary text-white">
            <q-tab name="local" icon="attach_file" :label="$t('LocalChoose')"/>
            <q-tab name="web" icon="public" :label="$t('WebLink')"/>
            <q-tab name="fgi" icon="pets" :label="$t('FGISearch')"/>
            <q-tab name="douban" icon="movie" :label="$t('DoubanSearch')"/>
            <q-tab name="imdb" icon="theaters" :label="$t('ImdbSearch')"/>
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels v-model="tab" animated class="q-pb-md">

            <q-tab-panel name="local">
              <SearchLocal :grid="grid"></SearchLocal>
            </q-tab-panel>

            <q-tab-panel name="web">
              <SearchWeb :grid="grid"></SearchWeb>
            </q-tab-panel>

            <q-tab-panel name="fgi">
              <SearchFGI :grid="grid"></SearchFGI>
            </q-tab-panel>

            <q-tab-panel name="douban">
              <SearchDouban :grid="grid"></SearchDouban>
            </q-tab-panel>

            <q-tab-panel name="imdb">
              <SearchImdb :grid="grid"></SearchImdb>
            </q-tab-panel>

          </q-tab-panels>
        </template>

      </q-splitter>
    </q-card-section>
  </q-card>
</template>

<script>
import SearchDouban from "components/config/edit/dialog/SearchDouban";
import SearchLocal from "components/config/edit/dialog/SearchLocal";
import SearchWeb from "components/config/edit/dialog/SearchWeb";
import SearchFGI from "components/config/edit/dialog/SearchFGI";
import SearchImdb from "components/config/edit/dialog/SearchImdb";

export default {
  name: "SearchCard",
  components: {SearchImdb, SearchFGI, SearchWeb, SearchLocal, SearchDouban},
  props: ["grid"],
  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      tab: "local",
      splitterModel: 10
    }
  }
}
</script>

<style scoped>
.q-card {
  width: 700px;
  max-width: 80vw;
}

.q-card > div {
  padding: 0;
}
</style>
