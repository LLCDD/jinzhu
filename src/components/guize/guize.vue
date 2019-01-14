<template>
  <div class="uu">
    <div v-html="msg"></div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      msg: ""
    };
  },
  beforeCreate() {
    Toast.loading({
      mask: true,
      message: "加载中..."
    });
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("header", "规则说明");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
    this.http
      .post("/api/gamerule_list")
      .then(res => {
        if (res.code == 200) {
          Toast.clear();
          //   console.log(res);
          this.msg = res.data[1].content;
        } else if (res.code == 400) {
          Toast.clear();
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        }
      })
      .catch(res => {
        Toast.clear();
        this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
      });
  }
};
</script>
<style scoped>
.uu {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
}
</style>
