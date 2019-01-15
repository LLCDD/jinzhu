<template>
  <div class="redenvelope">
    <header>
      <img @click="fanhui()" src="../../../public/image/return.png" alt>
      红包详情
      <span @click="jilv()">红包记录</span>
    </header>
    <div class="renw">
      <div class="first">
        <img src="../../assets/imgs/setup.png" alt>
      </div>
      <p>{{ msg }}</p>
      <p class="mar">{{ money }}</p>
      <div class="zong">{{ ge }}个红包共{{ money }}元</div>
      <div class="jil">
        <div v-for="(item,index) in list" :key="index">
          <div>
            <img class="xqt" src="../../assets/imgs/setup.png" alt>
            <p class="name">
              {{ name }}
              <br>
              <span>{{ name }}</span>
            </p>
          </div>
          <img class="xqtl" src="../../assets/imgs/xiaolei.png" alt>
          <div class="line">{{ money }}元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "15866666666",
      money: "100.00",
      ge: "5",
      name: "12321-12323-23",
      list: [1, 2, 4, 5]
    };
  },
  mounted() {
    this.$store.commit("headerTab", false);
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    // 红包记录
    jilv() {
      console.log("记录");
      this.$router.push("/envelopetorecord");
    }
  }
};
</script>
<style scoped>
.redenvelope {
  min-height: 100%;
  background: #f5f5f5;
  /* padding-top: 0.88rem; */
}
.redenvelope > header {
  height: 0.88rem;
  width: 100%;
  background: #cf3c36;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.36rem;
  color: #fff;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
}
.redenvelope > header > img {
  height: 0.35rem;
  position: absolute;
  left: 0.3rem;
  top: 28%;
}
.redenvelope > header > span {
  font-size: 0.3rem;
  position: absolute;
  right: 0.3rem;
}
.renw {
  padding-top: 0.88rem;
  float: left;
  width: 100%;
  height: 2.85rem;
  background: url("../../assets/imgs/tou.png") no-repeat center;
  background-size: 100% 100%;
}
.renw > .first {
  height: 1.22rem;
  width: 1.22rem;
  border-radius: 50%;
  background: red;
  margin: 0 auto;
  margin-top: 19%;
  border: 2px solid #ffffff;
  overflow: hidden;
}
.renw > .first > img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.renw > p {
  text-align: center;
}
.mar {
  padding-bottom: 0.3rem;
}
.zong {
  height: 0.8rem;
  border-bottom: 1px solid #f5f5f5;
  background: #ffffff;
  line-height: 0.8rem;
  font-size: 0.24rem;
  color: #999999;
  padding-left: 0.3rem;
}

.jil > div {
  height: 1rem;
  padding: 0 0.3rem;
  background: #fff;
  /* line-height: 1rem; */
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}
.xqt {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  background: red;
  float: left;
  margin-top: 0.1rem;
}
.name {
  display: inline-block;
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  font-size: 0.3rem;
}
.name > span {
  display: inline-block;
  padding-top: 0.2rem;
  font-size: 0.2rem;
  color: #999999;
}
.line {
  line-height: 1rem;
  color: #cf3c36;
  font-size: 0.3rem;
  font-weight: 500;
}
.xqtl {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  /* background: red; */
  margin-top: 0.1rem;
  margin-right: -1rem;
}
</style>
