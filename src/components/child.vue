<template>
  <div style="background:skyblue; padding:5px;">
    <h2>child-component value={{num}}</h2>
    <input  v-model="num">
    <button @click='clickone'>请求的值+num=</button>
    <input v-model="sum">
    <button @click='clicktwo'>子组件将sum值传给父组件num</button>    
  </div>
</template>

<script>
  export default{
    props: {
      title: String,
      default: '默认标题',
      required:true,
      num:Number
    },
    data(){
      return {
        number: 11,
        sum:0,
        url: 'https://api.apiopen.top/EmailSearch',
        data: {
          number:1012002
        }
      }
    },
    methods:{
      clickone:function(){
        this.$http.post(this.url,this.data)
        .then(res => {
          console.log(res.data.code,this.num); //this.num 拿到prop传递来的值
          this.sum = this.num + res.data.code;              
        })
        .catch( err=> {
            console.log(err);                 
        })
      },
      clicktwo:function(){
        this.$emit('ctop',this.sum);
      }
    }
  }
</script>
