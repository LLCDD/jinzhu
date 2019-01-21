<template>
  <div id="app">
    <div class="outter">
      <!--通用头部-->
      <!-- <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
        <wx-header :pageName="pageName"></wx-header>
      </header>-->
      <!-- <div id="header1" v-if="this.$store.state.headerTab"> -->
      <header id="header" v-if="this.$store.state.headerTab">
        <span v-if="this.$store.state.ld">
          <img @click="ldy()" class="ld" src="./assets/imgs/ld.png" alt>
        </span>
        <span v-if="this.$store.state.fanhui">
          <img @click="topy()" class="baozhu" src="../public/image/return.png" alt>
        </span>
        <span v-if="this.$store.state.fanhui3">
          <img @click="topy1()" class="baozhu" src="../public/image/return.png" alt>
        </span>
        <!-- <span class="sizeii">{{ this.$store.state.header }}</span> -->
        <!-- <span v-if="this.$store.state.tuijian" @click="tuijian" class="tuijian">推荐列表</span> -->
        {{ this.$store.state.header }}
      </header>
      <!-- </div> -->
      <!--搜索框 只在“微信”和“通讯录”页面下显示-->
      <!--四个门面页 “微信” “通讯录” “发现” “我”-->
      <section class="app-content">
        <!-- <transition
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutRight"
        >-->
        <router-view/>
        <!-- </transition> -->
      </section>
      <!--底部导航 路由 -->
      <footer class="app-footer" v-if="this.$store.state.footerTab">
        <wx-nav></wx-nav>
      </footer>
    </div>
  </div>
</template>
<script>
import mixin from "./mixin"; // 混合被单独放在 mixin.js 中管理
window.mixin = mixin; // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
import WxHeader from "@/components/common/wx-header";
import WxNav from "@/components/common/wx-nav";

export default {
  name: "app",
  components: {
    WxHeader,
    WxNav
  },
  data() {
    return {
      pageName: "",
      routerAnimate: false,
      enterAnimate: "", //页面进入动效
      leaveAnimate: "" //页面离开动效
    };
  },
  created() {},
  methods: {
    topy() {
      this.$router.go(-1);
    },
    ldy() {
      this.$router.push("/announcement");
    },
    tuijian() {
      console.log("tuijina");
    },
    topy1() {
      console.log("3");

      this.$router.replace("/clearance");
    }
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      if (toDepth === 2) {
        this.$store.commit("setPageName", to.name);
      }
      //同一级页面无需设置过渡效果
      if (to.meta.Athesamelevel) {
        return;
      }
      // this.enterAnimate =
      //   toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      // this.leaveAnimate =
      //   toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
    }
  },
  updated() {
    // 只要组件发生变化都会触发可用于切换组件时公共数据的刷新
    // this.$store.dispatch('newbalance')
  }
};
</script>


<style lang="scss">
// .action-block{
//   display: none !important;
// }
$material-icons-font-path: "~material-icons/iconfont/";
@import "material-icons/iconfont/material-icons.scss";
@import "./assets/css/toast.css";
@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/wx-header.css";
/*阿里 fonticon*/
@import "assets/css/lib/iconfont.css";
/*过渡效果需要的动画库*/
@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/
@import "assets/css/lib/weui.min.css";
.app-content {
  // min-height: 100%;
  // background: url("./assets/imgs/background.png") no-repeat top;
}
#header {
  // margin-top: 0.44rem;
  // height: 0.88rem;
  height: 1.32rem;
  padding-top: 0.44rem;
  width: 100%;
  background: url("./assets/imgs/background.png") no-repeat left;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.38rem;
  color: #fff;
  z-index: 9999;
}
// #header {
//   height: 0.88rem;
//   position: absolute;
//   text-align: center;
//   bottom: 0;
//   width: 100%;
// }
// .sizeii {
//   position: absolute;
//   background: red;
//   left: 40%;
//   // width:
// }
.ld {
  height: 0.34rem;
  width: 0.34rem;
  position: absolute;
  left: 0.3rem;
  bottom: 0.26rem;
}
.baozhu {
  width: 0.25rem;
  height: 0.4rem;
  // margin: 0.26rem 0 0 0.3rem;
  position: absolute;
  bottom: 0.26rem;
  left: 0.3rem;
  z-index: 9;
}
.tuijian {
  font-size: 0.3rem;
  position: absolute;
  right: 0.3rem;
}
</style>
