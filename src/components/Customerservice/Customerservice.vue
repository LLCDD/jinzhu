<template>
  <div class="Customerservice">
    <div id="data-list-content" class="cneter">
      <div class="liaotian" v-for="(item,index) in list.data1" :key="index">
        <div>
          <span class="spany">{{ item.created_at }}</span>
        </div>
        <br>
        <div :class="item.class">
          <img src="../../assets/imgs/heaertttt.png" alt>
          <div>{{ item.u_content }}</div>
        </div>
      </div>
    </div>
    <!--  -->
    <footer>
      <img src="../../assets/imgs/translation.png" alt>
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
      text1: "",
      list: this.$store.state.qingr,
      timer: null
    };
  },
  mounted() {
    this.$store.commit("header", "客服中心");
    this.$store.commit("fanhui", true);
    this.$store.commit("headerTab", true);
    this.scrollToBottom();
    this.sendy();
    this.$store.commit("qing", true);
  },
  methods: {
    send() {
      clearInterval(this.timer);
      this.http
        .post("/api/chatroom", { u_content: this.text1 })
        .then(res => {
          if (res.code == 200) {
            this.text1 = "";
            this.http
              .post("/api/chatroom_list")
              .then(res => {
                if (res.code == 200) {
                  this.list = res.data;
                  this.$store.commit("qingr", res.data);
                  console.log(res.data);
                } else if (res.code == 400) {
                  this.$toasted
                    .error(res.message, { icon: "error" })
                    .goAway(1000);
                }
              })
              .catch(res => {
                this.$toasted
                  .error(res.message, { icon: "error" })
                  .goAway(1000);
              });
          } else if (res.code == 400) {
            this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        });
      var _this = this;
      this.timer = setInterval(function() {
        _this.sendy();
      }, 10000);
    },
    // 每次的更改
    sendy() {
      this.http
        .post("/api/chatroom_list")
        .then(res => {
          if (res.code == 200) {
            this.list = res.data;
            this.$store.commit("qingr", res.data);
            console.log(res.data);
          } else if (res.code == 400) {
            this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        });
    },
    // 滚动条的事件
    scrollToBottom() {
      this.$nextTick(() => {
        var div = document.getElementsByClassName("Customerservice")[0];
        // console.log();
        div.scrollTop = div.scrollHeight;
      });
    }
  },
  updated() {
    this.scrollToBottom();
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>
<style scoped>
.Customerservice {
  padding-top: 1.32rem;
  /* min-height: 100%; */
  height: 100%;
  background: #f5f5f5;
  padding-bottom: 1.3rem;
  overflow: auto;
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
  height: 0.8rem;
  width: 64%;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
  padding-left: 0.1rem;
  background: #cccccc;
  float: left;
}
.Customerservice > footer > img {
  float: left;
  height: 0.5rem;
  width: 0.4rem;
  margin-top: 0.3rem;
  margin-right: 0.2rem;
}
.Customerservice > footer > button {
  width: 20%;
  height: 0.8rem;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
  margin-left: 6%;
  background: #f1941d;
  color: #fff;
  float: left;
}
.Customerservice > .cneter {
  /* min-height: 100%; */
  text-align: center;
  padding: 0 0.3rem;
  overflow-y: auto;
}
.liaotian {
  float: right;
  width: 100%;
}
.spany {
  display: inline-block;
  background: #ccc;
  min-width: 1.3rem;
  height: 0.3rem;
  text-align: center;
  color: #fff;
  border-radius: 0.4rem;
  /* margin: 0 auto; */
  margin: 0.3rem 0;
  /* margin-bottom: 1rem; */
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
.touxiang > div {
  background: pink;
  display: inline-block;
  float: left;
  padding: 0.2rem 0.26rem;
  font-size: 0.3rem;
  color: #fff;
  background: #ff5858;
  border-radius: 0.2rem;
  margin-left: 0.2rem;
  max-width: 60%;
}
.touxiang1 > img {
  height: 0.64rem;
  width: 0.64rem;
  border-radius: 50%;
  float: right;
}
.touxiang1 > div {
  background: pink;
  display: inline-block;
  float: right;
  padding: 0.2rem 0.26rem;
  font-size: 0.3rem;
  color: #fff;
  background: #f1941d;
  border-radius: 0.2rem;
  margin-right: 0.2rem;
  max-width: 60%;
}
</style>