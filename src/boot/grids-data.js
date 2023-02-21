import {boot} from 'quasar/wrappers'
import {ref, toRaw} from "vue";
import localforage from "localforage";
import {LocalStorage} from "quasar";

export default boot(async ({app}) => {
  let data = {};

  /*
    || --------------- 模板数据 --------------- ||
    {
      title: "/生来就是为了/这位兽人",      <--- 大标题（通过“/”分割行，至多支持2行）

      hasSubtitle: true,                <--- 是否有副标题（第二行）
      showSubtitleTitle: false,         <--- 是否展示副标题的左侧标题
      subtitleTitle: "string",          <--- 副标题的左侧标题

      hasCaption: false,                <--- 是否有说明栏（第三行）
      showCaptionTitle: false,          <--- 是否展示说明栏的左侧标题
      captionTitle: "string",           <--- 说明栏的左侧标题

      fgiTo: ["subtitle", "caption"],   <--- 兽人控游戏索引的预提交选项
      movie: ["subtitle", "caption"],   <--- 电影类的预提交选项
      tip: "字符串",                     <--- 放置在最前面的提示栏
    }

    || --------------- 动态数据 --------------- ||
    {
      "CharacterFavourite": {
        image: "string",                <--- 封面图数据
        subtitleContent: "string",      <--- 副标题内容
        captionContent: "string",       <-   说明栏内容
      }
    }
  */

  /**
   * 表数据
   */
  const tableDataTemplate = {
    customize: false,
    owner: "",
    mode: "basic",
    classTitleStyle: 0,
    footerShowLink: true,
  }

  /**
   * 基础格子数据模板
   */
  const gridsBasicDataTemplate = [
    {
      info: {
        name: "character",
        icon: "face",
      },
      items: [
        {
          title: "CharacterFavourite", //最喜欢的角色 角色 出自
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        },
        {
          title: "CharacterTalk", //最有的聊的角色 角色 出自
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        },
        {
          title: "CharacterLove", //最想和这个兽人角色恋爱 角色 出自
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        },
        {
          title: "CharacterBorn", //生来就是为了TA 角色 出自
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        },
        {
          title: "CharacterCreative", //最有创作欲望的角色 角色 出自
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        },
      ]
    },
    {
      info: {name: "art", icon: "image",},
      items: [
        {
          title: "ArtFavourite", //最喜欢的画作 作者
          hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
        },
        {
          title: "ArtFavouriteStyle", //最喜欢的画风 作者
          hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
        },
        {
          title: "ArtFavouriteArtist", //最喜欢的画师
          hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
        },
        {
          title: "ArtLikeArtist", //最有好感的画师
          hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
        },
        {
          title: "ArtNeverTired", //百看不腻的画作
          hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
        },
      ]
    },
    {
      info: {name: "game", icon: "sports_esports",},
      items: [
        {
          title: "GameFavourite", //最喜欢的游戏 游戏名
          hasSubtitle: true, subTitleTitle: "GameName",
          fgiTo: ["subtitle"],
          tip: "GameTip",
        },
        {
          title: "GameLetsPlay", //最想安利的游戏 游戏名
          hasSubtitle: true, subTitleTitle: "GameName",
          fgiTo: ["subtitle"],
          tip: "GameTip",
        },
        {
          title: "GameFirstPlay", //玩的第一款游戏 游戏名
          hasSubtitle: true, subTitleTitle: "GameName",
          fgiTo: ["subtitle"],
          tip: "GameTip",
        },
        {
          title: "GameAwait", //今年最期待的游戏 游戏名
          hasSubtitle: true, subTitleTitle: "GameName",
          fgiTo: ["subtitle"],
          tip: "GameTip",
        },
        {
          title: "GameFavouriteCharacter", //最喜欢的游戏角色 角色 游戏名
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
          fgiTo: ["caption"],
          tip: "GameTip",
        },
      ]
    },
    {
      info: {name: "movie", icon: "movie",},
      items: [
        {
          title: "MovieFavourite", //最喜欢的影视 影视名
          hasSubtitle: true, subTitleTitle: "MovieName",
          movieTo: ["subtitle"],
          tip: "MovieTip",
        },
        {
          title: "MovieLetsWatch", //最想安利的影视 影视名
          hasSubtitle: true, subTitleTitle: "MovieName",
          movieTo: ["subtitle"],
          tip: "MovieTip",
        },
        {
          title: "MovieFirstWatch", //看的第一部影视 影视名
          hasSubtitle: true, subTitleTitle: "MovieName",
          movieTo: ["subtitle"],
          tip: "MovieTip",
        },
        {
          title: "MovieAwait", //今年最期待的影视 影视名
          hasSubtitle: true, subTitleTitle: "MovieName",
          movieTo: ["subtitle"],
          tip: "MovieTip",
        },
        {
          title: "MovieFavouriteCharacter", //最喜欢的影视角色 角色 影视名
          hasSubtitle: true, subTitleTitle: "Character",
          hasCaption: true, captionTitle: "From", showCaptionTitle: true,
          movieTo: ["caption"],
          tip: "MovieTip",
        },
      ]
    }
  ]

  /**
   * 数据库相关
   */
  const database = {
    templateDatabaseInfo: {
      name: "database",
      version: 1.0,
      storeName: `grids`,
    },

    databaseGrids: null,

    /**
     * 初始化数据库
     */
    init() {
      this.databaseRefresh(false);
    },

    /**
     * 刷新数据库到指定语言版本
     */
    async databaseRefresh(asRefresh = true) {
      let language = app.config.globalProperties.$smart.getLanguage();
      let separate = LocalStorage.getItem("separateGridsData") ?? false;

      let databaseInfo = database.templateDatabaseInfo;

      //如果分离数据：
      if (separate) databaseInfo["storeName"] = `${language}_grids`;
      else databaseInfo["storeName"] = `grids`;

      this.databaseGrids = localforage.createInstance(databaseInfo);

      //如果为手动刷新：
      if (asRefresh) {
        app.config.globalProperties.$gridsData.removeAllGridsData()
      }

      init.start();

      database.databaseLoadingGridsData();
    },

    /**
     * 更新数据库的格子动态数据
     * @param key 键
     * @param value 值
     */
    databaseGridPut(key, value) {
      return this.databaseGrids.setItem(key, value).then(function () {
        return true;
      }).catch(function (err) {
        console.error(err);
        return false;
      });
    },

    /**
     * 更新数据库内所有格子的动态数据（差集）
     */
    async databaseGridsPutAll() {
      let oldGridsData = this.databaseGetAllGridsData();
      let newGridsData = toRaw(app.config.globalProperties.$gridsData.data.value);

      await Object.keys(newGridsData).forEach(key => {
        let oldGridData = oldGridsData[key];
        let newGridData = newGridsData[key];

        let oldGridDataJson = JSON.stringify(oldGridData);
        let newGridDataJson = JSON.stringify(newGridData);

        //如果两个表数据一样则跳过
        if (oldGridDataJson === newGridDataJson) return;

        //否则更新数据
        this.databaseGridPut(key, newGridData);
      })
    },

    /**
     * 获取所有格子动态数据
     * @return object {"Characters": {...}, ...}
     */
    databaseGetAllGridsData() {
      let result = {};

      return this.databaseGrids.iterate(function (value, key) {
        result[key] = value;
      }).then(function () {
        return result;
      }).catch(function (err) {
        console.error(err);
        return result;
      });
    },

    /**
     * 异步通过数据库更新格子的动态数据
     */
    databaseLoadingGridsData() {
      database.databaseGetAllGridsData()
        .then(success => {
          //遍历外部数据
          Object.keys(success).forEach(outerKey => {
            let outerData = success[outerKey];

            //如果外框数据无内容则跳过
            if (!outerData) return;

            //遍历内部数据，并更新每条内容
            Object.keys(outerData).forEach(innerKey => {
              app.config.globalProperties.$gridsData.data.value[outerKey][innerKey] = outerData[innerKey];
            });
          });
        });
    }
  }

  /**
   * 初始化
   */
  const init = {
    start() {
      this.initTableData();
      this.initGridsData();
    },
    initGridsData() {
      let mixinGridsTemplates = [].concat(gridsBasicDataTemplate);

      //遍历 classesGrids
      mixinGridsTemplates.forEach(mixinGridsTemplate => {
        let gridsTemplate = mixinGridsTemplate.items;

        //遍历 grids
        gridsTemplate.forEach(gridTemplate => {
          let title = gridTemplate.title;

          //如果该 gridKey 已存在于 data 则跳过
          if (title in data) return;

          //否则添加 gridKey
          data[title] = {};
        })
      })
    },
    initTableData() {
      let field = ":TableData";

      //如果表数据不存在则添加并返回
      if (!(field in data)) {
        data[field] = tableDataTemplate;
        return;
      }

      //否则尝试并集
      Object.keys(tableDataTemplate).forEach(key => {
        if (key in data[field]) return;

        data[field][key] = tableDataTemplate[key];
      });
    },
  }

  init.start();
  database.init();

  app.config.globalProperties.$gridsData = {
    data: ref(data),

    template: {
      basic: gridsBasicDataTemplate
    },

    database: database,

    /**
     * 获取所有数据
     */
    getAllData() {
      return this.data;
    },

    /**
     * 写入数据并发送更新事件
     * @param newData
     */
    setData(newData) {
      this.data = ref(newData);
    },

    /**
     * 删除指定格子的所有数据
     * @param gridKey 格子Key
     */
    removeGridDataAsKey(gridKey) {
      let data = this.getAllData().value;

      let gridData = data[gridKey];
      Object.keys(gridData).forEach(key => {
        gridData[key] = undefined;
      });

      data[gridKey] = gridData;
      this.setData(data);
    },

    /**
     * 删除所有格子的数据
     */
    removeAllGridsData() {
      Object.keys(this.data.value).forEach(key => {
        this.removeGridDataAsKey(key);
      })
    }
  }

})
