<template>
  <div class="header">
    <img v-on:click="back" :src="headerpicture" alt>
    <span>新用户注册</span>
  </div>
</template>

<script>
export default {
  name: "casualheader",
  data() {
    return {
      headerpicture: require("../../../../public/image/return.png")
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 1.32rem;
  display: flex;
  z-index: 2;
  /* background: red; */
  /* background: #1e853c; */
}
.header span {
  margin-left: 33%;
  margin-top: 0.27rem;
  font-size: 0.3rem;
  color: azure;
  padding-top: 0.44rem;
}
.header img {
  width: 0.25rem;
  height: 0.4rem;
  margin: 0.7rem 0 0 0.3rem;
  z-index: 9;
}
.header .search {
  width: 0.38rem;
  height: 0.46rem;
  margin-left: 30%;
  margin-top: 0.24rem;
}
</style>