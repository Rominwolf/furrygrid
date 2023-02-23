<template>
  <q-scroll-area ref="mainPageScroll" class="main-page-scroll"
                 @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onMouseUp">
    <div class="flex justify-center">
      <q-page id="mainPage" class="q-pa-xl main-page">
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
import {defineComponent, ref} from 'vue';

import HeaderComp from "components/grid/HeaderComp";
import GridsComp from "components/grid/GridsComp";
import FooterComp from "components/grid/FooterComp";
import LanguageSwitcher from "components/LanguageSwitcher";

export default defineComponent({
  name: 'IndexPage',
  components: {LanguageSwitcher, FooterComp, GridsComp, HeaderComp},

  setup() {
    const mainPageScroll = ref(null);

    return {
      mainPageScroll
    }
  },

  data() {
    return {
      isMouseDown: false,
      y: 0,
    }
  },

  methods: {
    onMouseDown(event) {
      this.isMouseDown = true;
      this.y = event.y;
      document.querySelector(".main-page-scroll").style.cursor = 'grabbing';
    },
    onMouseMove(event) {
      if (this.isMouseDown) {
        let adding = 15;

        //如果鼠标下移则变成位置减少
        if (event.y > this.y) adding = -adding;

        let scrollPosition = this.mainPageScroll.getScrollPosition();

        this.mainPageScroll.setScrollPosition("vertical", scrollPosition.top + adding, 0);
      }
    },
    onMouseUp(event) {
      this.isMouseDown = false;
      this.y = event.y;
      document.querySelector(".main-page-scroll").style.cursor = 'grab';
    }
  }
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
  user-select: none;
  cursor: grab;
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
