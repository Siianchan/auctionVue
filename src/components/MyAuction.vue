<template>
  <div id="person_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的拍卖</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="person_item">
      <div style="width: 22%">
        <Menu title="我的拍卖"/>
      </div>
           <div id="person_info">
        <div style="font-size: 1.3em">我的订单</div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="order_id" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="order_name" label="物品名称" width="180">
          </el-table-column>
          <el-table-column prop="order_price" label="当前竞价">
          </el-table-column>
          <el-table-column prop="order_status" label="状态"> </el-table-column>
          <el-table-column prop="order_ope" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
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
      total: 100,
      pageSize: 10,
      tableData: [
        {
          order_id: "1",
          order_name: "Test",
          order_price: "100",
          order_status: "进行中",
        },

        {
          order_id: "1",
          order_name: "Test",
          order_price: "1001",
          order_status: "进行中",
        },
        {
          order_id: "1",
          order_name: "Test",
          order_price: "100",
          order_status: "进行中",
        },
        {
          order_id: "1",
          order_name: "Test",
          order_price: "100",
          order_status: "进行中",
        },
        {
          order_id: "1",
          order_name: "Test",
          order_price: "100",
          order_status: "进行中",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    pageChange(num) {
      alert(num);
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