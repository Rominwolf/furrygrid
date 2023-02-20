<template>
  <div class="q-gutter-y-md">
    <div class="flex full-width">
      <q-btn v-if="page > 0" unelevated color="primary" icon="arrow_back"
             class="q-mr-md"
             @click="page--">
        <q-tooltip>{{ $t("PrevPage") }}</q-tooltip>
      </q-btn>

      <div class="col-grow">
        <q-input filled dense :label="$t('Search')"
                 v-model="name" :model-value="name"
                 @keypress.enter="search(true)">
          <template v-slot:append>
            <q-btn round dense flat icon="search" @click="search(true)"/>
          </template>
        </q-input>
      </div>

      <q-btn v-if="movies.length === 10" unelevated color="primary" icon="arrow_forward"
             class="q-ml-md"
             @click="page++">
        <q-tooltip>{{ $t("NextPage") }}</q-tooltip>
      </q-btn>
    </div>

    <SearchTable :grid="grid" :rows="movies" :columns="columns"
                 col-classes="col-xs-6 col-sm-3 col-md-2-point5" :ratio="27/40"
                 data-to="movieTo" :rows-per-page="10" title-key="DoubanSearch"></SearchTable>

    <q-inner-loading :showing="loading"></q-inner-loading>
  </div>
</template>

<script>
import SearchTable from "components/config/edit/dialog/SearchTable";

export default {
  name: "SearchDouban",
  components: {SearchTable},
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      loading: false,
      movies: [],
      name: "",
      page: 0,
    }
  },

  computed: {
    columns() {
      return [
        {name: "name", label: this.$t("MovieName"), field: "name"},
        {name: "cover", label: this.$t("MovieCover"), field: "cover"},
        {name: "rate", label: this.$t("MovieRate"), field: "rate"},
        {name: "id", label: "#", field: "id"},
      ]
    }
  },

  watch: {
    page() {
      this.search();
    }
  },

  methods: {
    async search(pageRestart = false) {
      this.loading = true;

      if (pageRestart) this.page = 0;

      try {
        this.movies = await this.$douban.search(this.name, this.page);
      } catch (e) {
        this.$smart.createNotify(this.$t("CantGetList"), "negative");
      }

      this.loading = false;
    },
  },
}
</script>

<style scoped>

</style>
