import {boot} from 'quasar/wrappers'
import {Notify, scroll, useMeta} from "quasar";

export default boot(({app}) => {
  const createNotify = function (text, type = "positive", icon = null, position = "top") {
    Notify.create({
      message: text,
      type: type,
      icon: icon,
      position: position
    });
  }

  const scrollToElement = (element, includeOffset = 0, duration = 250) =>
    new Promise((resolve, reject) => {
      let {getScrollTarget, setVerticalScrollPosition} = scroll;

      let node = document.querySelector(element);
      let target = getScrollTarget(node);

      // let offset = node.offsetTop - node.scrollHeight + includeOffset;
      let offset = node.offsetTop + includeOffset;

      setVerticalScrollPosition(target, offset, duration);

      setTimeout(() => {
        resolve('Scroll ended');
      }, duration);
    })

  const animateDOM = (element, ...animationClasses) =>
    new Promise((resolve, reject) => {
      let node = document.querySelector(element);

      node.classList.add(...animationClasses);

      //动画执行结束后删除该动画 class
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(...animationClasses);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const getLength = (str) => {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      count += str.charCodeAt(i) < 256 ? 1 : 2;
    }
    return count;
  }

  const getLanguage = () => {
    return app.config.globalProperties.$i18n.locale;
  }

  const updateMeta = (meta) => {
    useMeta(meta)
  }

  const updateMetaTitle = () => {
    let productName = process.env.PACKAGE.productName;
    let name = app.config.globalProperties.$t("GridHeaderTitle").replaceAll("/", "");

    updateMeta({
      title: `${name} :: ${productName}`
    })
  }

  app.config.globalProperties.$smart = {
    createNotify,
    scrollToElement,
    animateDOM,
    getLength,
    getLanguage,
    updateMeta,
    updateMetaTitle,
    fileToBase64,
  };
})
