<template>
  <div class="envelopetorecord">
    <div>
      <div v-for="(item,index) in list " :key="index">
        <div>
          <p style="padding-top:0.22rem;font-size:0.34rem">抢到红包</p>
          <p style="color:#999999;padding-top:0.1rem">2013--12-123</p>
        </div>
        <div style="color:#cf3c36;line-height:1rem">+19.04元</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "23",
      list: [1, 2, 3, 4]
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("header", "红包记录");
    this.$store.commit("fanhui", true);
  }
};
</script>
<style scoped>
.envelopetorecord {
  padding-top: 0.88rem;
  min-height: 100%;
  background: #f5f5f5;
}
.envelopetorecord > div > div {
  height: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  border: 1px solid #f5f5f5;
}
</style>
