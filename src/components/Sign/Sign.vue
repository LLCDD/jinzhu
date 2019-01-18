<template>
  <div class="divh">
    <div class="div3">
      <header>
        <img @click="tap()" class="fanhui" src="../../../public/image/return.png">签到
        <span @click="instructions()">规则说明</span>
      </header>
      <p class="p">累积领取金额 ( 元 )</p>
      <p class="p1">{{ data.money }}</p>
    </div>
    <div class="divq">
      <p class="py">
        <span>已连续签到</span>
        <br>
        <span class="spy">{{ data.sing_day }} 天</span>
      </p>
      <div class="py1">
        <div class="dao">
          <!--  -->
          <van-steps active-color="#f1941d" :active="data.sing_day-1">
            <van-step v-for="(item,index) in data.sign" :key="index">{{ item }}</van-step>
            <!-- <van-step></van-step>
            <van-step></van-step>
            <van-step></van-step>
            <van-step></van-step>-->
          </van-steps>
        </div>
      </div>
    </div>
    <div class="timer">
      <p v-for="(item,index) in data.data" :key="index">
        <span>{{ item.money }}</span>
        <span style="color:#999">{{ item.created_at }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      data: ""
    };
  },
  beforeCreate() {
    Toast.loading({
      mask: true,
      message: "加载中..."
    });
  },
  mounted() {
    this.$store.commit("footerTab", false);
    this.$store.commit("headerTab", false);
    this.http
      .post("/api/sign")
      .then(res => {
        if (res.code == 200) {
          console.log(res.data);
          this.$toasted.success(res.message).goAway(1000);
        } else if (res.code == 400) {
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        }
      })
      .catch(res => {
        this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
      });
    // 签到详情
    this.http
      .post("/api/sign_list")
      .then(res => {
        if (res.code == 200) {
          // console.log(res);
          this.data = res.data;
          Toast.clear();
        } else if (res.code == 400) {
          Toast.clear();
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        }
      })
      .catch(res => {
        Toast.clear();
        this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
      });
  },
  methods: {
    tap() {
      this.$router.push("/personal");
    },
    jia() {
      this.active++;
    },
    instructions() {
      // console.log("说明");
      this.$router.push("/guize");
    }
  }
};
</script>
<style scoped>
.divh >>> .van-step__circle {
  height: 0.3rem;
  width: 0.3rem;
}
.divh >>> .van-steps--horizontal .van-steps__items .van-steps__items--alone {
  padding: 0;
}
.divh >>> .van-steps--horizontal {
  height: 100%;
}
.divh >>> .van-step--horizontal.van-step--process .van-icon {
  font-size: 0.36rem;
}
.divh >>> .van-step .van-step__circle {
  background: #f8c98e;
}
.div >>> .van-step--horizontal .van-step__line {
  background-color: #f8c98e;
}
.divh >>> .van-step--horizontal.van-step--finish .van-step__line {
  background: #f1941d;
}
.divh >>> .van-step--horizontal:last-child .van-step__title {
  margin-right: -0.2rem;
}
.div >>> .van-step .van-step__circle {
  margin-right: -1px;
}
.divh >>> .van-step--horizontal .van-step__title {
  display: block;
}
.divh >>> .van-step--horizontal:first-child .van-step__title {
  margin-left: -8px;
}
.divh >>> .van-steps--horizontal .van-steps__items.van-steps__items--alone {
  padding-top: 0;
  height: 100%;
  padding-left: 8px;
}
.divh >>> .van-step__title {
  /* margin-left: -8px; */
}
.divh >>> .van-step--horizontal .van-step__line {
  top: 110%;
  height: 0.1rem;
  /* background: #f1941d; */
}
.divh >>> .van-step--horizontal.van-step--finish .van-step__circle,
.van-step--horizontal.van-step--finish .van-step__line {
  background: #f1941d;
}
.divh >>> .van-step--horizontal .van-step__circle-container {
  padding: 0;
}
.divh >>> .van-step--horizontal.van-step--process .van-step__circle-container {
  top: 26px;
}
.divh {
  /* padding-top: 0.88rem; */
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
header > span {
  font-size: 0.3rem;
  position: absolute;
  right: 0.3rem;
  z-index: 99;
}
.p {
  padding-top: 1.18rem;
  padding-left: 0.3rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
}
.p1 {
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  font-size: 0.38rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
}

.fanhui {
  position: absolute;
  left: 0.3rem;
  width: 0.25rem;
  height: 0.4rem;
  top: 24%;
  z-index: 99;
}
.divq {
  height: 1.45rem;
  width: 100%;
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  /* position: relative; */
  background: #ffffff;
  position: relative;
  margin-bottom: 0.2rem;
}
.py {
  text-align: center;
  width: 30%;
  position: relative;
  /* background: pink; */
  color: #f1941d;
  height: 80%;
  border-right: 1px solid #f1941d;
}
.spy {
  padding-top: 0.22rem;
  display: inline-block;
  font-size: 0.3rem;
}
.py1 {
  width: 64%;
  position: absolute;
  height: 70%;
  top: 0.2rem;
  right: 0;
}
.py1 > span {
  display: inline-block;
  width: 20%;
  color: #999999;
  background: red;
  height: 100%;
}
.divn {
  height: 38%;
}
.divn > span {
  display: inline-block;
  width: 20%;
  color: #999999;
}
.dao {
  /* background: red; */
  height: 100%;
}
.timer > p {
  height: 0.9rem;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.9rem;
}
.timer > p > span {
  font-size: 0.3rem;
}
</style>
