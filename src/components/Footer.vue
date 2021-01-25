<template>
  <div class="page-footer">
    <div class="copy-right">沪ICP备16044754号-3</div>
  </div>
</template>
<style lang="less" scoped>
.page-footer {
  height: 80px;
  width: 100%;
  background-color: #fff;
  position: relative;
  line-height: 80px;
  font-size: 14px;
  color: #333;
  text-align: center;
  .copy-right {
    font-size: 14px;
    color: #999;
    margin-left: 23px;
    text-decoration: none;
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
</style>
