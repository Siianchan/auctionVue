<template>
  <div id="login_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>登录/注册</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="login_frame">
      <div id="left">
        <div style="color: white">欢迎！</div>
        <div style="color: white">江西高校物品拍卖网</div>
        <div
          @click="qiehuan"
          id="zc_button"
          style="font-size: 1em; margin-top: 10%"
        >
          <span v-if="this.text == '登录'">注册</span>
          <span v-if="this.text == '注册'">登录</span>
        </div>
      </div>
      <div id="right">
        <div style="font-size: 1.8em; margin-top: 5%">{{ text }}</div>
        <input
          v-model="account"
          class="input"
          maxlength="20"
          placeholder="请输入账号"
          type="text"
        />
        <input
          v-model="password"
          class="input"
          maxlength="20"
          placeholder="请输入密码"
          type="password"
        />
        <input
          v-model="confirm_pwd"
          class="input"
          v-if="this.text == '注册'"
          placeholder="确认密码"
          type="password"
          maxlength="20"
        />
        <el-button
          style="
            background-color: #fdb813;
            color: white;
            width: 80%;
            margin-top: 10%;
          "
          @click="button_click"
          >{{ text }}</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "登录",
      account: "",
      password: "",
      confirm_pwd: "",
    };
  },
  methods: {
    button_click() {
      if (this.text == "注册") {
        if (this.confirm_pwd != this.password) {
          alert("两次输入密码不一致！");
        }
        this.$axios({
          method: "post",
          url: "http://localhost:8000/addUser",
          data: {
            userAccount: this.account,
            userPassword: this.password,
          },
        }).then(function (response) {
          alert(response.data.resultMsg);
        });
      } else {
        this.$axios({
          method: "post",
          url: "http://localhost:8000/login",
          data: {
            userAccount: this.account,
            userPassword: this.password,
          },
        }).then((response) => {
          if (response.data.resultCode == 1) {
            localStorage.setItem("token", response.data.resultData.spare1);
            alert(response.data.resultMsg);
            this.$root.islogin = true;
            this.$router.push({ path: "/" });
          } else {
            alert("账号或密码错误");
            this.password = "";
          }
        });
      }
    },
    qiehuan() {
      if (this.text == "登录") {
        this.text = "注册";
      } else {
        this.text = "登录";
      }
    },
  },
};
</script>
<style>
.input {
  opacity: 0.7;
  margin-top: 10%;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline: 0;
  width: 80%;
  height: 40px;
  font-size: 1em;
}
#zc_button {
  cursor: pointer;
  line-height: 37px;
  text-align: center;
  color: white;
  width: 120px;
  height: 37px;
  border: 1px white solid;
  border-radius: 4px;
}
#left div {
  font-size: 1.2em;
  margin: 2%;
}
#left {
  width: 37%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdb813;
}
#right {
  width: 63%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  padding: 2%;
}
#login_frame {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  display: flex;
  height: 500px;
  margin: auto;
  margin-top: 10%;
  width: 800px;
}
#login_body {
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
}
</style>

