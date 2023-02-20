<template>
  <div>
    <div class="flex items-center q-px-md text-h6">
      <a class="q-pr-sm">{{ $t("AboutProject") }}</a>
      <q-badge :label="version"/>
    </div>

    <q-list>
      <div v-for="(about, aboutIndex) in abouts" :key="aboutIndex">
        <q-item-label header class="q-pb-xs">{{ about.title }}</q-item-label>
        <q-item v-for="(item, index) in about.items" :key="index"
                class="q-my-sm" clickable v-ripple
                :href="item.link" target="_blank">
          <q-item-section v-if="item.emoji"
                          avatar class="flex justify-center items-center">
            <Icon :icon="`twemoji:${item.emoji}`" width="24" height="24"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.subtitle }}</q-item-label>
          </q-item-section>

          <q-item-section side v-if="item.link">
            <q-icon name="arrow_forward" color="primary"/>
          </q-item-section>
        </q-item>
      </div>
    </q-list>

  </div>
</template>

<script>
import {Icon} from '@iconify/vue';

export default {
  name: "PanelAbout",

  components: {Icon},

  data() {
    return {
      version: process.env.PACKAGE.version,
    }
  },

  computed: {
    abouts() {
      return [
        {
          title: this.$t("Statement"),
          items: [
            {
              title: this.$t("LicenseStatement"),
              subtitle: this.$t("LicenseContent"),
              link: "https://en.wikipedia.org/wiki/Fair_use"
            }
          ]
        },
        {
          title: this.$t("Developers"),
          items: [
            {
              title: "Rominwolf",
              subtitle: this.$t("MainDev"),
              emoji: "dog-face",
              link: "https://blog.wsm.ink"
            }
          ]
        },
        {
          title: this.$t("Thanks"),
          items: [
            {
              title: "基阿",
              subtitle: this.$t("SupportAndTesting"),
              emoji: "koala",
              link: "https://weibo.com/6141025798"
            },
            {
              title: "二甲庚烯",
              subtitle: this.$t("SupportAndTesting"),
              emoji: "man-mage",
              link: "https://space.bilibili.com/14985484"
            },
            {
              title: "摸鱼",
              subtitle: this.$t("SupportAndTesting"),
              emoji: "fishing-pole",
              link: "https://www.bilibili.com/video/BV1GJ411x7h7/"
            },
            {
              title: "将屿",
              subtitle: this.$t("SupportAndTesting"),
              emoji: "cat-with-wry-smile",
              link: "https://qm.qq.com/cgi-bin/qm/qr?k=x1MhzacgDFw2KilpUJpAt8NcDQyGMv2R"
            },
            {
              title: "白辰",
              subtitle: this.$t("SupportAndTesting"),
              emoji: "star"
            },
            {
              title: "Popo",
              subtitle: this.$t("SupportAndTesting"),
              emoji: "rat",
              link: "https://twitter.com/Opossoll"
            },
          ]
        },
        {
          title: this.$t("Project"),
          items: [
            {
              title: "Github: furrygrid",
              subtitle: this.$t("OpenSourceLink"),
              emoji: "desktop-computer",
              link: "https://github.com/Rominwolf/furrygrid"
            },
            {
              title: this.$t("QaS"),
              subtitle: this.$t("QaSSubtitle"),
              emoji: "exclamation-question-mark",
              link: "https://github.com/Rominwolf/furrygrid/issues"
            },
            {
              title: "Quasar",
              subtitle: this.$t("Framework"),
              emoji: "eight-pointed-star",
              link: "https://quasar.dev/"
            },
          ]
        },
        {
          title: this.$t("ExtraResources"),
          items: [
            {
              title: this.$t("FurryGameIndex"),
              subtitle: this.$t("ServiceSupport"),
              emoji: "paw-prints",
              link: "https://furrygames.top/"
            },
            {
              title: this.$t("Douban"),
              subtitle: this.$t("ServiceSupport"),
              emoji: "clapper-board",
              link: "https://www.douban.com/"
            },
            {
              title: "IMDb",
              subtitle: this.$t("ServiceSupport"),
              emoji: "film-frames",
              link: "https://imdb.com/"
            },
            {
              title: "Harmony OS Hans",
              subtitle: this.$t("Font"),
              emoji: "input-latin-lowercase",
              link: "https://developer.harmonyos.com/en/docs/design/des-guides/font-0000001157868583"
            },
            {
              title: "Material Icons",
              subtitle: this.$t("Font"),
              emoji: "input-symbols",
              link: "https://fonts.google.com/icons"
            },
          ]
        },
      ];
    }
  }
}
</script>

<style scoped>

</style>
