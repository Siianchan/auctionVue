<template>
  <div id="goods_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>物品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="goods_details">
      <div style="width: 45%; height: 400px">
        <el-carousel
          indicator-position="outside"
          trigger="click"
          height="300px"
        >
          <el-carousel-item v-for="item in src_arr" :key="item">
            <img :src="item" width="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="goods_text">
        <h4>标题</h4>
        <span> 起拍时间：2021-11-11 结束时间：2021-11-11 </span>
        <span> 起拍价：￥1000 加价幅度：￥10</span>
        <span> 所属分类：其他 </span>\
        <div style="display: flex; font-size: 2em">
          <span> 当前价：</span> <span style="color: red">￥10000</span>
          <!-- <div style="margin:auto;font-size: 0.4em;border: 1px solid #d7dae2;height:20px">出价人：张三</div> -->
        </div>
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
        <div id="daojishi">
          距结束：<span>{{ day }}</span
          >天<span>{{ hour }}</span
          >&nbsp;时<span> {{ minute }}</span
          >&nbsp;分<span>{{ second }}</span
          >&nbsp;秒
        </div>
        <div>
          您的竞价：<el-input
            style="width: 20%"
            v-model="input"
            placeholder=""
            maxlength="7"
            oninput="value=value.replace(/[^\d]/g,'')"
            :disabled="dis"
          ></el-input>
          <span> 元 </span>
          <el-button style="width: 50%; margin-left: 5%" type="success"
            >竞拍</el-button
          >
        </div>
      </div>
    </div>
    <div id="goods_jilu">
      <h2>竞拍记录</h2>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="status" label="状态" width="250">
        </el-table-column>
        <el-table-column prop="userName" label="用户" width="250">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="250">
        </el-table-column>
        <el-table-column prop="date" label="时间" width="250">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          status: "12987122",
          userName: "王小虎",
          price: "234",
          date: "2021-11-11",
        },
        {
          status: "12987122",
          userName: "王小虎",
          price: "234",
          date: "2021-11-11",
        },
        {
          status: "12987122",
          userName: "王小虎",
          price: "234",
          date: "2021-11-11",
        },
      ],
      src_arr: ["/static/img/1.jpg", "/static/img/2.jpg", "/static/img/3.jpg"],
      input: "",
      num: 10,
      dis: false,
      time: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  created() {
    var now = new Date().getTime();
    var end = new Date(2021, 10, 18, 9).getTime();
    this.time = end - now;
    this.day = parseInt(this.time / (1000 * 60 * 60 * 24));
    this.hour = parseInt(this.time / (1000 * 60 * 60)) % 24;
    setInterval(this.setSeconde, 1000);
  },
  methods: {
    setSeconde() {
      var now = new Date().getTime();
      var end = new Date(2021, 10, 18, 9).getTime();
      this.time = end - now;
      this.minute = parseInt(this.time / (1000 * 60)) % 60;
      this.second = parseInt(this.time / 1000) % 60;
    },
  },
};
</script>
<style>
#goods_jilu {
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#daojishi {
  font-size: 1em;
  margin-bottom: 3%;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 50px;
  /* border: 1px solid #d7dae2; */
}
#daojishi span {
  width: 20px;
  margin: 0px 10px;
  font-size: 1.5em;
  color: red;
}
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

