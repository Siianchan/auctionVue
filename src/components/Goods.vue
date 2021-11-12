<template>
  <div id="goods_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>商品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="goods_details">
      <div style="width: 45%; height: 500px">
        <el-carousel indicator-position="outside" trigger="click" height="300px">
          <el-carousel-item v-for="item in  src_arr" :key="item">
               <img :src="item" width="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="goods_text">
        <h4>标题</h4>
        <span> 起拍时间：2021-11-11 结束时间：2021-11-11 </span>
        <span> 所属分类：其他 </span>
        <span> 起拍价：￥1000 </span>
        <span>
          当前价：<span style="color: red">￥10000</span> 出价人：张三
        </span>
        <p>
          商品描述： 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述 商品描述 商品描述
          商品描述 商品描述 商品描述 商品描述 商品描述
        </p>
        <el-divider></el-divider>
        <div>
          您的竞价：<el-input
            style="width: 20%"
            v-model="input"
            placeholder=""
            maxlength="7"
            min="0"
            :step="num"
            max="10000000"
            type="number"
            :disabled="dis"
          ></el-input>
          <el-button style="width: 50%; margin-left: 5%" type="success"
            >竞拍</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       src_arr: ["/static/img/1.jpg", "/static/img/2.jpg", "/static/img/3.jpg"],
      input: "",
      num: 10,
      dis: false,
    };
  },
};
</script>
<style>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#goods_text {
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  width: 50%;
  height: 650px;
  /* border: 1px solid #d7dae2; */
  border-radius: 4px;
}
#goods_text span {
  margin-top: 3%;
}
#goods_body {
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
}
#goods_details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 650px;
  /* border: 1px solid #d7dae2; */
  border-radius: 4px;
}
</style>

