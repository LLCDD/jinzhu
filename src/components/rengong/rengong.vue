<template>
  <div class="divm">
    <div class="waep">
      <div v-for="(item,index) in list" :key="index">
        <p class="p">
          <span class="daili">代理{{ index +1 }}</span>
          <!-- <br> -->
          <span class="daili1">扫描二维码联系</span>
        </p>
        <img class="img" src="../../assets/imgs/3.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "345",
      list: [1, 23, 43]
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("ld", false);
    this.$store.commit("header", "人工充值");
    this.$store.commit("fanhui", true);
  }
};
</script>
<style scoped>
.divm {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
}
.waep > div {
  height: 3rem;
  width: 90%;
  margin-left: 5%;
  background: url("../../assets/imgs/hed.png") no-repeat left;
  background-size: cover;
  margin-top: 0.3rem;
  border-radius: 0.3rem;
  padding-left: 0.3rem;
  padding-top: 0.4rem;
  padding-right: 0.3rem;
}
.daili {
  font-size: 0.36rem;
  color: #fff;
}
.daili1 {
  display: inline-block;
  padding-top: 0.2rem;
  color: #fff;
}
.img {
  height: 2.25rem;
  width: 2.25rem;
  float: right;
  /* background: red; */
}
.p {
  display: inline-block;
  width: 2rem;
}
</style>
