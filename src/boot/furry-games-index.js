import {boot} from 'quasar/wrappers';
import axios from "axios";

export default boot(async ({app}) => {
  const DomParser = require('dom-parser');
  const baseURL = "https://furrygames.top/";

  app.config.globalProperties.$furryGamesIndex = {
    template: {
      name: null,
      cover: null,
      desc: null
    },

    /**
     * 获取游戏列表
     * @param language 语言，默认 zh-cn
     */
    async getAllGames(language = "zh-cn") {
      let url = language + "/list.html";
      let response = await axios.get(url, {baseURL: baseURL});
      let html = response.data;

      return this.parseAllGames(html);
    },

    /**
     * 解析所有游戏
     * @param html 原生 HTML
     */
    parseAllGames(html) {
      let parser = new DomParser();
      let domRoot = parser.parseFromString(html);
      let domArticles = domRoot.getElementsByTagName("article");

      let games = [];
      domArticles.forEach(article => {
        let name = article.getElementsByClassName("game_name")[0]
          .childNodes[0].childNodes[0].text;
        let desc = article.getElementsByClassName("description")[0]
          .childNodes[0].text;

        let pictureLink = article.getElementsByTagName("img")[0]
          .getAttribute("src");
        let cover = baseURL + pictureLink;

        // games[name] = {name: name, cover: cover, desc: desc};
        games.push({name: name, cover: cover, desc: desc});
      })

      return games;
    }
  }
})
