<template>
  <div class="Promotionposter">
    <el-carousel
      :autoplay="true"
      indicator-position="none"
      :interval="3000"
      type="card"
      :loop="true"
      arrow="never"
      @change="onchange($event)"
    >
      <!-- <el-carousel-item class="cardn" style="background:red">
        <div class="cardn">
          <img ref="jietu0" :src="src" @click="app()" alt>
          <img ref="jietu0" :src="src" @click="app()" alt>
          <div class="divyyy">
            <p style="width:100%; text-align: center;color:#fff;margin:0.1rem 0">扫码注册抢红包</p>
            <div style="background:#fff;border-radius: 0.2rem">
              <qriously :value="initQCode" :size="100"/>
            </div>
          </div>
        </div>
      </el-carousel-item>-->
      <el-carousel-item class="cardp" v-for="(item,index) in list" :key="index">
        <div class="cardp">
          <!-- <img ref="jietu1" src="../../assets/imgs/002.png" @click="app()" alt> -->
          <img :src=" url +'/' + item" @click="app(url +'/' + item)" alt>
          <!-- {{ url +'/' + item }} -->
          <!-- <div class="divyyy">
            <div style="background:#fff;border-radius: 0.2rem">
              <qriously :value="initQCode" :size="100"/>
            </div>
            <p style="width:100%; text-align: center;color:#fff;margin:0.1rem 0">扫码注册抢红包</p>
          </div>-->
        </div>
      </el-carousel-item>
      <!-- <el-carousel-item class="cardy" style="background:yellow">
        <div class="cardy">
          <img ref="jietu2" src="../../assets/imgs/003.png" @click="app()" alt> 
          <img ref="jietu2" :src="src" @click="app()" alt>
          <div class="divyyy">
            <p style="width:100%; text-align: center;color:#fff;margin:0.1rem 0">扫码注册抢红包</p>
            <div style="background:#fff;border-radius: 0.2rem">
              <qriously :value="initQCode" :size="100"/>
            </div>
          </div>
        </div>
      </el-carousel-item>-->
    </el-carousel>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      msg: "3454",
      list: [],
      url: "",
      initQCode: "www.baidu.com",
      index: 0,
      src: ""
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
          this.url = res.data.url;
          this.list = res.data.haibao;
        } else if (res.code == 400) {
          this.$toated.erro(res.message, { icon: "erro" }).goAway(1000);
        }
      })
      .catch(res => {
        this.$toated.erro(res.message, { icon: "erro" }).goAway(1000);
      });
  },
  methods: {
    app(src) {
      // var index = this.index;
      // var ref = this.ref[index];
      // // console.log(this.$refs["" + ref]);
      // var jiet = this.$refs["" + ref];
      // // var _this = this;
      // // html2canvas(jiet, { height: "10rem" }).then(canvas => {
      // //   let dataURL = canvas.toDataURL("image/png");
      // //   console.log(dataURL);
      // // });
      // console.log();
      console.log(src);
      var $$this = this;
      //alert($$this.src);
      plus.nativeUI.showWaiting("正在下载，请稍后");
      var url = src;
      var options = {
        method: "GET",
        filename: "_doc/"
      };
      var dtask = plus.downloader.createDownload(url, options, function(
        download,
        status
      ) {
        console.log(download.filename);
        plus.nativeUI.closeWaiting();
        plus.gallery.save(download.filename, function() {
          $$this.$toasted.success("保存成功").goAway(1500);
        });
      });
      dtask.start();
    },
    onchange(e) {
      this.index = e;
    }
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
.cardy {
  height: 100%;
}
.cardn {
  height: 100%;
}
.cardp {
  height: 100%;
}
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
  height: 3rem !important;
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
  height: 3rem !important;
  width: 2rem !important;
  position: absolute;
  /* background: yellow; */
  z-index: 9999;
  top: 6%;
  left: 56%;
}
.cardp > .divyyy {
  height: 3rem !important;
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
