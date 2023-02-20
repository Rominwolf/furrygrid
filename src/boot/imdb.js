import {boot} from 'quasar/wrappers';
import axios from "axios";

export default boot(async ({app}) => {
  const baseURL = "https://rominwolf.autocode.dev/redirect";
  const imdbBaseURL = "https://v3.sg.media-imdb.com";

  app.config.globalProperties.$imdb = {
    /**
     * 搜索指定名字并返回解析后的结果
     * @param name 名字
     * @return [{id, name, cover}, ...]
     */
    async search(name) {
      let data = {
        method: "get",
        baseURL: imdbBaseURL,
        url: `/suggestion/x/${name}.json`,
      };
      let response = (await axios.post(baseURL, data)).data;
      let json = response.data.d ?? [];

      return this.parseMovies(json);
    },

    parseMovies(movies) {
      let result = [];

      movies.forEach(movie => {
        let id = movie.id;
        let name = movie.l;

        let image = movie.i ?? {};
        let imageOrig = image.imageUrl ?? undefined;

        // let coverWidth = Math.floor((396 * movie.i.width) / movie.i.height);
        // let cover = imageOrig.replace(
        //   /[.]_.*_[.]/,
        //   `._V1_UY396_CR6,0,${coverWidth},396_AL_.`
        // );

        result.push({
          id: id,
          name: name,
          cover: imageOrig
        })
      })

      return result;
    }

  }

})
