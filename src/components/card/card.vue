<template>
  <div class="divk">
    <p v-for="(item,index) in list" :key="index">
      <span>
        <img src="../../assets/imgs/person1.png" alt>
        <span>343423423</span>
      </span>
      <span>直推{{num}}人 间推{{num}}人</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "3345345",
      list: [1, 2, 3],
      num: 1
    };
  },
  mounted() {
    this.$store.commit("headerTab", true);
    this.$store.commit("footerTab", false);
    this.$store.commit("ld", false);
    this.$store.commit("header", "一级推荐");
    this.$store.commit("fanhui", true);
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
</style>
