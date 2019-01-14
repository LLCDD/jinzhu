<template>
  <div class="divp">
    <div class="ranking">
      <p>
        <router-link to="commission" tag="span">佣金排行</router-link>
      </p>
      <p>
        <router-link to="profit" tag="span">盈利排行</router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "发现"
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", true);
    this.$store.commit("ld", false);
    this.$store.commit("header", "发现");
    this.$store.commit("fanhui", false);
  }
};
</script>
<style scoped>
.divp {
  min-height: 100%;
  background: #ffffff;
  padding-top: 0.88rem;
}
/* .ranking {
  padding-top: 0.88rem; 
} */
.ranking > p {
  width: 50%;
  background: #ffffff;
  color: #999;
  /* float: left; */
  display: inline-block;
  text-align: center;
  height: 0.9rem;
}
.ranking > p > span {
  display: inline-block;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
}
.router-link-active {
  color: #f1941d;
  border-bottom: 2px solid #f1941d;
}
</style>
