<template>
  <div class="q-gutter-y-md">
    <div class="full-width">
      <q-input filled dense :label="$t('Search')"
               v-model="name" :model-value="name"
               @keypress.enter="search">
        <template v-slot:append>
          <q-btn round dense flat icon="search" @click="search"/>
        </template>
      </q-input>
    </div>

    <SearchTable :grid="grid" :rows="movies" :columns="columns"
                 col-classes="col-xs-6 col-sm-3 col-md-2-point5"
                 :ratio="27/40" :rows-per-page="10"
                 data-to="movieTo" title-key="ImdbSearch">
    </SearchTable>

    <q-inner-loading :showing="loading"></q-inner-loading>
  </div>
</template>

<script>
import SearchTable from "components/config/edit/dialog/SearchTable";

export default {
  name: "SearchImdb",
  components: {SearchTable},
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      loading: false,
      movies: [],
      name: "",
    }
  },

  computed: {
    columns() {
      return [
        {name: "name", label: this.$t("MovieName"), field: "name"},
        {name: "cover", label: this.$t("MovieCover"), field: "cover"},
        {name: "id", label: "#", field: "desc"},
      ]
    }
  },

  methods: {
    async search() {
      this.loading = true;

      try {
        this.movies = await this.$imdb.search(this.name);
      } catch (e) {
        console.log(e)
        this.$smart.createNotify(this.$t("CantGetList"), "negative");
      }

      this.loading = false;
    },
  },
}
</script>

<style scoped>

</style>
