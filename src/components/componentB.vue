<template>
  <div>
    B组件:
    <input type="button" value="plus" @click="getData">
    <span>名：{{name}}</span>
  </div>
</template>
<script>
  import Bus from '../store/bus.js'
  export default {
    data () {
      return {
        name: 0
      }
    },
    created: function () {
      var vm = this
      Bus.$on('val', (data) => {
        console.log(data)
        vm.name = data
      })
    },
    methods: {
      getData: function () {
        this.name++
      }
    }
  }
</script>