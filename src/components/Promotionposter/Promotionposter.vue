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
        <div class="div"></div>
      </el-carousel-item>
      <el-carousel-item class="cardp" style="background:pink">
        <img src="../../assets/imgs/002.png" alt>
        <div class="div"></div>
      </el-carousel-item>
      <el-carousel-item class="cardy" style="background:yellow">
        <img src="../../assets/imgs/003.png" alt>
        <div class="div"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "3454"
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("header", "推广海报");
    this.$store.commit("fanhui", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("ld", false);
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
.cardn > .div {
  height: 2rem;
  width: 2rem;
  position: absolute;
  background: yellow;
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardy > .div {
  height: 2rem;
  width: 2rem;
  position: absolute;
  background: yellow;
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardp > .div {
  height: 2rem;
  width: 2rem;
  position: absolute;
  background: yellow;
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardp > .div {
  left: 35%;
  top: 55%;
}
.cardn > .div {
  left: 33%;
  top: 70%;
}
@media screen and (max-height: 568px) {
  .Promotionposter >>> .el-carousel__container {
    margin-top: 0.6rem;
    min-height: 9rem;
    /* height: 80%; */
    /* display: block; */
  }
}
</style>
