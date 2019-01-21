<template>
  <div class="div0">
    <van-notice-bar
      class="text"
      style="background:#ffffff"
      :speed="20"
      :text="conetent"
      left-icon="volume-o"
    />
    <el-carousel
      :autoplay="true"
      indicator-position="none"
      :interval="3000"
      type="card"
      height="3.78rem"
      :loop="true"
    >
      <el-carousel-item v-for="(item,index) in list" :key="index" class="card">
        <img :src="url +'/'+item" alt>
      </el-carousel-item>
    </el-carousel>
    <div class="redy"></div>
    <div class="nr">
      <!-- <span class="xie"></span> -->
      <img class="xie" src="../../assets/imgs/xi.png" alt>

      <van-swipe class="nr1" :touchable="false" :autoplay="500" vertical :show-indicators="false ">
        <van-swipe-item>
          <p class="mar">第一个世界啊撒旦解放</p>
          <p class="mar">啊撒旦解放那段艰难氨基酸的</p>
        </van-swipe-item>
        <van-swipe-item>
          <p class="mar">埃里克森的那份阿斯蒂芬</p>
          <p class="mar">爱上帝就发世间的烦恼士大夫撒地方</p>
        </van-swipe-item>
        <van-swipe-item>
          <p class="mar">爱上的看法呢阿斯蒂芬那时的</p>
          <p class="mar">数字和自富含发到付爱的打法的阿斯蒂</p>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="event">
      <div class="event1">
        <p @click="rules()">查看游戏规则 > ></p>
        <button @click="clearance()">立即开始</button>
      </div>
      <div class="event1 event2">
        <p @click="rulesone()">查看游戏规则 > ></p>
        <button @click="solitaire()">立即开始</button>
      </div>
    </div>
  </div>
</template>
<script>
import { NoticeBar } from "vant";

export default {
  data() {
    return {
      msg: "首页",
      list: "",
      url: "http://192.168.0.111/upload",
      conetent: ""
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", true);
    this.$store.commit("header", "金猪");
    this.$store.commit("ld", true);
    this.$store.commit("fanhui", false);

    this.http
      .post("/api/banner")
      .then(res => {
        if (res.code == 200) {
          console.log(res);
          localStorage.setItem("url", res.data.url);
          localStorage.setItem("imgy", JSON.stringify(res.data.data));
          this.list = res.data.data;
          this.url = res.data.url;
          this.conetent = res.data.notice;
        } else if (res.code == 400) {
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        }
      })
      .catch(res => {
        this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
      });
    // this.list = JSON.parse(localStorage.getItem("imgy"));
    // this.url = JSON.parse(localStorage.getItem("url"));
  },
  methods: {
    // 游戏规则
    rules() {
      this.$router.push("/rules");
    },
    rulesone() {
      this.$router.push("/rulesone");
    },
    // 红包扫雷
    clearance() {
      // console.log("红包扫雷");
      this.$router.push("/clearance");
    },
    // 红包接龙
    solitaire() {
      console.log("红包接龙");
      this.$router.push("/solitaire");
    }
  }
};
</script>
<style scope="">
.div0 {
  min-height: 100%;
  background: #f5f5f5;
  padding-top: 1.32rem;
}
.nr {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  padding: 0.2rem 0;
  padding-left: 0.3rem;
  margin-bottom: 0.3rem;
}
.xie {
  font-size: 0.36rem;
  color: #1e853c;
  font-style: italic;
  font-weight: 700;
  display: inline-block;
  width: 11%;
  line-height: 0.4rem;
  /* margin-right: 0.34rem; */
}
.mar {
  margin-top: 0.1rem;
}
.nr1 {
  /* display: inline-block; */
  height: 100%;
  float: right;
  width: 82%;
  padding-left: 0.3rem;
  margin-left: 0.34rem;
  border-left: 2px solid #f1941d;
}
.nr1 > p {
  line-height: 0.36rem;
  font-size: 0.24rem;
}
.event {
  margin-top: 0.2rem;
  width: 100%;
  /* min-height: 3.22rem; */
  height: 100%;
  background: #fff;

  padding-top: 0.3rem;
  position: relative;
}
.event > span {
  display: inline-block;
  width: 50%;
  height: 50%;
  border-right: 2px solid #f5f5f5;
  border-bottom: 2px solid #f5f5f5;
  padding-top: 0.32rem;
  padding-left: 0.6rem;
}
.event > span > img {
  height: 1rem;
  width: 1rem;
}
.event > span > span {
  margin-left: 0.22rem;
  font-size: 0.26rem;
}
.event1 {
  height: 3rem;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 0.3rem;
  border-radius: 0.16rem;
  position: relative;
}
.event1 > p {
  padding-top: 1.1rem;
  color: #fff;
  padding-left: 0.3rem;
  font-size: 0.34rem;
}
.event1 > button {
  position: absolute;
  bottom: 0.3rem;
  left: 0.3rem;
  height: 0.64rem;
  width: 1.84rem;
  background: none;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #cae8ff;
  box-shadow: 1px 1px 3px #cae8ff;
  background: #4eadfe;
}
.event2 > button {
  background: #fa6f42;
}
.swipe {
  width: 100%;
}
.el-carousel__item--card {
  width: 80% !important;
  margin-left: -16% !important;
}
.card {
  border-radius: 0.1rem;
}
.card > img {
  height: 100%;
  width: 100%;
}
.el-carousel__arrow {
  display: none !important;
}
.redy {
  height: 1rem;
  width: 1rem;
  background: red;
  position: absolute;
  top: 1.88rem;
  z-index: 99;
  width: 100%;
  height: 3.78rem;
  opacity: 0;
}
.text {
  height: 1rem;
}
.event1 {
  background: url("../../assets/imgs/saolei.png") no-repeat left;
  background-size: 100% 100%;
}
.event2 {
  background: url("../../assets/imgs/long.png") no-repeat left;
  background-size: 100% 100%;
  margin-bottom: 2rem;
}
</style>
