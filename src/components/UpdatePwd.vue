<template>
  <div id="person_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="person_item">
      <div style="width: 22%">
        <Menu title="修改密码" />
      </div>
      <div id="person_info">
        <div style="font-size: 1.3em">修改密码</div>
        <div>原密码</div>
        <div>
          <el-input v-model="oldPwd" type="password"></el-input>
        </div>
        <div>新密码</div>
        <div>
          <el-input v-model="newPwd" type="password"></el-input>
        </div>
        <div>确认密码</div>
        <div>
          <el-input v-model="cfPwd" type="password"></el-input>
        </div>
        <div>
          <el-button @click="updateButton" style="width: 100px; float: right"
            >修改密码</el-button
          >
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
      oldPwd: "",
      newPwd: "",
      cfPwd: "",
    };
  },
  mounted() {},
  methods: {
    updateButton() {
      if (this.newPwd != this.cfPwd) {
        this.newPwd = "";
        this.cfPwd = "";
        alert("新密码与确认密码不一致");
        return;
      }
      if (this.oldPwd == this.newPwd) {
        this.oldPwd = "";
        this.newPwd = "";
        this.cfPwd = "";
        alert("新密码与旧密码相同");
        return;
      }
      var userInfo = this.$root.userInfo;
      if (userInfo == null) {
        alert("请先登录");
        return;
      }
      if (!confirm("您确定要修改吗？")) {
        return;
      }
      let data = {
        account: userInfo.userId,
        oldPwd: this.oldPwd,
        newPwd: this.newPwd,
      };
      this.$axios
        .post("http://localhost:8000/user/updatePwd", data)
        .then((res) => {
          if (res.data.resultCode != 1) {
            this.oldPwd = "";
            this.newPwd = "";
            this.cfPwd = "";
          }
          alert(res.data.resultMsg);
        });
    },
  },
  components: {
    Menu,
  },
};
</script>
<style>
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