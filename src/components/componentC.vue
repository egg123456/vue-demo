<template>
  <div>
    C组件:
    <button @click="$store.commit('add',10)">加法</button>
    <button @click="$store.commit('reduce')">减法</button>
    <h3>{{$store.state.count}}--{{$store.state.count}}</h3>
    <h3>{{$store.state.number}}--{{$store.state.number}}</h3>
  </div>
</template>
<script>
  export default {

  }
</script>