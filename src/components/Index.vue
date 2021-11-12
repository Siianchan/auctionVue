<template>
  <div class="index">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="item in src_arr" :key="item">
        <img :src="item" width="100%" />
      </el-carousel-item>
    </el-carousel>
    <div id="index_body">
      <div style="width: 100%; height: 50px; margin-top: 20px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div id="sp_list">
        <div class="box-card" v-for="i in 12">
          <div style="width: 100%; height: 65%; overflow: hidden">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            />
          </div>
          <div id="box_text">
            <div style="width: 100%;color:#303133;margin-top:2%">
              <b> {{ "列表内容 " + i }}</b>
            </div>
            <div style="width: 100%;color:#606266">起拍时间：2021-11-11</div>
            <div style="color: red;margin-bottom:2%">￥1000</div>
          </div>
        </div>
      </div>
      <div id="fenye">
        <div>
          <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      src_arr: ["/static/img/1.jpg", "/static/img/2.jpg", "/static/img/3.jpg"],
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
#box_text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 0.9em;
  width: 100%;
  height: 35%;
}
#box_text div {
  margin-left: 5%;
}
#fenye {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
#index_body {
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
}
#sp_list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-card {
  margin: 1%;
  width: 23%;
  height: 350px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  overflow: hidden;
}
.box-card:hover {
  cursor: pointer;
  box-sizing: border-box;
  animation: clippath 0.6s linear;
  animation-fill-mode: forwards;
}
@keyframes clippath {
  0% {
    border: 1px solid rgba(253, 184, 19, 0);
  }
  25% {
    border: 1px solid rgba(253, 184, 19, 0.25);
  }
  50% {
    border: 1px solid rgba(253, 184, 19, 0.5);
  }
  75% {
    border: 1px solid rgba(253, 184, 19, 0.75);
  }
  100% {
    border: 1px solid rgba(253, 184, 19, 1);
  }
}
</style>
