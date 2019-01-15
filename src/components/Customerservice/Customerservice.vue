<template>
  <div class="Customerservice">
    <div class="cneter">
      <div>
        <span class="spany">10:16</span>
      </div>
      <div class="touxiang">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr2">是念佛给暗色的困tuituituitui粉tui阿拉山口带你飞</div>
      </div>
      <div>
        <span class="spany">10:16</span>
      </div>
      <div class="touxiang">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr2">是念佛给暗色的btuituitui困难的烦恼的拉萨的奶粉阿拉山口带你飞</div>
      </div>
      <div>
        <span class="spany">10:16</span>
      </div>
      <div class="touxiang1">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr1">是念佛给暗色的btuituitui困难的烦恼的拉萨的奶粉阿拉山口带你飞</div>
      </div>
      <div class="touxiang1">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr1">是念佛给暗色的btuituitui困难的烦恼的拉萨的奶粉阿拉山口带你飞</div>
      </div>
      <div class="touxiang1">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr1">是念佛给暗色的btuituitui困难的烦恼的拉萨的奶粉阿拉山口带你飞</div>
      </div>
      <div class="touxiang">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr2">是念佛给暗色的困tuituituitui粉tui阿拉山口带你飞</div>
      </div>
      <div class="touxiang">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr2">是念佛给暗色的困tuituituitui粉tui阿拉山口带你飞</div>
      </div>
      <div class="touxiang">
        <img src="../../assets/imgs/xiaolei.png" alt>
        <div class="nr2">是念佛给暗色的困tuituituitui粉tui阿拉山口带你飞</div>
      </div>
    </div>
    <!--  -->
    <footer>
      <input type="text" placeholder="说点什么" v-model="text1">
      <button @click="send()">发送</button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "345",
      text1: ""
    };
  },
  mounted() {
    this.$store.commit("header", "客服中心");
    this.$store.commit("fanhui", true);
    this.$store.commit("headerTab", true);
  },
  methods: {
    send() {
      this.http
        .post("/api/chatroom", { u_content: this.text1 })
        .then(res => {
          if (res.code == 200) {
            this.text1 = "";
          } else if (res.code == 400) {
            this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        });
    }
  }
};
</script>
<style scoped>
.Customerservice {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
  padding-bottom: 1.3rem;
}
.Customerservice > footer {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: #fff;
  padding: 0 0.3rem;
}
.Customerservice > footer > input {
  height: 0.6rem;
  width: 70%;
  margin-top: 0.2rem;
  border-radius: 0.4rem;
  padding-left: 0.1rem;
  background: #cccccc;
}
.Customerservice > footer > button {
  width: 20%;
  height: 0.6rem;
  margin-top: 0.2rem;
  border-radius: 0.4rem;
  margin-left: 6%;
  background: #f1941d;
  color: #fff;
}
.cneter {
  min-height: 100%;
  text-align: center;
  padding: 0 0.3rem;
  overflow: hidden;
}
.spany {
  display: inline-block;
  background: #ccc;
  width: 1.3rem;
  height: 0.3rem;
  text-align: center;
  color: #fff;
  border-radius: 0.4rem;
  margin: 0.3rem 0;
}
.touxiang {
  /* background: red; */
  width: 60%;
  min-height: 0.8rem;
  overflow: hidden;
  margin-top: 0.2rem;
  /* float: left; */
}
.touxiang1 {
  /* background: red; */
  width: 60%;
  min-height: 0.8rem;
  overflow: hidden;
  float: right;
  margin-top: 0.2rem;
}
.touxiang > img {
  height: 0.64rem;
  width: 0.64rem;
  border-radius: 50%;
  float: left;
}
.nr2 {
  background: pink;
  display: inline-block;
  float: left;
  padding: 0.2rem 0.26rem;
  font-size: 0.3rem;
  color: #fff;
  background: #ff5858;
  border-radius: 0.4rem;
  margin-left: 0.2rem;
  max-width: 60%;
}
.touxiang1 > img {
  height: 0.64rem;
  width: 0.64rem;
  border-radius: 50%;
  float: right;
}
.nr1 {
  background: pink;
  display: inline-block;
  float: right;
  padding: 0.2rem 0.26rem;
  font-size: 0.3rem;
  color: #fff;
  background: #f1941d;
  border-radius: 0.4rem;
  margin-right: 0.2rem;
  max-width: 60%;
}
</style>