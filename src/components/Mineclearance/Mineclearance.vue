<template>
  <div class="Mineclearance">
    <div class="warpo">
      <span class="spanv">14.18</span>
    </div>
    <div class="hongbao" @click="xiqing()">
      <img class="touxian" src="../../assets/imgs/my.png" alt>
      <p class="pf">123232132</p>
      <div class="bao">
        <p>{{ msg }}</p>
        <br>
        <p>{{ msg1}}</p>
      </div>
    </div>
    <div class="warpo">
      <span class="spanv">14.18</span>
    </div>
    <div class="hongbao">
      <img class="touxian" src="../../assets/imgs/my.png" alt>
      <p class="pf">123232132</p>
      <div class="bao" @click="xiqing()">
        <p>{{ msg }}</p>
        <br>
        <p>{{ msg1}}</p>
      </div>
    </div>
    <div class="warpu">
      <div>
        <img src="../../assets/imgs/tbb.png" alt>
        <p>恭喜{{ msg }}中奖 , 奖励 ({{ msg1 }}) + {{money}}</p>
      </div>
    </div>
    <div class="hongbao1" @click="qinglei()">
      <img class="touxian1" src="../../assets/imgs/my.png" alt>
      <p class="pf1">123232132</p>
      <div class="bao1">
        <p>{{ msg }}</p>
        <br>
        <p>{{ msg1}}</p>
      </div>
    </div>
    <div class="bottom">
      <button @click="fabao()">一键发包</button>
      <button @click="xainshi()">余额</button>
    </div>
    <!-- 余额 -->
    <van-popup v-model="show" class="hiy">
      <div class="hiy">
        <p>余额</p>
        <div>账户余额 ：{{money}}</div>
      </div>
    </van-popup>
    <!-- 中红包 -->
    <van-popup v-model="show1" class="qiang">
      <div>
        <img src="../../assets/imgs/qiang.png" alt>
      </div>
    </van-popup>
    <!-- 中雷 -->
    <van-popup v-model="show2" class="qiang1">
      <div>
        <img src="../../assets/imgs/qinglei.png" alt>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Popup } from "vant";
export default {
  data() {
    return {
      msg: "恭喜发财 , 大吉大利",
      msg1: "20-6",
      money: "34",
      show: false,
      show1: false,
      show2: false,
      timer: null
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("header", "红包扫雷");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
  },
  methods: {
    fabao() {
      this.$router.push("/saihongb");
    },
    xainshi() {
      this.show = true;
    },
    // 抢红包
    xiqing() {
      clearInterval(this.timer);
      this.show1 = true;
      var _this = this;
      this.timer = setInterval(() => {
        _this.show1 = false;
        this.$router.push("/redenvelope");
        clearInterval(this.timer);
      }, 400);
    },
    // 抢雷
    qinglei() {
      clearInterval(this.timer);
      this.show2 = true;
      var _this = this;
      this.timer = setInterval(() => {
        _this.show2 = false;
        this.$router.push("/redenvelope");
        clearInterval(this.timer);
      }, 400);
    }
  }
};
</script>
<style scoped>
.Mineclearance {
  min-height: 100%;
  background: #f5f5f5;
  padding: 0 0.3rem;
  padding-top: 0.88rem;
  text-align: center;
  padding-bottom: 1.4rem;
}

.hiy {
  width: 5rem;
  height: 2.4rem;
  background: #fff;
  border-radius: 0.2rem;
}
.hiy > p {
  height: 0.8rem;
  background: #f1941d;
  font-size: 0.3rem;
  line-height: 0.8rem;
  color: #fff;
}
.hiy > div {
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  color: #f1941d;
  font-size: 0.3rem;
}
.spanv {
  display: inline-block;
  height: 0.32rem;
  width: 1.34rem;
  border-radius: 0.6rem;
  background: #cccccc;
  text-align: center;
  color: #fff;
  line-height: 0.32rem;
  margin: 0 auto;
}
.warpo {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
}
.hongbao {
  width: 60%;
  height: 1.6rem;
}
.touxian {
  background: red;
  float: left;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
}
.pf {
  float: left;
  margin-left: 0.2rem;
  color: #999999;
  padding-bottom: 0.2rem;
}
.bao {
  width: 80%;
  height: 80%;
  background: url("../../assets/imgs/png.png") no-repeat;
  background-size: cover;
  float: right;
  border-radius: 0.1rem;
}
.bao {
  padding-top: 0.1rem;
  color: #fff;
}
.bao > :first-child {
  font-size: 0.24rem;
  float: left;
  margin-left: 25%;
}
.bao > :last-child {
  font-size: 0.2rem;
  float: left;
  margin-left: 25%;
}
.warpu {
  height: 0.3rem;
  width: 100%;
  margin-top: 0.3rem;
  text-align: center;
  margin-bottom: 0.3rem;
}
.warpu > div {
  width: 80%;
  height: 100%;
  background: #ccc;
  margin: 0 auto;
  border-radius: 0.3rem;
}
.warpu > div > img {
  height: 90%;
  float: left;
  margin-left: 2%;
}
.warpu > div > p {
  color: #fff;
  font-size: 0.22rem;
  line-height: 0.3rem;
}
.hongbao1 {
  width: 60%;
  /* background: red; */
  height: 1.6rem;
  float: right;
}
.touxian1 {
  /* background: red; */
  float: right;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
}
.pf1 {
  float: right;
  margin-right: 0.2rem;
  color: #999999;
  padding-bottom: 0.2rem;
}
.bao1 {
  width: 80%;
  height: 80%;
  background: url("../../assets/imgs/png.png") no-repeat;
  background-size: cover;
  float: left;
  border-radius: 0.1rem;
  padding-top: 0.1rem;
  color: #fff;
}
.bao1 > :first-child {
  font-size: 0.24rem;
  float: left;
  margin-left: 25%;
}
.bao1 > :last-child {
  font-size: 0.2rem;
  float: left;
  margin-left: 25%;
}
.bottom {
  height: 1rem;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 0.3rem;
}
.bottom > :first-child {
  width: 70%;
  background: #f1941d;
  color: #fff;
  float: left;
  height: 0.6rem;
  margin-top: 0.2rem;
  border-radius: 0.4rem;
}
.bottom > :last-child {
  float: right;
  margin-top: 0.2rem;
  height: 0.6rem;
  width: 25%;
  background: #ff5858;
  color: #fff;
  border-radius: 0.4rem;
}
.qiang {
  width: 100%;
  height: 70%;
  background: none;
}
.qiang > div > img {
  display: block;
  height: 100%;
  width: 100%;
}
.qiang1 {
  width: 85%;
  height: 54%;
  background: none;
}
.qiang1 > div > img {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
