<template>
  <div class="divk">
    <p v-for="(item,index) in list" :key="index" v-if="!bool">
      <span>
        <img src="../../assets/imgs/person1.png" alt>
        <span>{{ item.phone }}</span>
      </span>
      <span>直推{{item.zhitui}}人 间推{{item.jiantui}}人</span>
    </p>
    <p class="p" v-if="bool">暂时没有更多数据了</p>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: [],
      bool: false
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
    this.$store.commit("header", "一级推荐");
    this.$store.commit("fanhui", true);
    this.$store.commit("tuijian", true);
    // this.http
    //   .post("/api/my_recommend")
    //   .then(res => {
    //     if (res.code == 200) {
    //       Toast.clear();
    //       this.list = res.data;
    //       if (res.data != {}) {
    //         this.bool = true;
    //       } else {
    //         this.bool = false;
    //       }
    //     } else if (res.code == 400) {
    //       Toast.clear();
    //       this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
    //     }
    //   })
    //   .catch(res => {
    //     Toast.clear();
    //     this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
    //   });
    this.http
      .post("/api/first_recommend")
      .then(res => {
        if (res.code == 200) {
          Toast.clear();
          console.log(res);
          if (res.message == "您没有推荐过任何人") {
            this.bool = true;
          } else {
            this.bool = false;
            this.list = res.data.data;
          }
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
.divk {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
}
.divk > p {
  height: 1rem;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
}
p > span > img {
  background: red;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin-right: 0.2rem;
}
.p {
  color: #999;
}
</style>
