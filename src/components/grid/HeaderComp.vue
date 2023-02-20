<template>
  <header class="flex justify-end q-py-lg q-mb-md">
    <div class="flex flex-1 items-center q-gutter-x-sm">
      <div class="text-primary flex items-start q-col-gutter-x-sm">
        <a class="text-h1 text-weight-bolder text-uppercase">{{ $t("GridHeaderTitle").split("/")[0] }}</a>
        <a class="flex items-center text-h3 text-weight-bolder q-pt-sm">
          <a class="q-pr-sm">{{ $t("GridHeaderTitle").split("/")[1] }}</a>
          <q-icon size="40px" name="pets" color="primary" class="rotate-45"/>
        </a>
      </div>
    </div>

    <div class="absolute flex items-end q-mt-lg q-pt-xs">
      <div class="column items-end">
        <q-chip square>
          <q-avatar icon="edit" color="secondary" text-color="white"/>
          <a class="text-weight-bold">{{ $t("FillAuthor") }}</a>
          <a class="q-pl-xs">{{ owner }}</a>
        </q-chip>
        <div class="flex">
          <q-chip square size="sm">
            <q-avatar icon="table_rows" color="secondary" text-color="white"/>
            <a class="text-weight-bold">{{ $t("Mode") }}</a>
            <a class="q-pl-xs">{{ mode }}</a>
          </q-chip>
          <q-chip square size="sm">
            <q-avatar icon="schedule" color="secondary" text-color="white"/>
            <a class="text-weight-bold">{{ $t("FillDate") }}</a>
            <a class="q-pl-xs">{{ date }}</a>
          </q-chip>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "HeaderComp",

  data() {
    return {
      tableData: this.$gridsData.data.value[":TableData"],
    }
  },

  computed: {
    date() {
      let date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      return `${year}/${month}/${day}`;
    },
    owner() {
      let owner = this.tableData.owner;
      return owner !== null && owner !== undefined && owner !== "" ? owner : this.$t("Anonymous");
    },
    mode() {
      let mode = this.tableData.mode;

      if (mode === undefined) mode = "basic";

      return mode === "basic" ? this.$t("Basic") : this.$t("Full");
    }
  },

  methods: {},
}
</script>

<style scoped>

</style>
