<template>
  <div class="divb">
    <div class="div3">
      <header>
        <img @click="tap()" class="fanhui" src="../../../public/image/return.png">玩家福利
      </header>
      <p class="p">总计 ( 元 )</p>
      <p class="p1">{{ this.$store.state.zong }}</p>
    </div>
    <p class="tishi">
      温馨提示 ：发红包和抢红包流水达到1000-5000 返2% ; 5000-10000返3% ; 200000+ 返5% ,
      当天12点结算达到要求直接返到余额里
    </p>
    <div class="zirout">
      <router-link to="envelope" replace tag="p">
        <span>发包记录</span>
        <br>
        <strong>总计 ( {{ msg2 }} )</strong>
      </router-link>
      <router-link to="nvelope" replace tag="p">
        <span>抢包记录</span>
        <br>
        <strong>总计 ( {{ msg1 }} )</strong>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "9.99",
      bool: false,
      msg1: "234",
      msg2: "234"
    };
  },
  mounted() {
    this.$store.commit("footerTab", false);
    this.$store.commit("headerTab", true);
    this.$store.commit("header", "玩家福利");
    this.$store.commit("fanhui", true);
    this.http.post("/api/myWelfare_s").then(res => {
      if (res.code == 200) {
        console.log(res);
        this.msg1 = res.data.money2;
        this.msg2 = res.data.money1;
      }
    });
  },
  methods: {
    tap() {
      this.$router.replace({ name: "myhone" });
    },
    // 转账
    top() {
      console.log("转账");
    },
    // 转账记录
    zhuan() {
      this;
    }
  }
};
</script>
<style scoped>
.divb {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
}
.div3 {
  /* overflow: hidden; */
  background: url("../../assets/imgs/heady.png") no-repeat left;
  background-size: cover;
  position: relative;
  height: 2.4rem;
}
header {
  height: 0.88rem;
  width: 100%;
  position: fixed;
  top: 0;
  /* background: red; */
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.34rem;
  color: #fff;
  /* background: red; */
}
.zhuan {
  position: absolute;
  right: 0.3rem;
  font-size: 0.3rem;
}
.p {
  padding-top: 1.18rem;
  padding-left: 0.3rem;
  color: #fff;
  font-size: 0.24rem;
}
.p1 {
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  font-size: 0.38rem;
  color: #fff;
  font-weight: 700;
}
.fanhui {
  position: absolute;
  left: 0.3rem;
  width: 0.25rem;
  height: 0.4rem;
  top: 24%;
  z-index: 99;
}
.tishi {
  padding: 0.2rem 0.3rem;
  color: #f1941d;
  line-height: 0.4rem;
  background: #f5f5f5;
}
.zirout {
  height: 1.5rem;
  background: #fff;
  border-bottom: 2px solid #f5f5f5;
}
.zirout > p {
  display: inline-block;
  width: 50%;
  font-size: 0.3rem;
  color: #999;
  text-align: center;
  height: 90%;
  /* line-height: 1.5rem; */
}
.zirout > p > span {
  display: inline-block;
  padding-top: 0.4rem;
}
.zirout > p > strong {
  display: inline-block;
  padding-top: 0.1rem;
  /* background: red; */
  padding-bottom: 0.2rem;
}
.router-link-active > span {
  color: #f1941d;
}
.router-link-active > strong {
  color: #f1941d;
  border-bottom: 2px solid #f1941d;
}
</style>
