<template>
  <div class="myrecommendation">
    <div class="div3">
      <header>
        <img @click="tap()" class="fanhui" src="../../../public/image/return.png">我的推荐
        <span v-if="true" @click="tuijian" class="tuijian">推荐列表</span>
      </header>

      <div class="hey">
        <div>
          <p class="p">我的总收益 ( 元 )</p>
          <p class="p1">{{ msg }}</p>
        </div>
        <div>
          <p class="p zhuanj">今日收益 ( 元 )</p>
          <p class="p1 zhuanj1">{{ msg }}</p>
        </div>
      </div>
    </div>
    <table class="tabley" v-if="bool">
      <th>昵称</th>
      <th style="border-left:2px solid #f5f5f5;border-right:2px solid #f5f5f5">金额</th>
      <th style="color:#f1941d;border-right:2px solid #f5f5f5;">级别</th>
      <th>时间</th>
      <tr v-for="(item,index) in list" :key="index">
        <td style="color:#000">{{ item.name }}</td>
        <td
          style="color:#f1941d;border-left:2px solid #f5f5f5;border-right:2px solid #f5f5f5"
        >{{ item.path }}</td>
        <td style="color:#f1941d;border-right:2px solid #f5f5f5;">{{ item.lever }}</td>
        <td style="color:#999999">1018-123:123213</td>
      </tr>
    </table>
    <img class="null" v-if="!bool" src="../../assets/imgs/null.png" alt>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      msg: "9.99",
      list: [1],
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
    this.$store.commit("footerTab", false);
    this.$store.commit("headerTab", false);
    // if (this.list.length > 0) {
    //   this.bool = true;
    // }
    this.http.post("/api/my_recommend").then(res => {
      if (res.code == 200) {
        Toast.clear();
        console.log(res);
        if (res.message == "您没有推荐任何人") {
          this.bool = false;
        } else {
          this.bool = true;
          this.list = res.data.data;
        }
      }
    });
  },
  methods: {
    tap() {
      this.$router.go(-1);
    },
    // 转账
    top() {
      console.log("转账");
    },
    // 转账记录
    zhuan() {
      this;
    },
    // 推荐列表
    tuijian() {
      this.$router.push("/cardy");
    }
  }
};
</script>
<style scoped>
.myrecommendation {
  /* padding-top: 0.88rem; */
  min-height: 100%;
  background: #f5f5f5;
  width: 100%;
}
.myrecommendation > .div3 {
  /* overflow: hidden; */
  background: url("../../assets/imgs/heady.png") no-repeat left;
  background-size: cover;
  position: relative;
  height: 2.4rem;
  margin-bottom: 0.3rem;
  position: fixed;
  width: 100%;
  top: 0;
}
header {
  height: 0.88rem;
  width: 100%;
  position: fixed;
  top: 0;
  /* background: red; */
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.34rem;
  color: #fff;
  /* background: red; */
}
.zhuan {
  position: absolute;
  right: 0.3rem;
  font-size: 0.3rem;
}
.hey {
  padding-top: 1.18rem;
  display: flex;
  justify-content: space-between;
}
.p {
  /* padding-top: 1.18rem; */
  padding-left: 0.3rem;
  color: #fff;
  font-size: 0.24rem;
  /* float: left; */
}
.p1 {
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  font-size: 0.38rem;
  color: #fff;
  font-weight: 700;
  /* float: left; */
  /* display: inline-block; */
  /* padding-top: 2rem; */
}
.record {
  width: 100%;
  background: #fff;
  height: 0.9rem;
  line-height: 0.9rem;
  margin-bottom: 0.2rem;
}
.record > p {
  display: inline-block;
  width: 25%;
  height: 0.8rem;
  text-align: center;
  color: #b6b6b6;
}

.record > p > span {
  display: inline-block;
  height: 98%;
}
.fanhui {
  position: absolute;
  left: 0.3rem;
  width: 0.25rem;
  height: 0.4rem;
  top: 24%;
  z-index: 99;
}
.vip {
  width: 90%;
  margin-left: 5%;
  display: flex;
  background: #fff;
  height: 0.9rem;
  justify-content: space-between;
  border-radius: 5px;
  line-height: 0.9rem;
  padding-left: 0.3rem;
  margin-bottom: 0.2rem;
}
.vip > input {
  width: 2rem;
}
.buty {
  width: 88%;
  background: #f1941d;
  margin-left: 6%;
  margin-top: 0.6rem;
  height: 0.8rem;
  color: #fff;
  border-radius: 0.5rem;
}

.tan > tr > td {
  width: 33.3%;
}
.tabley {
  width: 100%;
  text-align: center;
  background: #fff;
  margin-top: 2.5rem;
}
.tabley > th {
  border: 0;
  height: 0.9rem;
  width: 25%;
  color: #f1941d;
  font-size: 0.3rem;
  border-bottom: 2px solid #f5f5f5;
}
.tabley > tr {
  border: 0;
  height: 0.9rem;
  width: 25%;
}
.tabley > tr > td {
  border: 0;
  height: 0.9rem;
  width: 25%;
  width: 33.3%;
  font-size: 0.3rem;
  border-bottom: 2px solid #f5f5f5;
}
.null {
  width: 50%;
  margin-left: 25%;
  margin-top: 2rem;
}
.zhuanj {
  padding-right: 1.4rem;
}
</style>
