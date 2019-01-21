<template>
  <div class="divup">
    <div class="chongzhi">
      <span>充值金额</span>
      <div>
        <input type="text" placeholder="0.00" v-model="huof">
        <span>元</span>
      </div>
    </div>
    <span class="chongzhisd">温馨提示 : 最低充值金额20元</span>
    <div class="money">
      <p @click="yuan()" :class="{ 'border' : huof == 50 }">50元</p>
      <p @click="yuan1()" :class="{ 'border' : huof == 100 }">100元</p>
      <p @click="yuan2()" :class="{ 'border' : huof == 200 }">200元</p>
      <p @click="yuan3()" :class="{ 'border' : huof == 500 }">500元</p>
      <p @click="yuan4()" :class="{ 'border' : huof == 1000 }">1000元</p>
      <p @click="yuan5()" :class="{ 'border' : huof == 2000 }">2000元</p>
    </div>
    <div @click="bool()" class="ali" :class="{ 'classy' : state ==1 }">
      <img src="../../assets/imgs/zhifub.png" alt>
      <span>支付宝充值</span>
      <span style="color:#999999"></span>
    </div>
    <div @click="bool1()" class="card2" :class="{ 'classy' : state == 2 }">
      <img src="../../assets/imgs/yingh.png" alt>
      <span>快捷充值</span>
      <span style="color:#999999"></span>
    </div>
    <div @click="bool2()" class="card2" :class="{ 'classy' : state ==3 }">
      <img src="../../assets/imgs/weix.png" alt>
      <span>微信充值</span>
      <span style="color:#999999"></span>
    </div>
    <div @click="bool3()" class="card2" :class="{ 'classy' : state ==4 }">
      <img src="../../assets/imgs/person1.png" alt>
      <span>人工充值</span>
      <span style="color:#999999"></span>
    </div>
    <p class="pg">
      实付金额 ：
      <span>{{huof}}元</span>
    </p>
    <button class="button2" @click="chogn()">立即充值</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "提现页面",
      money: "1000.00",
      state: 1,
      huof: ""
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("header", "充值");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
  },
  methods: {
    bool() {
      this.state = 1;
    },
    bool1() {
      this.state = 2;
    },
    bool2() {
      this.state = 3;
    },
    bool3() {
      this.state = 4;
    },
    // 充值金额
    yuan() {
      this.huof = 50;
    },
    yuan1() {
      this.huof = 100;
    },
    yuan2() {
      this.huof = 200;
    },
    yuan3() {
      this.huof = 500;
    },
    yuan4() {
      this.huof = 1000;
    },
    yuan5() {
      this.huof = 2000;
    },
    // chognzhi
    chogn() {
      if (this.state == 4) {
        console.log("立即充值");
        this.$router.replace({ name: "rengong" });
      }
    }
  }
};
</script>
<style scoped>
.divup {
  min-height: 100%;
  padding: 0 0.3rem;
  padding-top: 1.6rem;
  background: #f5f5f5;
}
.pg {
  color: #f1941d;
  padding-top: 0.36rem;
  padding-left: 0.3rem;
  font-size: 0.26rem;
}
.pg > span {
  font-size: 0.34rem;
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
  margin-top: 0.2rem;
}
.ali > img {
  height: 50%;
  position: absolute;
  left: 0.3rem;
  top: 25%;
}
.money {
  width: 100%;
  float: left;
}
.money > p {
  float: left;
  width: 32%;
  text-align: center;
  margin-left: 1%;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #999999;
  border-radius: 0.1rem;
  border: 1px solid #999999;
  margin-bottom: 2%;
}
.money > .border {
  border: 2px solid #f1941d;
}
.card2 {
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
.card2 > img {
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
.chongzhi {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  line-height: 0.9rem;
}
.chongzhi input {
  width: 1rem;
}
.chongzhisd {
  color: #f1941d;
  font-size: 0.24rem;
  display: block;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
</style>
