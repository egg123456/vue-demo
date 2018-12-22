<template>
  <div>
    A组件:
    <span>{{elementValue}}</span>
    <input type="button" value="点击触发A=>B" @click="elementByValue">
  </div>
</template>

<script>
  // 引入公共的bug，来做为中间传达的工具
  import Bus from '../store/bus.js'
  export default {
    data () {
      return {
        elementValue: 4
      }
    },
    methods: {
      elementByValue: function () {
        Bus.$emit('val', this.elementValue)
      }
    }
  }
</script>
