import {boot} from 'quasar/wrappers'
import {createI18n} from 'vue-i18n'
import messages from 'src/i18n'
import {LocalStorage} from "quasar";

export default boot(({app}) => {
  const getDefaultLang = () => {
    //用户指定了默认语言时，使用用户指定的
    if (LocalStorage.has("language")) {
      return LocalStorage.getItem("language");
    } else {
      //用户未指定时，根据游览器选择:
      switch (navigator.language) {
        case "zh-CN":
          return 'zh-cn';
        default:
          return "en";
      }
    }
  }

  const i18n = createI18n({
    locale: getDefaultLang(),
    globalInjection: true,
    legacy: false,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
