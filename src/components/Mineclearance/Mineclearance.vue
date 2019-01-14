<template>
  <div class="Mineclearance">
    <div class="warpo">
      <span class="spanv">14.18</span>
    </div>
    <div class="hongbao">
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
      <div class="bao">
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
    <div class="hongbao1">
      <img class="touxian1" src="../../assets/imgs/my.png" alt>
      <p class="pf1">123232132</p>
      <div class="bao1">
        <p>{{ msg }}</p>
        <br>
        <p>{{ msg1}}</p>
      </div>
    </div>
    <div class="bottom">
      <button>一键发包</button>
      <button>余额</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "恭喜发财 , 大吉大利",
      msg1: "20-6",
      money: "34"
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("header", "红包扫雷");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
  },
  methods: {}
};
</script>
<style scoped>
.Mineclearance {
  min-height: 100%;
  background: #f5f5f5;
  padding: 0 0.3rem;
  padding-top: 0.88rem;
  text-align: center;
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
</style>
