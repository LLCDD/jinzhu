<template>
  <div class="Promotionposter">
    <el-carousel
      :autoplay="true"
      indicator-position="none"
      :interval="3000"
      type="card"
      :loop="true"
    >
      <el-carousel-item class="card1" style="background:red">
        <img src="../../assets/imgs/001.png" alt>
        <div class="div"></div>
      </el-carousel-item>
      <el-carousel-item class="card1" style="background:pink">
        <img src="../../assets/imgs/002.png" alt>
        <div class="div"></div>
      </el-carousel-item>
      <el-carousel-item class="card1" style="background:yellow">
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
.card1 > img {
  height: 100%;
  width: 100%;
}
.card1 > .div {
  height: 1rem;
  width: 1rem;
  position: absolute;
  background: yellow;
  z-index: 9999;
  top: 0;
  left: 1rem;
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
