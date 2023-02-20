<template>
  <div class="q-gutter-y-md">

    <SearchTable :grid="grid" :rows="games" :columns="columns"
                 col-classes="col-xs-12 col-sm-6 col-md-4" :ratio="2.14285"
                 data-to="fgiTo" :rows-per-page="6" table-search="true" title-key="FGISearch"></SearchTable>

  </div>
</template>

<script>
import SearchTable from "components/config/edit/dialog/SearchTable";

export default {
  name: "SearchFGI",
  components: {SearchTable},
  props: ["grid"],

  data() {
    return {
      gridData: this.grid.data ?? {},
      gridTemplate: this.grid.template,

      games: [],
    }
  },

  computed: {
    columns() {
      return [
        {name: "name", label: this.$t("GameName"), field: "name"},
        {name: "cover", label: this.$t("GameCover"), field: "cover"},
        {name: "desc", label: this.$t("GameDesc"), field: "desc"},
      ]
    }
  },

  methods: {
    /**
     * 根据站点语言更改为 FGI 支持的语言
     */
    parseLanguage() {
      let language = this.$smart.getLanguage();

      switch (language) {
        case "zh-cn":
          return "zh-cn";
        case "zh-tw":
          return "zh-tw";
        default:
          return "en";
      }
    },

    async getAllGames() {
      try {
        let fgiLang = this.parseLanguage();
        this.games = await this.$furryGamesIndex.getAllGames(fgiLang);
      } catch (e) {
        this.$smart.createNotify(this.$t("CantGetList"), "negative");
      }
    },
  },

  mounted() {
    this.getAllGames();
  }
}
</script>

<style scoped>

</style>
