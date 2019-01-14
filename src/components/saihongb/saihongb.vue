<template>
  <div class="saihongb">
    <div>
      <p>
        <span>请输入红包总金额</span>
      </p>
      <p>
        <input type="text" placeholder="0.00" v-model="money">
        <span>元</span>
      </p>
    </div>
    <div>
      <p>
        <span>红包个数</span>
      </p>
      <p>
        <span>{{ ge }}元</span>
      </p>
    </div>
    <div>
      <p>
        <span>雷点数</span>
      </p>
      <p>
        <input style="width:2rem" type="text" placeholder="填写雷点数" v-model="dian">
      </p>
    </div>
    <button class="saibu" @click="saibao">塞进红包</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: "",
      ge: "",
      dian: ""
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("header", "发红包");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
  },
  methods: {
    saibao() {
      console.log("赛宝");
    }
  }
};
</script>
<style scoped>
.saihongb {
  width: 100%;
  min-height: 100%;
  padding: 0 0.3rem;
  background: #f5f5f5;
  padding-top: 0.88rem;
}
.saihongb > div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  margin-top: 0.3rem;
  background: #fff;
  padding: 0 0.3rem;
  border-radius: 0.2rem;
  font-size: 0.3rem;
}
.saihongb > div > p > input {
  /* background: red; */
  width: 1rem;
  color: #999;
}
.saibu {
  height: 0.9rem;
  width: 90%;
  margin-left: 5%;
  height: 0.9rem;
  color: #fff;
  background: #ff5858;
  margin-top: 0.6rem;
  border-radius: 0.5rem;
}
</style>
