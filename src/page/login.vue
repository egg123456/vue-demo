<template>
<el-container>
    <el-header class="text-center">
        <img src="../assets/logo.png">
        <h2>Now is {{now}},let's start with Vue </h2>
    </el-header>
    <el-main>
    <el-row class="text-center">
        <el-col :span="12" :offset="6">
            <label>name: <input v-model="name" placeholder="please input name"></label>
        </el-col>
        <el-col :span="12" :offset="6">
            <label>passwords: <input v-model="psw" placeholder="please input passwords"></label>
        </el-col>   
        <el-col :span="12" :offset="6" class="text-center">
                <button @click="lg" :style="css">
                    <span v-if="ok">点击登录</span>
                    <span v-else>{{tips}}</span>
                </button>
        </el-col>      
    </el-row>                        
    </el-main>
</el-container>
</template>

<script>
    export default {
        data(){
            return {
                now: (()=>{
                    var d = new Date();
                    return (''+d.getMonth()+'-'+d.getDate()+'-'+d.getFullYear());
                })(window),
                ok: false,
                name:'',
                psw:'',
                tips:'请先输入账号密码',
                css:'font-size:24px;background:skyblue;padding:8px;border-radius:8px;'
            }
        },
        methods:{
            lg:function(){
                if (this.name == 'admin' && this.psw == 'admin') {
                    this.ok = true
                    this.$router.push({ path: 'home', query: { name: this.name }});
                } else {
                    alert('用户名或密码错误')
                }
            }
            
        },
        watch : {
            name:function(val) {
                if(this.name&&this.psw){
                this.ok=true;
                }else this.ok=false;
            },
            psw : function (val) {              
                if(this.name&&this.psw){
                    this.ok=true;
                }else this.ok=false;
            }
        },
    }
</script>

<style>
    .text-center{
        text-align: center;
    }
    header{
        height:auto !important;
    }
    .bg{
        background:#ccc;
    }
    label{
        font-size:20px;
    }
    input{
        height:24px;
    }
    .el-col{
        padding-bottom:10px;
    }
</style>