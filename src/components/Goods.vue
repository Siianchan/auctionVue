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
        <h3>{{ goods.goodsName }}</h3>
        <span> 所属分类：{{ goods.goodsClassify }} </span>
        <span> 结束时间：{{ goods.goodsEndTime }}</span>
        <span> 起拍价：￥{{ goods.startPrice }}</span>
        <span> 加价幅度：￥{{ goods.priceStep }}</span>
        <p>物品描述：{{ goods.goodsDescribe }}</p>
        <div style="display: flex; font-size: 2em">
          <span> 当前价：</span>
          <span style="color: red">￥{{ goods.goodsPrice }}</span>
        </div>

        <el-divider></el-divider>
        <div id="daojishi" v-if="!isEnd">
          距结束：<span>{{ day }}</span
          >天<span>{{ hour }}</span
          >&nbsp;时<span> {{ minute }}</span
          >&nbsp;分<span>{{ second }}</span
          >&nbsp;秒
        </div>
        <div id="daojishi" v-if="isEnd">
          <b><span style="color: red"> 已结束</span></b>
        </div>
        <div>
          您的竞价：<el-input
            style="width: 20%"
            v-model="pull_price"
            placeholder=""
            maxlength="7"
            oninput="value=value.replace(/[^\d]/g,'')"
            :disabled="isEnd"
          ></el-input>
          <span> 元 </span>
          <el-button
            style="width: 50%; margin-left: 5%"
            type="success"
            @click="jinpai"
            :disabled="isEnd"
            >竞拍</el-button
          >
        </div>
      </div>
    </div>
    <div id="goods_jilu">
      <h2>竞拍记录</h2>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        >>
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
      isEnd: false,
      goodsId: this.$route.query.goodsId,
      goods: {},
      tableData: [],
      src_arr: [],
      pull_price: 1,
      num: 10,
      dis: false,
      time: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  watch: {
    $route(to, form) {
      this.loadGoods();
      this.loadRecord();
    },
  },
  created() {
    this.loadGoods();
    this.loadRecord();
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "success-row";
      }
    },
    loadRecord() {
      this.$axios
        .get("http://localhost:8000/auctionRecord/queryPriceList", {
          params: {
            auctionId: this.goodsId,
          },
        })
        .then((res) => {
          this.tableData = [];
          var datas = res.data.resultData;
          this.src_arr = res.data.resultData.goodsPic;
          for (let i in datas) {
            var element = datas[i];
            let t = {
              status: "失败",
              userName: element.buyerAccount,
              price: element.recordPrice + " 元",
              date: element.gmtCreate,
            };
            this.tableData.push(t);
          }
          if (this.tableData.length > 0) {
            this.tableData[0].status = "成功";
          }
        });
    },
    loadGoods() {
      this.$axios
        .get("http://localhost:8000/getGoodsDetails", {
          params: {
            goodsId: this.goodsId,
          },
        })
        .then((res) => {
          if (res.data.resultCode != 1) {
            alert("加载出错");
            return;
          }
          this.goods = res.data.resultData;
          this.pull_price = this.goods.goodsPrice;
          this.src_arr = JSON.parse(this.goods.goodsPic);
          var now = new Date().getTime();
          var end = new Date(this.goods.goodsEndTime).getTime();
          this.time = end - now;
          if (this.time > 0) {
            this.day = parseInt(this.time / (1000 * 60 * 60 * 24));
            setInterval(this.setSeconde, 1000);
          } else {
            this.isEnd = true;
          }
        });
    },
    jinpai() {
      if (!this.$root.islogin) {
        alert("请先登录");
        this.$router.push({ path: "/" });
      }
      if (this.pull_price < this.goods.goodsPrice + this.goods.priceStep) {
        alert("出价金额必须高于当前金额及加价幅度");
        return;
      }

      var ret = confirm("确认出价");
      if (ret) {
        this.$axios
          .post("http://localhost:8000/auctionRecord/add", {
            auctionId: this.goodsId,
            recordPrice: this.pull_price,
          })
          .then((res) => {
            if (res.data.resultCode != 1) {
              alert("竞价失败，请刷新后重试");
            } else {
              this.goods.goodsPrice = this.pull_price;
              this.loadRecord();
              alert("竞价成功");
            }
            console.log(res);
          });
      }
    },
    setSeconde() {
      var now = new Date().getTime();
      var end = new Date(this.goods.goodsEndTime).getTime();
      this.time = end - now;
      if (this.time > 0) {
        this.hour = parseInt(this.time / (1000 * 60 * 60)) % 24;
        this.minute = parseInt(this.time / (1000 * 60)) % 60;
        this.second = parseInt(this.time / 1000) % 60;
      } else {
        this.isEnd = true;
      }
    },
  },
};
</script>
<style>
.el-table .success-row {
  background: #f0f9eb;
}
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
  width: 28px;
  height: 25px;
  margin: 0px 3px;
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
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  font-size: 0.95em;
  width: 50%;
  height: 650px;
  /* border: 1px solid #d7dae2; */
  border-radius: 4px;
}
#goods_text span {
  margin-top: 2%;
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

