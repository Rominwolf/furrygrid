<template>
  <div class="q-gutter-y-md">
    <div class="text-h5">{{ $t("LocalChoose") }}</div>

    <div class="flex justify-end items-center">
      <div class="flex-1">{{ $t("Mode") }}</div>
      <q-option-group v-model="mode" :options="modesOption" color="primary" inline :model-value="mode"/>
    </div>

    <div class="flex justify-end items-center">
      <div class="flex-1">
        <div class="text-subtitle2">{{ $t("ImageDurability") }}</div>
        <div class="text-caption text-grey-8">{{ $t("ImageDurabilitySubtitle") }}</div>
        <div class="text-caption text-red-8">{{ $t("ImageDurabilityCaption") }}</div>
      </div>
      <q-toggle v-model="save" :model-value="save"/>
    </div>

    <q-file v-if="mode === 0"
            filled draggable="true" accept="image/*" :label="$t('UploadImageAndDraggable')"
            v-model="file" :model-value="file">
      <template v-slot:prepend>
        <q-icon name="attach_file"/>
      </template>
    </q-file>

    <q-input v-if="mode === 1"
             filled :label="$t('GetClipboard')"
             v-model="clipboard" :model-value="clipboard"
             @paste="onPaste" @keypress.enter="submit">
      <template v-slot:prepend>
        <q-icon name="assignment_ind"/>
      </template>
    </q-input>

    <div class="flex justify-end items-center">
      <div class="flex-1">
        <q-chip color="red-9" text-color="white" size="sm">
          <q-avatar icon="warning" text-color="white"/>
          {{ $t("TipUploadedImage") }}
        </q-chip>
      </div>

      <q-btn unelevated color="primary" size="md" class="float-right" :label="$t('Submit')" @click="submit"/>
    </div>

    <q-inner-loading :showing="loading"></q-inner-loading>
  </div>
</template>

<script>
export default {
  name: "SearchLocal",
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      loading: false,
      file: null,
      clipboard: null,
      name: "",
      mode: 0,
      save: true,
    }
  },

  computed: {
    modesOption() {
      return [
        {value: 0, label: this.$t("UploadImage")},
        {value: 1, label: this.$t("GetClipboard")},
      ]
    }
  },

  methods: {
    async submit() {
      this.loading = true;
      let imageData = null;

      try {
        if (this.save)
          imageData = await this.$smart.fileToBase64(this.file);
        else
          imageData = window.URL.createObjectURL(this.file);
      } catch (e) {
        this.$smart.createNotify(this.$t("CantSubmitResource"), "negative");
        this.loading = false;
        return;
      }

      this.gridData["image"] = imageData;

      this.$smart.createNotify(this.$t("SucceedSubmitResource"));
      this.loading = false;
    },

    onPaste(event) {
      const dT = event.clipboardData || window.clipboardData;

      //粘贴板里没有文件资源
      if (dT.files.length === 0)
        return this.$smart.createNotify(this.$t("ClipboardDontHasFile"), "negative");

      const file = dT.files[0];
      let type = file.type;
      let name = file.name;

      //文件资源不是图片
      if (!type.startsWith("image"))
        return this.$smart.createNotify(this.$t("ClipboardDoesntImage"), "negative");

      this.clipboard = name;
      this.file = file;
      this.$smart.createNotify(this.$t("SucceedGetClipboardImage"));
    }
  }
}
</script>

<style scoped>

</style>
