<template>
  <div class="clearance">
    <!-- <div class="qu" @click="stores">
      <p>新手1区</p>
      <span>10-50 赔率1.6赔</span>
    </div>
    <div class="qu" @click="stores">
      <p>新手2区</p>
      <span>10-50 赔率1.6赔</span>
    </div>
    <div class="qu" @click="stores">
      <p>休闲区</p>
      <span>50-100 赔率1.6赔</span>
    </div>
    <div class="qu" @click="stores">
      <p>王者区</p>
      <span>100-500 赔率1.6赔</span>
    </div>-->
    <div
      class="qu"
      v-for="(item,index) in list"
      :key="index"
      @click="stores(item.id,item.packet_num)"
    >
      <p>{{ item.type }}</p>
      <span>{{ item.red_packet }} 赔率{{ item.odds }}赔</span>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      msg: "45345",
      list: []
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
    this.$store.commit("header", "红包扫雷");
    this.$store.commit("ld", false);
    this.$store.commit("fanhui", true);
    this.http
      .post("/api/room_list", { game_id: "1" })
      .then(res => {
        if (res.code == 200) {
          Toast.clear();
          console.log(res.data.data);
          this.list = res.data.data;
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
    stores(id, num) {
      console.log(id, num);
      localStorage.setItem("geshu", num);
      this.$router.push("/Mineclearance");
    }
  }
};
</script>
<style scoped>
.clearance {
  min-height: 100%;
  background: #f5f5f5;
  padding: 0 0.3rem;
  padding-top: 0.88rem;
}
.clearance > div {
  width: 100%;
  height: 1.8rem;
  margin-top: 0.3rem;
  background: red;
  border-radius: 0.2rem;
  padding-left: 0.3rem;
  background: url("../../assets/imgs/leilong.png") no-repeat right;
  background-size: cover;
}
.qu > p {
  font-size: 0.5rem;
  color: #fff;
  padding-top: 0.3rem;
}
.qu > span {
  display: inline-block;
  padding-top: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
}
</style>
