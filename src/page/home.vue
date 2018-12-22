<template>
    <el-container>
        <el-header style="line-height:60px;background:#409eff;" class="text-center"> 主页-{{$route.query.name}}</el-header>
        <el-main>
            <el-row>
                <el-col class="text-center" :span="16" :offset="4">
                    <h2>{{title[0]}}</h2>
                        <child v-bind:num="num" v-on:ctop="cp"></child>
                        <button @click="plus">父组件值num++</button>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="text-center" :span="16" :offset="4">
                    <h2>{{title[1]}}</h2>
                        <componentA></componentA>
                        <componentB></componentB>
                </el-col>
            </el-row>
        </el-main>
        <foot></foot>
    </el-container>
</template>

<script>
    import child from '../components/child'
    import componentA from '../components/componentA'
    import componentB from '../components/componentB.vue'
    import foot from '../components/foot.vue'
    export default {
        components: {
            child, componentA, componentB, foot
        },
        data(){
            return{
                title:['组件传值','bus传值'],
                num:1
            }
        },
        methods:{
            plus:function(){
                this.num++
            },
            cp:function(sum){
                this.num = sum;
            }
        }
    }
</script>

<style>

</style>