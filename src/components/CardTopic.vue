<template>
  <div
    :class="[
      mode == 'pc' ? 'list-card--pc' : 'list-card--mobile',
      opened ? 'list-card--opened' : '',
      content.selected ? 'list-card--selected' : ''
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
      this.$emit("handleSelectCard", this.content.id);
    }
  }
};
</script>
<style lang="less" scoped>
.list-card {
  border-bottom: none !important;
  position: relative;
  .card-title {
    font-weight: 500;
    color: #333;
    font-size: 17px;
    line-height: 1.78em;
    padding-bottom: 8px;
    padding-top: 30px;
    .title__content {
      color: #333;
      cursor: pointer;
      &:hover {
        color: #fc6a21;
        text-decoration: underline;
      }
    }
  }
  &.list-card--pc {
    .card-recommend {
      max-height: 110px;
      margin-bottom: 30px;
      overflow: hidden;
      transition: all ease 0.8s;
      .recommend__content {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
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
      .btn__content {
        font-size: 15px;
        color: #909090;
        &:hover {
          color: #fc6a21;
        }
      }
      &.card-btn--opened {
        max-height: 40px;
        height: 40px;
        color: #909090;
      }
    }
    &.list-card--opened {
      &.list-card--selected {
        position: relative;
        padding: 0 22px;
        border-radius: 8px;
        background-color: #fff;
        border-radius: 8px;
        position: relative;
        box-shadow: 0 4px 18px -4px rgba(0, 0, 0, 0.1);
        margin-left: -22px;
        margin-right: -22px;
        margin-top: -1px;
        z-index: 2;
        .recommend__content {
          color: #333;
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
    }
    &:before {
      content: "";
      pointer-events: none;
      box-sizing: border-box;
      border-bottom: 1px solid #e6e6e6;
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
  &.list-card--mobile {
    padding: 15px;
    border-radius: 2px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 18px -4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    z-index: 2;
    .card-title {
      line-height: 1.7em;
      padding-top: 0px;
      // position: relative;
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
        text-align: justify;
        color: #737373;
        font-size: 15px;
        line-height: 1.8em;
        cursor: pointer;
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
        max-height: 40px;
        height: 40px;
        line-height: 50px;
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
}
</style>
