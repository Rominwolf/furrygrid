<template>
  <q-table grid :title="$t(titleKey)" :rows="rows" :columns="columns"
           :hide-bottom="rows.length <= rowsPerPage"
           class="search-table"
           row-key="name" :filter="search" hide-header :pagination="pagination">

    <template v-if="tableSearch" v-slot:top-right>
      <q-input filled dense debounce="300" v-model="search" :placeholder="$t('Search')">
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
      </q-input>
    </template>

    <template v-slot:item="props">
      <div class="q-pa-xs" :class="colClasses">
        <q-card flat bordered class="cursor-pointer" @click="secondConfirm(props.row, dataTo)">
          <q-card-section class="q-pa-none">
            <q-img crossorigin="anonymous" referrerpolicy="no-referrer" fit="contain" :ratio="ratio"
                   class="bg-grey-3"
                   :src="props.row.cover">
              <template v-slot:error>
                <div class="full-height full-width column justify-center content-center bg-red-3 text-grey-9">
                  <q-icon name="error" size="xl" class="self-center"/>
                  <div class="text-subtitle2">{{ $t("CantLoadImage") }}</div>
                </div>
              </template>
            </q-img>

            <div class="q-pa-xs q-px-sm">
              <div class="text-subtitle2 text-weight-bold">{{ props.row.name }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </template>

  </q-table>

  <q-dialog v-model="dialogConfirm">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ $t("SecondConfirm") }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-gutter-y-sm column">
        <div class="text-weight-bold text-subtitle2">{{ $t("SubmitOption") }}</div>
        <q-checkbox :label="$t('UpdateToCover')"
                    v-model="submitOptions.cover" :model-value="submitOptions.cover"/>
        <q-checkbox :label="$t('UpdateToSubtitle')"
                    v-model="submitOptions.subtitle" :model-value="submitOptions.subtitle"/>
        <q-checkbox :label="$t('UpdateToCaption')"
                    v-model="submitOptions.caption" :model-value="submitOptions.caption"/>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat color="primary" :label="$t('Cancel')" v-close-popup/>
        <q-btn unelevated color="primary" :label="$t('Submit')" v-close-popup="2" @click="submit"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {ref} from "vue";

export default {
  name: "SearchTable",

  props: ["grid",
    "rows", "columns",
    "dataTo", "rowsPerPage", "titleKey", "tableSearch",
    "colClasses", "ratio"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      pagination: {
        rowsPerPage: this.rowsPerPage,
      },

      submitOptions: {
        cover: true,
        subtitle: false,
        caption: false
      },

      search: ref(""),

      choose: null,

      dialogConfirm: false,
    }
  },

  methods: {
    secondConfirm(data, dataTo) {
      this.choose = data;

      let gridTemplate = this.gridTemplate;
      let fgiTo = gridTemplate[dataTo] ?? [];
      fgiTo.forEach(to => {
        this.submitOptions[to] = true;
      })

      this.dialogConfirm = true;
    },

    submit() {
      let cover = this.choose.cover;
      let name = this.choose.name;

      //提交选项
      Object.keys(this.submitOptions).forEach(key => {
        let value = this.submitOptions[key];

        if (!value) return;

        if (key === "cover") {
          this.gridData["image"] = cover;
          return;
        }

        let gridInnerKey = `${key}Content`;
        this.gridData[gridInnerKey] = name;
      });

      this.$smart.createNotify(this.$t("SubmittedInfo"));
    }
  }
}
</script>

<style>
.search-table > .q-table__top {
  padding: 0;
}
</style>
