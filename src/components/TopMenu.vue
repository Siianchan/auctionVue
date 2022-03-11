<template>
  <div class="topmenu">
    <div id="head">
      <div>江西高校物品拍卖网</div>
      <div class="headLogin">
        <el-link :underline="false" href="#/publish"> 发布商品</el-link>
        <el-divider direction="vertical"></el-divider>
        <!-- <a v-if="this.$root.islogin" @click="headClick">
          Siianchan
        </a> -->
        <!-- <el-avatar icon="el-icon-user-solid"></el-avatar> -->
        <!-- <el-avatar  shape="square" size="small" icon="el-icon-user-solid"></el-avatar> -->
        <el-link v-if="this.$root.islogin" :underline="false" href="#/Person">
          <span style="font-weight: bold">{{
            this.$root.userInfo.userNickname
          }}</span></el-link
        >
        <el-link v-if="!this.$root.islogin" :underline="false" href="#/login">
          登录/注册</el-link
        >
      </div>
    </div>
    <div id="header">
      <div id="header_in">
        <div style="width: 15%">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-s-unfold" style="font-size: 1.1em"></i>
              {{ sele }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="所有分类">所有分类</el-dropdown-item>
              <el-dropdown-item command="日常百货">日常百货</el-dropdown-item>
              <el-dropdown-item command="数码电子">数码电子</el-dropdown-item>
              <el-dropdown-item command="衣物服饰">衣物服饰</el-dropdown-item>
              <el-dropdown-item command="学习资料">学习资料</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <el-select v-model="value" clearable placeholder="分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->
        </div>
        <div style="width: 45%; margin: ">
          <el-input
            placeholder="搜索商品..."
            v-model="search"
            class="input-with-select"
            style="width: 100%"
            maxlength="20"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div style="width: 13%">
          <div>
            <i class="el-icon-star-off" style="font-size: 1.5em"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      sele: "所有分类",
      value: "",
      search: "",
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      if (localStorage.getItem("token") != null) {
        this.$axios
          .get("http://localhost:8000/user/selectByUserAccount")
          .then((res) => {
            if (res.data.resultCode == 1) {
              this.$root.islogin = true;
              this.$root.userInfo = res.data.resultData;
            }
          });
      }
    },
    headClick() {},
    handleCommand(command) {
      this.sele = command;
      this.$message("click on item " + command);
    },
  },
};
</script>
<style >
.el-dropdown-link {
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.topmenu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.headLogin {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fdb813;
}
#header_in {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}
#head {
  color: #606266;
  text-transform: capitalize;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 50px;
  background-color: white;
  /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); */
}
</style>
