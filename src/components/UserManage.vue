<template>
  <div id="person_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="person_item">
      <div style="width: 22%">
        <Menu title="用户管理" />
      </div>
      <div id="person_info">
        <div style="font-size: 1.3em">用户管理</div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column min-width="5" prop="id" label="序号">
          </el-table-column>
          <el-table-column min-width="20" prop="userAccount" label="用户账号">
          </el-table-column>
          <el-table-column min-width="15" prop="userNickName" label="用户昵称">
          </el-table-column>

          <el-table-column min-width="15" prop="userStatus" label="状态">
          </el-table-column>
          <el-table-column min-width="20" prop="user_ope" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="jinzhi(scope.$index)"
                type="text"
                size="small"
                :disabled="scope.row.userType > 1"
              >
                {{ scope.row.userStatus == "正常" ? "禁用用户" : "启用用户" }}
              </el-button>
              <el-button
                @click="chonzhi(scope.$index)"
                type="text"
                size="small"
                :disabled="scope.row.userType > 1"
                >重制密码</el-button
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
    this.loadUser();
  },
  mounted() {},
  methods: {
    jinzhi(id) {
      if (!confirm("确定要操作吗?")) {
        return;
      }
      let data = {
        userAccount: this.tableData[id].userAccount,
        userType: this.tableData[id].userStatus == "正常" ? -1 : 0,
      };
      this.$axios
        .post("http://localhost:8000/user/updateByUserAccount", data)
        .then((res) => {
          if (res.data.resultCode != 1) {
            alert(res.data.resultMsg);
            return;
          }
          this.tableData[id].userStatus =
            this.tableData[id].userStatus == "正常" ? "禁用" : "正常";
        });
    },
    chonzhi(id) {
      if (!confirm("确定要重制密码为用户账号吗?")) {
        return;
      }
      let data = {
        userAccount: this.tableData[id].userAccount,
        userPassword: this.tableData[id].userAccount,
      };
      this.$axios
        .post("http://localhost:8000/user/updateByUserAccount", data)
        .then((res) => {
          if (res.data.resultCode != 1) {
            alert(res.data.resultMsg);
            return;
          }
          alert("重制成功");
        });
    },
    loadUser() {
      this.$axios
        .get("http://localhost:8000/user/selectAllUsers", {
          params: {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.resultCode != 1) {
            alert(res.data.resultMsg);
            return;
          }
          this.total = Number(res.data.resultMsg);
          let data = res.data.resultData;
          if (data != null) {
            for (let i in data) {
              let element = data[i];
              let t = {
                id: Number(i) + Number(1),
                userAccount: element.userAccount,
                userNickName: element.userNickname,
                userStatus: element.userType == -1 ? "禁止登录" : "正常",
                userType: element.userType,
              };
              this.tableData.push(t);
            }
          }
        });
    },
    pageChange(num) {
      this.pageNum = num;
      this.loadUser();
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