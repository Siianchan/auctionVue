<template>
  <div id="person_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>账号中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="person_item">
      <div style="width: 22%">
        <Menu />
      </div>
      <div id="person_info">
        <div style="font-size: 1.3em">账号基本信息</div>
        <div>账号</div>
        <div>
          <el-input :value="account" :disabled="true"></el-input>
        </div>
        <div>昵称</div>
        <div>
          <el-input v-model="nickName"></el-input>
        </div>
        <!-- <div>邮箱</div>
        <div>
          <el-input v-model="mail"></el-input>
        </div> -->

        <div>学校</div>
        <div>
          <el-input v-model="school"></el-input>
        </div>
        <div>地址</div>
        <div>
          <el-input v-model="addr"></el-input>
        </div>
        <div>
          <el-button @click="updateButton" style="width: 100px; float: right"
            >修改</el-button
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
      addr: "",
      account: "",
      school: "",
      // mail: "",
      nickName: "",
    };
  },
  mounted() {
    this.account = this.$root.userInfo.userAccount;
    this.nickName = this.$root.userInfo.userNickname;
    this.addr = this.$root.userInfo.userAddr;
    this.school = this.$root.userInfo.userSchool;
  },
  methods: {
    updateButton() {
      let user = {
        userAccount: this.account,
        userNickname: this.nickName,
        userSchool: this.school,
        userAddr: this.addr,
      };
      this.$axios
        .post("http://localhost:8000/user/updateByUserAccount", user)
        .then((res) => {
          if (res.data.resultCode == 1) {
            this.$root.userInfo.userAccount = this.account;
            this.$root.userInfo.userNickname = this.nickName;
            this.$root.userInfo.userAddr = this.addr;
            this.$root.userInfo.userSchool = this.school;
            alert("修改成功");
          }else{
            alert("修改失败")
          }
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