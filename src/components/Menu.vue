<template>
  <div id="menu_body">
    <div
      class="menu_item"
      v-for="(i, index) in item"
      @click="menuClick(index)"
      v-if="i != '用户管理' || $root.userInfo.userType > 0"
    >
      <span v-if="i != title" style="margin: 5%">{{ i }} </span>
      <span v-if="i == title" style="margin: 5%; color: #fdb813">{{ i }}</span>
    </div>
    <div class="menu_item" @click="logout">
      <span style="margin: 5%">退出登录</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      item: ["个人信息", "用户管理", "修改密码", "我的竞拍", "我的拍卖"],
      url: ["/Person", "/userManage", "/updatePwd", "/myOrder", "/myAuction"],
    };
  },
  methods: {
    logout() {
      if (confirm("确定要退出登录吗？")) {
        localStorage.removeItem("token");
        this.$root.islogin = false;
        this.$root.userInfo = {};
        this.$router.push({ path: "/" });
      }
    },
    menuClick(index) {
      this.$router.push({ path: this.url[index] });
    },
  },
};
</script>
<style>
#menu_body :hover {
  color: #fdb813;
}

.menu_item {
  font-size: 0.9em;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  height: 47px;
  cursor: pointer;
  background-color: #333;
  margin-bottom: 10px;
  border-radius: 5px;
}
#menu_body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>