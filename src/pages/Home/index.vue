<template>
  <div>
    <!-- 三级联动组件，三级联动组件是全局组件，不需要引用，可以直接使用 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer/'
import Recommend from '@/pages/Home/Recommend/'
import Rank from '@/pages/Home/Rank/'
import Like from '@/pages/Home/Like/'
import Floor from '@/pages/Home/Floor/'
import Brand from '@/pages/Home/Brand/'
export default {
  mounted() {
    // 获取用户信息在首页展示
    this.$store.dispatch('getUserInfo')
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
}
</script>

<style lang="less" scoped></style>
