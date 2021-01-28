<template>
  <div class="layout">
    <div v-if="mode == 'pc'" class="page-header">
      <div class="header-content">
        <a href="" class="logo">
          <img src="" alt="" class="logo__img" />
        </a>
        <div class="title">产品深度精选</div>
        <div class="sub-title">
          给产品、运营、增长、营销和创业者提供人工精选文章
        </div>
        <div class="login" v-if="mode == 'pc'">登录</div>
      </div>
    </div>
    <div class="page-mainer">
      <div
        class="daily-page"
        :class="[mode == 'pc' ? 'daily-page--pc' : 'daily-page--mobile']"
      >
        <div class="list-container">
          <div class="list-header">
            <div class="header-inner">
              <div class="header-left">
                每日早报
              </div>
              <div class="header-right">
                <div class="header-date">{{ dateDisplay }}</div>
                <div class="header-week">{{ weekDisplay }}</div>
              </div>
            </div>
          </div>
          <div class="list-content">
            <template v-for="item in topics">
              <card-daily
                :key="item.id"
                :content="item"
                :mode="mode"
                @handleSelectCard="id => handleSelectCard(id)"
              ></card-daily>
            </template>
          </div>
        </div>
        <div v-if="mode === 'pc'" class="code-container">
          <div class="code-title">手机扫码阅读</div>
          <div class="code-img">
            <img src="" alt="" class="code-img__img" />
          </div>
        </div>
        <div v-if="mode == 'mobile' && !hasSubscribe" class="subscribe-btn">
          <div class="btn__content">
            <i class="el-icon-circle-plus"></i> 订阅明天早报
          </div>
        </div>
      </div>
    </div>
    <page-footer
      :class="[mode == 'pc' ? '' : 'page-footer--mobile']"
    ></page-footer>
  </div>
</template>
<script>
import { formatDate, formatWeek } from "@/Utils/date";
import CardDaily from "@/components/CardDaily";
import Footer from "@/components/Footer";

const topics = [
  {
    id: 1,
    title: "掌门教育已选定投行拟赴美 IPO，在线教育迎来上市潮",
    recommend:
      "在线教育公司掌门教育已选定两家外资投行冲击美国 IPO，承销商分别为摩根士丹利和瑞信，此次IPO募资金额将超3 亿美金这是继一起教育上市后的又 2 家在线教育公司，如果掌门教育和火花思维成功完成 IPO，则标志着在线教育企业将迎来上市潮，进一步标志教育行业进入一轮的上市周期成为一家专注为3-18岁孩子提供高品质在线定化教育服务的在线教育公司，旗下品牌包含了全学科教育品牌掌门 1 对 1 及综合素质教育掌门少儿、小狸 AI 等子品牌。",
    url: "https://readhub.cn/topic/83gksPjEmIk",
    selected: true
  },
  {
    id: 2,
    title: "游族网络与谷歌深化合作, 共促全球业务发展",
    recommend:
      "1 月 22 日，游族网络通过其微信公众号「YOOZOO」发文称，近日，游族网络与谷歌在上海就未来合作展开探讨 ... 双方达成共识，谷歌将进一步整合资源，从战略和技术等多个维度与游族网络合作，助力其在全球范围内业务的发展。",
    url: "https://readhub.cn/topic/83gksPjEmIk",
    selected: true
  },
  {
    id: 3,
    title: "游族网络与谷歌深化合作, 共促全球业务发展",
    recommend:
      "1 月 22 日，游族网络通过其微信公众号「YOOZOO」发文称，近日，游族网络与谷歌在上海就未来合作展开探讨 ... 双方达成共识，谷歌将进一步整合资源，从战略和技术等多个维度与游族网络合作，助力其在全球范围内业务的发展。",
    url: "https://readhub.cn/topic/83gksPjEmIk",
    selected: true
  }
];
export default {
  components: {
    "card-daily": CardDaily,
    "page-footer": Footer
  },
  data() {
    return {
      topics,
      mode: "pc",
      hasSubscribe: false,
      dateDisplay: "",
      weekDisplay: ""
    };
  },
  created() {
    const mql = window.matchMedia("(max-width:990px)");
    this.mode = mql.matches ? "mobile" : "pc";
    mql.addEventListener("change", this.mqlEvent);
    this.getTime();
  },
  methods: {
    getTime() {
      this.dateDisplay = formatDate();
      this.weekDisplay = formatWeek();
    },
    mqlEvent() {
      if (event.matches) {
        this.mode = "mobile";
      } else {
        this.mode = "pc";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  .page-header {
    height: 60px;
    background-color: #fff;
    border-bottom: none !important;
    position: relative;
    .header-content {
      width: 960px;
      margin: 0 auto;
      .logo {
        float: left;
        margin-right: 20px;
        margin-top: 11px;
        height: 38px;
        width: 38px;
        background-color: #fc6a21;
        .logo__img {
          width: 38px;
        }
      }
      .title {
        clear: left;
        display: inline-block;
        margin-right: 30px;
        vertical-align: top;
        height: 60px;
        line-height: 60px;
        font-weight: 500;
        font-size: 24px;
        color: #3b3d51;
      }
      .sub-title {
        clear: right;
        display: inline-block;
        vertical-align: top;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        color: #555555;
      }
      .login {
        float: right;
        display: block;
        line-height: 60px;
        position: relative;
        margin-left: 25px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.66);
        cursor: pointer;
      }
    }
    &:before {
      content: "";
      pointer-events: none;
      box-sizing: border-box;
      border-bottom: 1px solid #dcdcdc;
      height: 200%;
      width: 200%;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }
  .page-mainer {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .page-footer--mobile {
    margin-bottom: 80px;
  }
  .daily-page {
    width: 100%;
    display: flex;
    .list-container {
      position: relative;
      width: 624px;
      border: none;
      border-radius: 4px;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #e3e4e5;
        border-radius: 8px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
      }
    }
    .code-container {
      position: relative;
      top: 10px;
      margin-left: 48px;
      width: 204px;
      height: 219px;
    }
    .list-header {
      margin-top: 40px;
      margin-bottom: 34px;
      padding: 2px 0;
      border: solid #fc6a21;
      border-width: 2px 0;
      .header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        border: solid #fc6a21;
        border-width: 1px 0;
        .header-left {
          font-size: 30px;
          font-weight: 600;
          color: #fc6a21;
        }
        .header-right {
          .header-date {
            font-size: 14px;
            font-weight: 500;
            font-family: DIN-Medium;
            line-height: 1.29;
            color: #fc6a21;
          }
          .header-week {
            font-size: 14px;
            font-weight: 500;
            font-family: DIN-Medium;
            line-height: 1.34;
            text-align: right;
            color: #fc6a21;
          }
        }
      }
    }
  }
}
.daily-page {
  &.daily-page--pc {
    width: 960px;
    min-height: 900px;
    margin: 0 auto;
    padding: 38px 0;
    .list-container {
      padding: 0 57px;
      background-color: #fff;
      box-shadow: 0 8.5px 10px 0 rgba(0, 0, 0, 0.06);
      border: none;
      position: relative;
      border-radius: 4px;
    }
    .code-container {
      padding: 20px;
      background-color: #fff;
      overflow: hidden;
      text-align: center;
      box-shadow: 0 8.5px 10px 0 rgba(0, 0, 0, 0.06);
      position: relative;
      border-radius: 4px;
      .code-title {
        font-size: 16px;
        color: #afafaf;
        line-height: 1.78em;
        margin-bottom: 20px;
      }
      .code-img {
        height: 120px;
        width: 120px;
        background: #f5f5f5;
        margin: 0 auto;
        .code-img__img {
          width: 100%;
          height: 100%;
        }
      }
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #e3e4e5;
        border-radius: 8px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
      }
    }
  }
  &.daily-page--mobile {
    position: relative;
    .list-container {
      padding: 0 20px 40px;
      .list-header {
        margin: 20px 0;
      }
    }
    .subscribe-btn {
      position: fixed;
      bottom: 0;
      color: #fc6a21;
      width: 100%;
      height: 90px;
      padding-top: 20px;
      text-align: center;
      background-color: #fff;
      z-index: 100;
      .btn__content {
        width: 60%;
        height: 40px;
        line-height: 40px;
        margin: auto;
        border: 1px solid #fc6a21;
      }
      &:before {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        border-top: 1px solid #dcdcdc;
        height: 200%;
        width: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
    }
  }
}
</style>
