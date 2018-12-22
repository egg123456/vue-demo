<template>
  <div id="foot">
    <ul>
      <!--导航组件，通过传入'to'属性指定链接，<router-link>会被渲染成一个'<a>'标签-->
      <router-link :to="{path:'/home',query:{name:'eg'}}">
        <li>
          首页
        </li>
      </router-link>

      <router-link to="/vx">
        <li>
          vuex
        </li>
      </router-link>

      <router-link to="/custom">
        <li>
          custom
        </li>
      </router-link>

      <div style="clear: both"></div>
    </ul>
  </div>
</template>

<script>
  export default{}
</script>

<style scoped>
  ul {
    list-style: none;
    background-color: cornflowerblue;
    width: 100%;
  }

  ul li {
    width: 33%;
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: center;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  li:hover {
    background-color: #91a7ff;
  }

  li:active {
    background-color: #d0d9ff;
  }

</style>
