<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="c1 in categoryList"
                :key="c1.categoryList"
              >
                <h3>
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二、三级分类 -->
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <!-- 三级联动 -->
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TypeNav',
  // 组件挂在完毕，向服务器发送请求
  data() {
    return {
      // 组件在Search中是否显示
      isShow: true,
    }
  },
  mounted() {
    // 组件在Search中是否显示
    if (this.$route.path !== '/home') {
      this.isShow = false
    }
  },
  methods: {
    //进行路由跳转的方法
    goSearch(event) {
      // 最好的解决方案：自定义属性 + 事件委派 + 编程式导航
      // 存在的问题：把全部的子节点（h3 dt dl em）的事件委派给父节点
      // 点击a标签的时候，才会进行路由的跳转（怎么能确定点击的一定是a标签）
      // 存在另一个问题：即使你能确定是标签，如何区分是一级、二级、三级分类的标签

      // 第一个问题：把子节点中的a标签，加上自定义属性 data-categoryName
      // console.log(event.target)
      let element = event.target
      // 获取当前出发这个事件的节点（h3 a dt dl），需要带有data-categoryname 这样节点（一定是a标签）
      // 节点有一个属性dataset属性，可以获取节点的自定义属性与属性值
      // console.log(element.dataset)
      let { categoryname, category1id, category2id, category3id } =
        element.dataset
      //如果标签身上拥有categoryname一定是a标签
      if (categoryname) {
        // 整理路由跳转参数
        let location = { name: 'search' }
        let query = { categoryName: categoryname }
        if (category1id) {
          // 1级标签
          query.category1id = category1id
        } else if (category2id) {
          // 2级标签
          query.category2id = category2id
        } else {
          //3级标签
          query.category3id = category3id
        }
        // 整理完参数
        // 路由跳转
        // 判断如果页面有params参数，就将他一起传过去
        if (this.$route.params) {
          location.params = this.$route.params
          location.query = query
          console.log(location)
          this.$router.push(location)
        }
      }
    },
    // 鼠标移入，显示商品分类
    enterShow() {
      this.isShow = true
    },
    // 鼠标移出,隐藏商品分类,在home路由中不能隐藏需要写判断条件
    leaveShow() {
      if (this.$route.path !== '/home') {
        this.isShow = false
      }
    },
  },
  computed: {
    ...mapState({
      // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧的函数会立即执行一次
      // 注入一个参数state，其中即为大仓库的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
}
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }

        .item:hover {
          background: skyblue;
        }
      }
    }

    // 过渡动画样式
    // 过渡动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }

    // 过度动画结束状态（结束）
    .sort-enter-to {
      height: 461px;
    }

    // 定义动画时间 速率
    .sort-enter-active {
      transition: all 0.2s;
    }
  }
}
</style>
