<template>
  <div class="nu">
    <div v-for="(item,index) in list " :key="index">
      <p>
        <span style="font-size:0.3rem">发红包</span>
        <br>
        <span style="font-size:0.2rem;color:#999">32342323434</span>
      </p>
      <p>
        <span style="line-height:1rem;padding:0;font-size:0.3rem;color:#cf3c36">-23423 元</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "23423",
      list: [1, 2, 3]
    };
  }
};
</script>
<style scoped>
.nu {
  min-height: 100%;
}
.nu > div {
  display: flex;
  height: 1rem;
  background: #ffffff;
  justify-content: space-between;
  padding-left: 0.3rem;
  border-bottom: 1px solid #f5f5f5;
  padding-right: 0.3rem;
}
.nu > div > p > span {
  display: inline-block;
  padding-top: 0.16rem;
}
</style>
