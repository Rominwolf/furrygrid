import {boot} from 'quasar/wrappers';
import axios from "axios";

export default boot(async ({app}) => {
  const DomParser = require('dom-parser');
  const baseURL = "https://rominwolf.autocode.dev/redirect";
  const doubanBaseURL = "https://m.douban.com";

  app.config.globalProperties.$douban = {
    /**
     * 搜索指定名字并返回解析后的结果
     * @param name 名字
     * @param page 页（从0开始）
     * @return [{id, name, cover, rate}, ...]
     */
    async search(name, page) {
      let data = {
        method: "get",
        baseURL: doubanBaseURL,
        url: "/j/search",
        params: {q: name, t: 1002, p: page}
      };
      let response = (await axios.post(baseURL, data)).data;
      let html = response.data.html;

      return this.parseMovies(html);
    },

    parseMovies(html) {
      let parser = new DomParser();
      let domRoot = parser.parseFromString(html);
      let domArticles = domRoot.getElementsByTagName("li");

      let result = [];
      domArticles.forEach(node => {
        let href = node.getElementsByTagName("a")[0].attributes[0].value;
        let id = href.replace(/\D/g, "");

        let cover = node.getElementsByTagName("img")[0].attributes[0].value;

        let name = node.getElementsByClassName("subject-title")[0].innerHTML;

        let rateDOM = node.getElementsByClassName("rating-stars")[0];
        let rate = 0;
        if (rateDOM !== undefined)
          rate = rateDOM.attributes.find(e => e.name === 'data-rating').value / 10 ?? undefined;

        result.push({
          id: id,
          name: name,
          cover: cover,
          rate: rate,
        })
      })

      return result;
    }

  }

})
