<template>
  <div class="flex q-pt-xl items-center q-gutter-x-sm">
    <div class="flex flex-1 column q-col-gutter-y-xs">
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

    <div class="flex column items-end text-right" style="width: 40%">
      <a class="text-h7">https://lab.wsm.ink/furrygrid</a>
      <a>{{ $t("FooterAdTitle") }}</a>
    </div>
    <q-img src="qrcode.svg" height="100px" width="100px" loading="eager"></q-img>
  </div>
</template>

<script>
export default {
  name: "FooterComp",

  data() {
    return {
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
