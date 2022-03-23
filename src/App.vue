<template>
  <div class="container-app">
    <Header></Header>
    <router-view></router-view>
    <!-- Footer在Home、Search中是显示的，在登录和注册页面时候是隐藏的 -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer/'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 通知vuex发送请求，获取数据，存储与仓库当中
    this.$store.dispatch('categoryList')
  },
}
</script>

<style></style>
