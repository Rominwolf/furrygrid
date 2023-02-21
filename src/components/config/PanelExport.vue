<template>
  <div>
    <div class="q-px-md text-h6">{{ $t("ExportOptions") }}</div>

    <q-list>
      <q-item-label header>{{ $t("ImageFormat") }}</q-item-label>

      <q-item v-for="(item, index) in formatOptions.data" :key="index"
              tag="label" v-ripple dense>
        <q-item-section side top>
          <q-radio color="primary" :val="item.value" v-model="format" :model-value="format"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.label }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-item-label header>{{ $t("ImageOptions") }}</q-item-label>

      <q-item v-if="format === 'png'" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>{{ $t("TransparentBG") }}</q-item-label>
          <q-item-label caption>{{ $t("TipTransparentBG") }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle val="transparent" v-model="transparent" :model-value="transparent"/>
        </q-item-section>
      </q-item>

      <q-item v-if="format === 'jpeg'">
        <q-item-section>
          <q-item-label>{{ $t("ImageQuality") }}</q-item-label>
          <q-item-label caption>{{ $t("TipImageQuality") }}</q-item-label>
          <q-slider :min="0" :max="1" label step="0.01"
                    v-model="quality" :model-value="quality"/>
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-pa-md">
      <q-btn color="primary" push icon="download_for_offline"
             class="full-width q-pa-md"
             :label="$t('GenerateFurryGrid')"
             @click="exportImage"/>
    </div>

    <div class="q-pa-md">
      <q-banner dense rounded class="bg-grey-3 text-caption text-grey-7">
        {{ $t("TipInfoReview") }}
      </q-banner>
    </div>

    <q-inner-loading :showing="loading">
      <q-spinner-oval size="50px" color="primary"/>
    </q-inner-loading>

  </div>
</template>

<script>
import domtoimage from "dom-to-image";
import {exportFile} from "quasar";
import {copyBlobToClipboard} from "copy-image-clipboard";

export default {
  name: "PanelExport",

  data() {
    return {
      loading: false,
      format: "jpeg",
      transparent: false,
      quality: 1,
    }
  },

  computed: {
    formatOptions() {
      return {
        title: this.$t("ImageFormat"),
        data: [
          {value: "jpeg", label: "JPEG"},
          {value: "png", label: "PNG"},
          {value: "clipboard", label: this.$t("CopyToClipboard")},
        ]
      }
    },
  },

  methods: {
    async exportImage() {
      this.loading = true;
      let format = this.format;

      let bgColor = this.transparent ? "rgba(0,0,0,0)" : undefined;
      let quality = this.quality;

      let option = {
        bgcolor: bgColor,
        quality: quality,
      }

      let mainPage = document.getElementById("mainPage");

      if (format === "jpeg") {
        await this.exportToJPEG(mainPage, option);
      } else {
        //获取 DOM 的 Blob 资源，失败则直接返回

        let blob = await this.generateBlob(mainPage, option);
        if (!blob) {
          this.loading = false;
          return;
        }

        if (format === "clipboard")
          await this.exportToClipboard(blob);
        else {
          await this.exportToPNG(blob);
        }
      }

      this.loading = false;
    },

    async generateBlob(node, options = {}) {
      let blob = null;

      try {
        blob = await domtoimage.toBlob(node, options);
      } catch (e) {
        this.$smart.createNotify(this.$t("CantGenerateNow"), "negative");
        return false;
      }

      return blob;
    },

    async exportToJPEG(node, options = {}) {
      try {
        let dataURL = await domtoimage.toJpeg(node, options);
        let link = document.createElement('a');
        link.download = "furry-grid.jpeg";
        link.href = dataURL;
        link.click();

        this.$smart.createNotify(this.$t("SucceedDownloadImage"));
      } catch (e) {
        this.$smart.createNotify(this.$t("CantGenerateNow"), "negative");
        return false;
      }

      return true;
    },

    async exportToPNG(blob) {
      let type = blob.type;

      let response = exportFile(`furry-grid.png`, blob, {
        mimeType: type
      });

      if (response)
        this.$smart.createNotify(this.$t("SucceedDownloadImage"));
      else
        this.$smart.createNotify(this.$t("CantDownloadImage"), "negative");
    },

    async exportToClipboard(blob) {
      try {
        await copyBlobToClipboard(blob);
      } catch (e) {
        this.$smart.createNotify(this.$t("CantCopyToClipboard"), "negative");
        return false;
      }

      this.$smart.createNotify(this.$t("SucceedCopyToClipboard"));
      return true;
    }
  }
}
</script>

<style scoped>

</style>
