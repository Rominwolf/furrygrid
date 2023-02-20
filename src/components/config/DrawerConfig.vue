<template>
  <q-drawer show-if-above v-model="drawerConfig" side="right" bordered :width="drawerWidth">
    <q-scroll-area class="config-page-scroll">

      <q-tabs v-model="tab" class="bg-primary text-white shadow-2 fixed-top z-top">
        <q-tab name="edit" icon="edit_note" :label="$t('Edit')"/>
        <q-tab name="export" icon="ios_share" :label="$t('Export')"/>
        <q-tab name="about" icon="info" :label="$t('About')"/>
      </q-tabs>

      <div class="tab-panels">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="edit" class="q-px-none">
            <PanelEdit></PanelEdit>
          </q-tab-panel>
          <q-tab-panel name="export" class="q-px-none">
            <PanelExport></PanelExport>
          </q-tab-panel>
          <q-tab-panel name="about" class="q-px-none">
            <PanelAbout></PanelAbout>
          </q-tab-panel>
        </q-tab-panels>
      </div>

    </q-scroll-area>
  </q-drawer>
</template>

<script>
import {useQuasar} from 'quasar';
import PanelEdit from "components/config/PanelEdit";
import PanelExport from "components/config/PanelExport";
import PanelAbout from "components/config/PanelAbout";

export default {
  name: "DrawerConfig",
  components: {PanelAbout, PanelExport, PanelEdit},

  data() {
    return {
      drawerConfig: true,
      tab: "edit"
    }
  },

  computed: {
    drawerWidth() {
      let minWidth = 1380;

      let q = useQuasar();
      let screenWidth = q.screen.width;

      if (q.platform.is.mobile && screenWidth < minWidth)
        return screenWidth * 0.9;

      if (screenWidth >= minWidth)
        return screenWidth * 0.25;
      else return minWidth;
    }
  }
}
</script>

<style scoped>
.config-page-scroll {
  width: 100%;
  height: 100vh;
}

.tab-panels {
  margin-top: 72px;
}
</style>
