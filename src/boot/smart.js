import {boot} from 'quasar/wrappers'
import {Notify, scroll, useMeta} from "quasar";

export default boot(({app}) => {
  /**
   * 创建一个通知窗口
   * @param text 内容
   * @param type 类型
   * @param icon 图标
   * @param position 位置
   */
  const createNotify = function (text, type = "positive", icon = null, position = "top") {
    Notify.create({
      message: text,
      type: type,
      icon: icon,
      position: position
    });
  }

  /**
   * 滚动到指定元素
   * @param element DOM
   * @param includeOffset 附加偏移量
   * @param duration 所需时间
   */
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

  /**
   * 为指定元素添加动画
   * @param element DOM
   * @param animationClasses 添加的动画 class
   */
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

  /**
   * 文件转 B64
   * @param file 文件
   */
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  /**
   * 字符串长度（中文2字符）
   * @param str 字符串
   * @return {number} 长度
   */
  const getLength = (str) => {
    let count = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      count += str.charCodeAt(i) < 256 ? 1 : 2;
    }
    return count;
  }

  /**
   * 获取当前所用语言
   */
  const getLanguage = () => {
    return app.config.globalProperties.$i18n.locale;
  }

  /**
   * 更新网站的 Meta 数据
   */
  const updateMeta = (meta) => {
    useMeta(meta)
  }

  /**
   * 更新网站的标题
   */
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
