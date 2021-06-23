<template>
  <div v-show="isShow" class="demo">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "sfDemo",
  props: {
    msg: {
      default: "",
      type: String
    },
    isShow: {
      default: false,
      type: Boolean
    }
  },
}

</script>
<style lang='scss' scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: #999999;
}
</style>