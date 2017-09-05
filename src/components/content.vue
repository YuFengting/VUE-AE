<template>
  <div class="content">
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>
<style>
  .content{
    position: absolute;
    top:0px;
    bottom:50px;
    right:0px;
    left:0px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .main{
    overflow: hidden;
    padding: 0;
    margin: 0;
    /*background: #eee;*/
  }
</style>
<script>

</script>
