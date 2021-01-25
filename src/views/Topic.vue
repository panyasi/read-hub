<template>
  <div class="layout">
    <div
      class="page-header"
      :class="[mode == 'mobile' ? 'page-header--mobile' : 'page-header--pc']"
    >
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
        class="topic-page"
        :class="[mode == 'pc' ? 'topic-page--pc' : 'topic-page--mobile']"
      >
        <div class="list-container">
          <div class="subscribe-btn" v-if="mode == 'mobile'">
            <span v-if="!hasSubscribe">
              <i class="el-icon-circle-plus"></i>
              订阅明天早报
            </span>
            <span v-if="hasSubscribe">已订阅早报</span>
          </div>
          <div class="list-content">
            <div class="list-timeline">今天</div>
            <template v-for="item in topics">
              <card-topic
                :key="item.id"
                :content="item"
                :mode="mode"
                @handleSelectCard="id => handleSelectCard(id)"
              ></card-topic>
            </template>
          </div>
        </div>
        <div v-if="mode === 'pc'" class="code-container">
          <div class="code-title">关注服务号<br />订阅每日早报</div>
          <div class="code-img">
            <img src="" alt="" class="code-img__img" />
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
const topics = [
  {
    id: 1,
    title: "掌门教育已选定投行拟赴美 IPO，在线教育迎来上市潮",
    recommend:
      "在线教育公司掌门教育已选定两家外资投行冲击美国 IPO，承销商分别为摩根士丹利和瑞信，此次IPO募资金额将超3 亿美金这是继一起教育上市后的又 2 家在线教育公司，如果掌门教育和火花思维成功完成 IPO，则标志着在线教育企业将迎来上市潮，进一步标志教育行业进入一轮的上市周期成为一家专注为3-18岁孩子提供高品质在线定化教育服务的在线教育公司，旗下品牌包含了全学科教育品牌掌门 1 对 1 及综合素质教育掌门少儿、小狸 AI 等子品牌。",
    url: "https://readhub.cn/topic/83gksPjEmIk",
    selected: false
  },
  {
    id: 2,
    title: "游族网络与谷歌深化合作, 共促全球业务发展",
    recommend:
      "1 月 22 日，游族网络通过其微信公众号「YOOZOO」发文称，近日，游族网络与谷歌在上海就未来合作展开探讨 ... 双方达成共识，谷歌将进一步整合资源，从战略和技术等多个维度与游族网络合作，助力其在全球范围内业务的发展。",
    url: "https://readhub.cn/topic/83gksPjEmIk",
    selected: false
  }
];
import CardTopic from "@/components/CardTopic";
import Footer from "@/components/Footer";

export default {
  components: {
    "card-topic": CardTopic,
    "page-footer": Footer
  },
  data() {
    return {
      topics,
      mode: "pc",
      hasSubscribe: false
    };
  },
  created() {
    const mql = window.matchMedia("(max-width:990px)");
    this.mode = mql.matches ? "mobile" : "pc";
    mql.addEventListener("change", this.mqlEvent);
  },
  methods: {
    handleSelectCard(id) {
      this.topics.forEach(item => {
        if (item.id == id) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
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
    position: relative;
    background-color: #fff;
    border-bottom: none !important;
    &.page-header--pc {
      height: 60px;
      background-color: #fff;
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
    }
    &.page-header--mobile {
      border-bottom: none !important;
      padding: 0 15px;
      .header-content {
        .logo {
          float: left;
          margin-right: 20px;
          margin-top: 11px;
          height: 30px;
          width: 30px;
          background-color: #fc6a21;
          .logo__img {
            width: 30px;
          }
        }
        .title {
          clear: left;
          display: inline-block;
          margin-right: 30px;
          vertical-align: top;
          height: 50px;
          line-height: 50px;
          font-weight: 500;
          font-size: 20px;
          color: #3b3d51;
        }
        .sub-title {
          min-height: 40px;
          max-height: 60px;
          line-height: 30px;
          font-size: 13px;
          color: #555555;
        }
        .login {
          display: none;
        }
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
    .topic-page {
      width: 100%;
      display: flex;
      justify-content: space-between;
      &.topic-page--pc {
        width: 960px;
        min-height: 900px;
        margin: 0 auto;
        padding: 38px 0;
        .list-container {
          flex: 1;
          .list-timeline {
            height: 30px;
            margin-bottom: 6px;
            font-size: 24px;
            font-weight: 500;
            line-height: 30px;
            color: #fc6a21;
          }
        }
        .code-container {
          margin-left: 30px;
          width: 292px !important;
          display: flex;
          align-items: center;
          flex-direction: column;
          .code-title {
            font-size: 16px;
            color: #afafaf;
            line-height: 1.78em;
            margin-bottom: 10px;
          }
          .code-img {
            height: 120px;
            width: 120px;
            background: #f5f5f5;
            .code-img__img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      &.topic-page--mobile {
        .list-container {
          position: relative;
          padding: 15px;
          .subscribe-btn {
            position: absolute;
            right: 17px;
            top: 17px;
            color: #fc6a21;
          }
          .list-content {
            .list-timeline {
              height: 30px;
              margin-bottom: 6px;
              font-size: 20px;
              font-weight: 500;
              line-height: 30px;
              color: #fc6a21;
            }
          }
        }
      }
    }
  }
}
</style>
