<template>
  <div
    :class="[
      opened ? 'list-card--opened' : '',
      mode == 'pc' ? 'list-card--pc' : 'list-card--mobile'
    ]"
    class="list-card"
    @click="handleOpenCard"
  >
    <div class="card-title">
      <a
        @click.stop=""
        :href="content.url"
        class="title__content"
        target="_blank"
        >{{ content.title }}</a
      >
    </div>
    <div
      class="card-recommend"
      :class="[opened ? 'card-recommend--opened' : '']"
    >
      <div class="recommend__content">
        <span>编辑推荐语：</span>
        {{ content.recommend }}
      </div>
    </div>
    <div class="card-btn" :class="[opened ? 'card-btn--opened' : '']">
      <a
        href="https://www.baidu.com"
        @click.stop=""
        class="btn__content"
        target="_blank"
      >
        阅读原文 ></a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    },
    mode: {
      type: String,
      default: "mobile"
    }
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    handleOpenCard() {
      this.opened = !this.opened;
    }
  }
};
</script>
<style lang="less" scoped>
.list-card {
  border-bottom: none !important;
  position: relative;
  padding: 0 22px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 4px 18px -4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  z-index: 2;
  .card-title {
    font-weight: 500;
    color: #333;
    font-size: 17px;
    line-height: 1.78em;
    padding-bottom: 8px;
    padding-top: 30px;
    cursor: pointer;
    position: relative;
    .title__content {
      display: block;
      text-align: justify;
      color: #333;
      cursor: pointer;
      &:hover {
        color: #fc6a21;
        text-decoration: underline;
      }
    }
  }
  .card-recommend {
    max-height: 110px;
    overflow: hidden;
    transition: all ease 0.8s;
    .recommend__content {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #737373;
      font-size: 15px;
      line-height: 1.8em;
      cursor: pointer;
      &:hover {
        color: #333;
      }
    }
    &.card-recommend--opened {
      max-height: 500px;
      position: relative;
      .recommend__content {
        display: block;
      }
    }
  }
  .card-btn {
    max-height: 0px;
    overflow: hidden;
    text-align: center;
    position: relative;
    .btn__content {
      font-size: 15px;
      color: #909090;
      &:hover {
        color: #fc6a21;
      }
    }
    &.card-btn--opened {
      max-height: 50px;
      height: 50px;
      line-height: 50px;
      color: #909090;
    }
  }
  &.list-card--opened {
    position: relative;
    padding: 0 22px;
    border-radius: 8px;
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 4px 18px -4px rgba(0, 0, 0, 0.1);
    z-index: 2;
    .recommend__content {
      color: #333;
    }
  }
  &.list-card--pc {
    padding: 0 22px 15px;
  }
  &.list-card--mobile {
    position: relative;
    padding: 20px 15px;
    background-color: #fff;
    margin-bottom: 16px;
    border-radius: 2px;
    z-index: 2;
    overflow: hidden;
    .card-title {
      padding: 0 0 8px;
      position: unset;
    }
    .card-recommend {
      &.card-recommend--opened {
        max-height: 500px;
        position: relative;
        .recommend__content {
          display: block;
        }
      }
    }
    .card-btn {
      position: relative;
      max-height: 0px;
      overflow: hidden;
      .btn__content {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 15px;
        color: #909090;
        overflow: hidden;
      }
      &.card-btn--opened {
        max-height: 50px;
        height: 50px;
        line-height: 60px;
        color: #909090;
        text-align: center;
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #d4d6d8;
      border-radius: 16px;
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
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #d4d6d8;
    border-radius: 16px;
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
</style>
