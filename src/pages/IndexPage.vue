<template>
  <q-scroll-area class="main-page-scroll">
    <div class="flex justify-center">
      <q-page id="mainPage" class="q-pa-xl main-page cursor-default">
        <HeaderComp></HeaderComp>
        <GridsComp></GridsComp>
        <FooterComp></FooterComp>
      </q-page>

      <q-page-sticky position="top-left" class="q-pa-none">
        <div class="language-corner flex justify-center items-end rotate-315
           bg-black cursor-pointer">
          <q-icon size="lg" color="white" name="translate"></q-icon>

          <q-popup-proxy class="language-switcher-popup">
            <LanguageSwitcher></LanguageSwitcher>
          </q-popup-proxy>

        </div>
      </q-page-sticky>

    </div>
  </q-scroll-area>
</template>

<script>
import {defineComponent} from 'vue';

import HeaderComp from "components/grid/HeaderComp";
import GridsComp from "components/grid/GridsComp";
import FooterComp from "components/grid/FooterComp";
import LanguageSwitcher from "components/LanguageSwitcher";

export default defineComponent({
  name: 'IndexPage',
  components: {LanguageSwitcher, FooterComp, GridsComp, HeaderComp},
})
</script>

<style>
.main-page {
  background-color: #F6F6F6;
  width: 1080px;
}

.main-page-scroll {
  background-color: #F6F6F6;
  width: 100%;
  height: 100vh;
}

.language-corner {
  height: 8rem;
  width: 8rem;
  margin: -4rem 0 0 -4rem;
}

.language-corner > .q-icon {
  margin-bottom: -4px;
}

.language-switcher-popup {
  top: 16px !important;
  left: 16px !important;
}
</style>
