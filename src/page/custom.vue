<template>
<el-container>
    <el-header class="text-center">custom</el-header>
    <div class="text-center">
        <h2>filters</h2>
        <el-row>
            <el-col :span="12">        
                <span>{{str}}</span><br/><br/>
                <span>{{str|capitalize}}</span><br/>
                <span>{{str|uppercase}}</span><br/>
                <span>{{str|lowercase}}</span><br/>
            </el-col>
            <el-col :span="12">
                {{number}}<br/>
                <input v-model="num" placeholder="输入小数点位数"><br/>
                {{ number | currency('￥',num) }}<br/>
                {{ number | currency('$',num) }}<br/>
                {{ number | currency('￥$',num) }}<br/>
            </el-col>
        </el-row>
    </div>
    <foot></foot>
</el-container>
</template>

<script>
  import foot from '../components/foot.vue'
export default {
    components:{foot},
    data(){
        return {
            str:'helloWorld',
            number:123456789.01,
            num:''
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value && value !== 0) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        uppercase:function(value){
            return value.toUpperCase();
        },
        lowercase:function(value){
            return value.toLowerCase();
        },
        currency:function(value, _currency, decimals) {
            value = parseFloat(value);
            if (!isFinite(value) || !value && value !== 0) return '';
            _currency = _currency != null ? _currency : '$';
            decimals = decimals != null ? decimals : 2;
            var stringified = Math.abs(value).toFixed(decimals);
            var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
            var i = _int.length % 3;
            var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
            var _float = decimals ? stringified.slice(-1 - decimals) : '';
            var sign = value < 0 ? '-' : '';
            var digitsRE = /(\d{3})(?=\d)/g;
            return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
        }
    }
}
</script>

<style>
#foot{
    width:100%;
    position:fixed;
    bottom:0;
}
</style>