<template>
  <div class="div5">
    <div class="tixiany">
      <span>提现金额</span>
      <span>
        <input class="input" type="text" placeholder="0.00">元
      </span>
    </div>
    <p class="yuey">我的余额 ：￥{{money}}</p>
    <div @click="bool()" class="ali" :class="{ 'classy' : class1 }">
      <img src="../../assets/imgs/zhifub.png" alt>
      <span>提现到支付宝</span>
      <span style="color:#999999">{{ bao }}</span>
    </div>
    <div @click="bool1()" class="cardt" :class="{ 'classy' : !class1 }">
      <img src="../../assets/imgs/yingh.png" alt>
      <span>提现到银联卡</span>
      <span style="color:#999999">{{ ka }}</span>
    </div>
    <p class="p2">提现说明 ：20元起提现 , 手续费为1%</p>
    <button class="button2">立即提现</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "提现页面",
      money: "1000.00",
      bao: "还没绑定支付宝",
      ka: "已绑定银联卡",
      class1: true
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("header", "提现");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
  },
  methods: {
    bool() {
      this.class1 = true;
    },
    bool1() {
      this.class1 = false;
    }
  }
};
</script>
<style scoped>
.div5 {
  min-height: 100%;
  padding: 0 0.3rem;
  padding-top: 0.88rem;
  background: #f5f5f5;
}
.tixiany {
  width: 100%;
  height: 0.9rem;
  border-radius: 5px;
  background: #fff;
  margin-top: 0.3rem;
  padding-left: 0.3rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding-right: 0.3rem;
}
.input {
  /* background: red; */
  width: 1rem;
  line-height: 0.8rem;
}
.yuey {
  height: 0.9rem;
  line-height: 0.9rem;
  color: #f1941d;
  padding-left: 0.3rem;
  font-size: 0.3rem;
}
.ali {
  width: 100%;
  position: relative;
  height: 0.9rem;
  background: #fff;
  border-radius: 5px;
  padding-left: 0.9rem;
  display: flex;
  padding-right: 0.3rem;
  justify-content: space-between;
  line-height: 0.9rem;
  font-size: 0.3rem;
}
.ali > img {
  height: 54%;
  position: absolute;
  left: 0.3rem;
  top: 23%;
}
.cardt {
  width: 100%;
  position: relative;
  height: 0.9rem;
  background: #fff;
  border-radius: 5px;
  padding-left: 0.9rem;
  display: flex;
  padding-right: 0.3rem;
  justify-content: space-between;
  line-height: 0.9rem;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
.cardt > img {
  height: 54%;
  position: absolute;
  left: 0.3rem;
  top: 23%;
}
.classy {
  border: 1px solid #f1941d;
}
.p2 {
  color: #999999;
  font-size: 0.26rem;
  margin-top: 0.2rem;
  padding-left: 0.3rem;
}
.button2 {
  height: 0.8rem;
  width: 86%;
  background: #f1941d;
  color: #fff;
  margin-left: 7%;
  margin-top: 0.6rem;
  border-radius: 0.5rem;
}
</style>
