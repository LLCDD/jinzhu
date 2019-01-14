<template>
  <div class="div">
    <div>
      <span>昵称</span>
      <span class="name">{{ msg.data.name }}</span>
    </div>
    <div>
      <span>真实姓名</span>
      <span class="name">{{ msg.data.real_name }}</span>
    </div>
    <div>
      <span>性别</span>
      <span class="name">{{ msg.data.sex }}</span>
    </div>
    <div>
      <span>手机号</span>
      <span>{{ msg.data.phone }}</span>
    </div>
    <button class="buttonq" @click="xiuigai()">修改</button>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      msg: "个人资料"
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
    this.$store.commit("ld", false);
    this.$store.commit("header", "个人资料");
    this.$store.commit("fanhui", true);
    this.http
      .post("/api/get_personal")
      .then(res => {
        if (res.code == 200) {
          Toast.clear();
          console.log(res);
          this.msg = res.data;
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
    xiuigai() {
      this.$router.replace({ name: "gaidata" });
    }
  }
};
</script>
<style scope="ay">
.div {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f2f2f2;
}
.div > div {
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
}
.name {
  color: #999999;
}
.buttonq {
  height: 0.8rem;
  width: 84%;
  margin-left: 8%;
  color: #fff;
  border-radius: 0.5rem;
  background: #f1941d;
  margin-top: 0.8rem;
}
</style>
