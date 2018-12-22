<template>
  <div class="text-center">
    <!--增加一个标题栏-->
    <el-header>{{title}}</el-header>
    <button @click="$store.commit('add',10)">加法</button>
    <button @click="$store.commit('reduce')">减法</button>
    <br/>
    <button @click="reduce">简写减法</button>
    <br/>
    <button @click="addAction">异步加法</button>
    <button @click="reduceAction">异步减法</button>
    <div><input v-model="n"></div>
    <h3>{{$store.state.count}}--{{count}}</h3>
    <h3>{{$store.state.number}}--{{n}}</h3>
    <componentC></componentC>
    <router-link to="/vx/ChildRouter">ChildRouter</router-link>
    <router-view></router-view>
    <foot></foot>
  </div>
  
</template>

<script>
  import store from '../store/store'
  import {mapState, mapMutations, mapGetters,mapActions} from 'vuex'
  import componentC from '../components/componentC.vue'
  import foot from '../components/foot.vue'
  export default {
    components: {componentC, foot},
    data(){
      return {
        title: 'vuex 使用实例',
      }
    },
    store,
    methods: {
      ...mapMutations(['reduce']),//简写的方法无法传递参数
      ...mapActions(['addAction','reduceAction'])

    },
    computed: {
      ...mapGetters(['m']),//扩展运算符 这样写了之后还能加入其余方法
      ...mapState(['count']),
      n: {
        get () {
          return this.$store.state.number
        },
        set (value) {
          this.$store.commit('update', value)
        }
      }
    }
  }
</script>

<style>

</style>