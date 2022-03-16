<template>
  <div id="person_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的竞拍</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="person_item">
      <div style="width: 22%">
        <Menu title="我的竞拍" />
      </div>
      <div id="person_info">
        <div style="font-size: 1.3em">我的竞拍</div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column min-width="10" prop="order_id" label="序号">
          </el-table-column>
          <el-table-column min-width="35" prop="order_name" label="物品名称">
          </el-table-column>
          <el-table-column
            min-width="15"
            prop="order_now_price"
            label="当前竞价"
          >
          </el-table-column>
          <el-table-column
            min-width="15"
            prop="order_my_price"
            label="我的出价"
          >
          </el-table-column>
          <el-table-column min-width="15" prop="order_status" label="状态">
          </el-table-column>
          <el-table-column min-width="20" prop="order_ope" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.$index)"
                type="text"
                size="small"
                >查看</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div id="fenye">
          <div style="height: 20px">
            <el-pagination
              :page-size="pageSize"
              :pager-count="11"
              layout="prev, pager, next"
              :total="total"
              :current-page="pageNum"
              @current-change="pageChange"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
export default {
  name: "Person",
  data() {
    return {
      pageNum: 1,
      total: 1,
      pageSize: 10,
      status_map: ["进行中", "已结束"],
      tableData: [],
    };
  },
  created() {
    this.loadMyOrder();
  },
  mounted() {},
  methods: {
    handleClick(id) {
      this.$router.push({
        path: "/Goods",
        query: { goodsId: this.tableData[id].auctionId },
      });
    },
    loadMyOrder() {
      this.$axios
        .get("http://localhost:8000/getMyOrderList", {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          if (res.data.resultCode != 1) {
            return;
          }
          this.total = Number(res.data.resultMsg);
          let data = res.data.resultData;
          if (data != null) {
            for (let i in data) {
              let element = data[i];
              let t = {
                auctionId: element.auctionId,
                order_id: Number(i) + Number(1),
                order_name: element.goodsName,
                order_now_price: element.goodsPrice,
                order_my_price: element.myPrice,
                order_status: this.status_map[element.goodsStatus],
              };
              this.tableData.push(t);
            }
          }
        });
    },
    pageChange(num) {
      this.pageNum = num;
      this.loadMyOrder();
    },
  },
  components: {
    Menu,
  },
};
</script>
<style>
#fenye {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 40px;
  border-radius: 4px;
}
#person_info div {
  margin-bottom: 1%;
  font-weight: bold;
}
#person_info {
  width: 70%;
  display: flex;
  margin-left: 3%;
  flex-direction: column;
}
#person_item {
  width: 100%;
  display: flex;
}
#person_body {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
}
</style>