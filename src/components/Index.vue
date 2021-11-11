<template>
  <div class="index">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="item in src_arr" :key="item">
        <img :src="item" width="100%" />
        <div>
         {{item}} 
        </div>
        <!-- <h3 class="small">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      src_arr:["/static/img/1.jpg","/static/img/2.jpg","/static/img/3.jpg"],
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
