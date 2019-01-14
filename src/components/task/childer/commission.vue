<template>
  <div class="_warp">
    <div class="tba">
      <div class="two">
        <span>34523434</span>
        <p>
          <span>累计收益</span>
          
          <span class="money">{{money}}</span>
        </p>
      </div>
      <div class="two1">
        <span>34523434</span>
        <p>
          <span>累计收益</span>
          
          <span class="money">{{money}}</span>
        </p>
      </div>
      <div class="two2">
        <span>34523434</span>
        <p>
          <span>累计收益</span>
          
          <span class="money">{{money}}</span>
        </p>
      </div>
    </div>
    <div class="table1">
      <div class="table" v-for="(item,index) in list" :key="index">
        <span class="tabl1" style="color:#f1941d">
          <span v-if="index <= 5">0</span>
          {{index + 4}}
        </span>
        <span class="tabl2">{{ item.phone }}</span>
        <span class="tabl3">
          累计佣金 :
          <span style="color:#f1941d">{{ item.shou }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "222",
      money: "1000.00",
      list: [
        { phone: "123××××××××324", shou: "12.00" },
        { phone: "123××××××××324", shou: "12000.00" },
        { phone: "123××××××××324", shou: "12.00" },
        { phone: "123××××××××324", shou: "12.00" },
        { phone: "123××××××××324", shou: "12.00" },
        { phone: "123××××××××324", shou: "12.00" },
        { phone: "123××××××××324", shou: "12.00" },
        { phone: "123××××××××324", shou: "12.00" }
      ]
    };
  }
};
</script>
<style scope="345">
._warp {
  min-height: 100%;
}
.tba {
  height: 5.4rem;
  width: 100%;
  background: red;
  margin-top: 0.1rem;
  float: left;
  background: url(".../../../../../assets/imgs/gern.png") no-repeat bottom;
  background-size: cover;
  position: relative;
}
.tba > div {
  width: 30%;
  text-align: center;
}
.two {
  position: absolute;
  bottom: 14%;
  left: 3%;
  /* opacity: 0; */
}
.two > span {
  color: #fff;
}
.two1 > span {
  color: #fff;
}
.two2 > span {
  color: #fff;
}
.two > p {
  padding-top: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
  font-size: 0.25rem;
}
.two > p > span {
  display: block;
  padding-top: 0.1rem;
}
.money {
  font-size: 0.3rem;
}
.two1 {
  position: absolute;
  bottom: 26%;
  left: 35%;
}
.two1 > p {
  padding-top: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
  font-size: 0.25rem;
}
.two1 > p > span {
  display: block;
  padding-top: 0.1rem;
}
.two2 {
  position: absolute;
  bottom: 9%;
  right: 4%;
}
.two2 > p {
  padding-top: 0.3rem;
  font-size: 0.3rem;
  color: #fff;
  font-size: 0.25rem;
}
.two2 > p > span {
  display: block;
  padding-top: 0.1rem;
}
.table1 {
  min-height: 100%;
  margin-bottom: 1rem;
  float: left;
}
.table {
  width: 100%;
  float: left;
  border-bottom: 2px solid #f5f5f5;
  height: 0.8rem;
  line-height: 0.9rem;
}
.tabl1 {
  display: inline-block;
  width: 16%;
  text-align: center;
  font-size: 0.26rem;
}
.tabl2 {
  display: inline-block;
  width: 46%;
  font-size: 0.26rem;
}
.tabl3 {
  font-size: 0.26rem;
}
</style>