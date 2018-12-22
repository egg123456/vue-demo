<template>
  <div>
    子路由组件:
    <button @click="$store.commit('add',10)">加法</button>
    <button @click="$store.commit('reduce')">减法</button>
    <button @click="plus">组件内的plus</button>
    <h3>{{$store.state.count}}--{{$store.state.count}}--{{c}}</h3>
    <h3>{{$store.state.number}}--{{$store.state.number}}--{{n}}</h3>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        c:0,
        n:0,
      }
    },
    methods:{
      plus:function(){
        this.c++;
      }
    }
  }
</script>
