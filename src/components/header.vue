<template>
  <header class="header" flex="box:justify">
    <slot name="left">
      <div class="item" flex="main:center cross:center"></div>
    </slot>
    <h2 class="title">{{ title }}</h2>
    <slot name="right">
      <div class="item" flex="main:center cross:center"></div>
    </slot>
  </header>

</template>
<style>
  .header {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10500;
    height: 49px;
    line-height: 49px;
    background: #ffa614;
    color: #fff;
  }
  .header .item {
    width: 50px;
  }
  .header  .title {
    overflow: hidden;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<script>
export default{
    props:{
        title:{
            type:String,
            defalut:''
        }
    }
}
</script>
