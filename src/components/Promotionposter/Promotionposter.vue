<template>
  <div class="Promotionposter">
    <el-carousel
      :autoplay="true"
      indicator-position="none"
      :interval="1000"
      type="card"
      :loop="true"
      arrow="never"
    >
      <el-carousel-item class="cardn" style="background:red">
        <img src="../../assets/imgs/001.png" alt>
        <div class="divyyy">
          <p style="width:100%; text-align: center;color:#fff;margin:0.1rem 0">扫码注册抢红包</p>
          <div style="background:#fff;border-radius: 0.2rem">
            <qriously :value="initQCode" :size="100"/>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="cardp" style="background:pink">
        <img src="../../assets/imgs/002.png" alt>
        <div class="divyyy">
          <div style="background:#fff;border-radius: 0.2rem">
            <qriously :value="initQCode" :size="100"/>
          </div>
          <p style="width:100%; text-align: center;color:#fff;margin:0.1rem 0">扫码注册抢红包</p>
        </div>
      </el-carousel-item>
      <el-carousel-item class="cardy" style="background:yellow">
        <img src="../../assets/imgs/003.png" alt>
        <div class="divyyy">
          <p style="width:100%; text-align: center;color:#fff;margin:0.1rem 0">扫码注册抢红包</p>
          <div style="background:#fff;border-radius: 0.2rem">
            <qriously :value="initQCode" :size="100"/>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "3454",
      list: [],
      url: localStorage.getItem("url"),
      initQCode: "www.baidu.com"
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("header", "推广海报");
    this.$store.commit("fanhui", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("ld", false);
    this.http
      .post("/api/haibao")
      .then(res => {
        if (res.code == 200) {
          console.log(res);
          this.list = res.data.haibao;
          this.initQCode = res.data.qr_code;
        } else if (res.code == 400) {
          this.$toated.erro(res.message, { icon: "erro" }).goAway(1000);
        }
      })
      .catch(res => {
        this.$toated.erro(res.message, { icon: "erro" }).goAway(1000);
      });
  }
};
</script>
<style scoped>
.Promotionposter {
  padding-top: 0.88rem;
  background: #f5f5f5;
  min-height: 100%;
}

.Promotionposter >>> .el-carousel__container {
  margin-top: 0.6rem;
  min-height: 11rem;
  /* height: 80%; */
  /* display: block; */
}
.Promotionposter >>> .el-carousel__item {
  border-radius: 0.2rem;
}
.Promotionposter >>> .el-carousel {
  overflow-x: none;
}
.Promotionposter >>> .el-carousel__item {
  width: 80%;
  margin-left: -15%;
}
/* .card {
  position: relative;
} */
.cardy > img {
  height: 100%;
  width: 100%;
}
.cardn > img {
  height: 100%;
  width: 100%;
}
.cardp > img {
  height: 100%;
  width: 100%;
}
.cardn > .divyyy {
  height: 2rem !important;
  width: 2rem !important;
  position: absolute;
  /* background: yellow; */
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardn > .divyyy > img {
  width: 100%;
  height: 100%;
}
.cardy > .divyyy {
  height: 2rem !important;
  width: 2rem !important;
  position: absolute;
  /* background: yellow; */
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardp > .divyyy {
  height: 2rem !important;
  width: 2rem !important;
  position: absolute;
  /* background: yellow; */
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardp > .divyyy > img {
  width: 100%;
  height: 100%;
}
.cardp > .divyyy {
  left: 35%;
  top: 55%;
}
.cardn > .divyyy {
  left: 6%;
  top: 70%;
}
.cardy > .divyyy > img {
  width: 100%;
  height: 100%;
}
@media screen and (max-height: 568px) {
  .Promotionposter >>> .el-carousel__container {
    margin-top: 0.6rem;
    min-height: 9rem;
  }
}
</style>
