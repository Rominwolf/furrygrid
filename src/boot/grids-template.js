import {boot} from 'quasar/wrappers'
import {ref} from "vue";

const basic = [
  {
    info: {name: "character", icon: "face", color: "red-10"},
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
    info: {name: "art", icon: "brush", color: "green-10"},
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
    info: {name: "game", icon: "sports_esports", color: "indigo-10"},
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
    info: {name: "movie", icon: "movie", color: "orange-10"},
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
];
const full = [
  {
    info: {name: "character", icon: "face", color: "red-10"},
    items: [
      {
        nonce: "最喜欢的兽人", //最喜欢的角色 角色 出自
        title: "CharacterFavourite",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "最有的聊的兽人", //最喜欢的角色 角色 出自
        title: "CharacterTalk",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "最想和这位兽人发展恋爱关系", //最喜欢的角色 角色 出自
        title: "CharacterLove",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "生来就是为了这位兽人", //最喜欢的角色 角色 出自
        title: "CharacterBorn",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "最有创作欲望的兽人", //最喜欢的角色 角色 出自
        title: "CharacterCreative",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },

      {
        nonce: "最长情的兽人", //最喜欢的角色 角色 出自
        title: "CharacterForever",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "最惊艳的兽人", //最喜欢的角色 角色 出自
        title: "CharacterAmazing",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "第一眼就看上这位兽人", //最喜欢的角色 角色 出自
        title: "CharacterFirst",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
      {
        nonce: "最喜欢的兽人种族", //最喜欢的角色 角色 出自
        title: "CharacterSpecies",
        hasSubtitle: true, subTitleTitle: "Species",
      },
      {
        nonce: "用的第一款兽人头像", //最喜欢的角色 角色 出自
        title: "CharacterHeadshot",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
      },
    ]
  },
  {
    info: {name: "art", icon: "brush", color: "green-10"},
    items: [
      {
        nonce: "最喜欢的兽人画作",
        title: "ArtFavourite",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },
      {
        nonce: "最喜欢的兽人画风",
        title: "ArtFavouriteStyle",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },
      {
        nonce: "最喜欢的兽人画师",
        title: "ArtFavouriteArtist",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },
      {
        nonce: "最有好感的兽人画师",
        title: "ArtLikeArtist",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },
      {
        nonce: "百看不腻的兽人画作",
        title: "ArtNeverTired",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },

      {
        nonce: "最有好感的兽人画风",
        title: "ArtLikeStyle",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },
      {
        nonce: "被这位兽人画师拉入坑",
        title: "ArtLetLove",
        hasSubtitle: true, subTitleTitle: "At", showSubtitleTitle: true,
      },
    ]
  },
  {
    info: {name: "game", icon: "sports_esports", color: "indigo-10"},
    items: [
      {
        nonce: "兽相关游戏：最喜欢的",
        title: "GameFavourite",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最想安利的",
        title: "GameLetsPlay",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：玩的第一款",
        title: "GameFirstPlay",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最期待的",
        title: "GameAwait",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "最喜欢的兽人游戏角色",
        title: "GameFavouriteCharacter",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        fgiTo: ["caption"],
        tip: "GameTip",
      },

      {
        nonce: "兽相关游戏：最惊艳的",
        title: "GameAmazing",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最快乐的",
        title: "GameHappy",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：玩最多次的",
        title: "GameTimes",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：玩的最爽的",
        title: "GameCantStop",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：玩的最受苦的",
        title: "GameSuffer",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },

      {
        nonce: "兽相关游戏：玩的最感动的",
        title: "GameEmotion",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最喜欢的剧情",
        title: "GamePlot",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最喜欢的画面",
        title: "GameScreen",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最喜欢的配乐",
        title: "GameMusic",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最喜欢的结局",
        title: "GameLikeEnding",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },

      {
        nonce: "兽相关游戏：最不喜欢的结局",
        title: "GameUnlikeEnding",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最治愈的",
        title: "GameHeal",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最致郁的",
        title: "GameDepress",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最被低估的",
        title: "GameLow",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：最被高估的",
        title: "GameHigh",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },

      {
        nonce: "兽相关游戏：最厌恶的",
        title: "GameDisgust",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：我咋会喜欢玩这个",
        title: "GameWhy",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：总有一天能玩完",
        title: "GameSomeday",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：爷青回",
        title: "GameLife",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：它好小众我好爱",
        title: "GameUnpopular",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },

      {
        nonce: "兽相关游戏：最影响我的",
        title: "GameAffect",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
      {
        nonce: "兽相关游戏：百玩不腻的",
        title: "GameDontTired",
        hasSubtitle: true, subTitleTitle: "GameName",
        fgiTo: ["subtitle"],
        tip: "GameTip",
      },
    ]
  },
  {
    info: {name: "movie", icon: "movie", color: "orange-10"},
    items: [
      {
        nonce: "兽相关影视：最喜欢的",
        title: "MovieFavourite",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最想安利的",
        title: "MovieLetsWatch",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：看的第一部",
        title: "MovieFirstWatch",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最期待的",
        title: "MovieAwait",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "最喜欢的兽人影视角色",
        title: "MovieFavouriteCharacter",
        hasSubtitle: true, subTitleTitle: "Character",
        hasCaption: true, captionTitle: "From", showCaptionTitle: true,
        movieTo: ["caption"],
        tip: "MovieTip",
      },

      {
        nonce: "兽相关影视：最惊艳的",
        title: "MovieAmazing",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最快乐的",
        title: "MovieHappy",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：玩最多次的",
        title: "MovieTimes",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：玩的最爽的",
        title: "MovieCantStop",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：玩的最受苦的",
        title: "MovieSuffer",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },

      {
        nonce: "兽相关影视：玩的最感动的",
        title: "MovieEmotion",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最喜欢的剧情",
        title: "MoviePlot",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最喜欢的画面",
        title: "MovieScreen",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最喜欢的配乐",
        title: "MovieMusic",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最喜欢的结局",
        title: "MovieLikeEnding",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },

      {
        nonce: "兽相关影视：最不喜欢的结局",
        title: "MovieUnlikeEnding",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最治愈的",
        title: "MovieHeal",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最致郁的",
        title: "MovieDepress",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最被低估的",
        title: "MovieLow",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：最被高估的",
        title: "MovieHigh",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },

      {
        nonce: "兽相关影视：最厌恶的",
        title: "MovieDisgust",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：我咋会喜欢玩这个",
        title: "MovieWhy",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：总有一天能玩完",
        title: "MovieSomeday",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：爷青回",
        title: "MovieLife",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：它好小众我好爱",
        title: "MovieUnpopular",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },

      {
        nonce: "兽相关影视：最影响我的",
        title: "MovieAffect",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
      {
        nonce: "兽相关影视：百玩不腻的",
        title: "MovieDontTired",
        hasSubtitle: true, subTitleTitle: "MovieName",
        movieTo: ["subtitle"],
        tip: "MovieTip",
      },
    ]
  }
];

export default boot(({app}) => {
  app.config.globalProperties.$gridsTemplates = {
    data: ref([].concat(basic)),

    basic: basic,
    full: full,

    /**
     * 刷新显示的格子模板数据
     * @param mode 类型
     */
    refreshTemplate(mode) {
      let newTemplates = basic;
      if (mode === "full") newTemplates = full;

      this.data.value.length = 0;

      newTemplates.forEach(template => this.data.value.push(template));
    }
  }
})
