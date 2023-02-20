import {boot} from 'quasar/wrappers'
import VueGtag from "vue-gtag"

export default boot(async ({app, router}) => {
  app.use(VueGtag, {
    config: {
      id: "G-0YQF8JB2H6"
    }
  }, router)
})
