<template>
  <div class="row q-pt-xl">
    <div class="col-6 column q-col-gutter-y-xs">
      <a class="text-grey-9">
        Made with
        <q-icon name="favorite" size="xs" color="red"></q-icon>
        by @Rominwolf
      </a>

      <div class="text-grey-5">
        <a class="text-grey-6">{{ $t("LicenseGridStatement") }}</a>
        {{ $t("LicenseGridStart") }}
        <a class="text-grey-6">{{ $t("LicenseFairUse") }}</a>
        {{ $t("LicenseGridEnd") }}
      </div>
    </div>

    <div v-if="tableData.footerShowLink"
         class="col-5 flex-right row justify-end items-center q-gutter-x-sm">
      <div class="col-8 column text-right">
        <a class="text-h7">https://lab.wsm.ink/furrygrid</a>
        <a class="text-subtitle2">{{ $t("FooterAdTitle") }}</a>
      </div>
      <q-img src="qrcode.svg" height="100px" width="100px" loading="eager" class="col-4"></q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",

  data() {
    return {
      tableData: this.$gridsData.data.value[":TableData"],
      productName: null,
      version: null
    }
  },

  mounted() {
    this.productName = process.env.PACKAGE.productName;
    this.version = process.env.PACKAGE.version;
  }
}
</script>

<style scoped>
.width-50-percent {
  max-width: 50%;
}
</style>
