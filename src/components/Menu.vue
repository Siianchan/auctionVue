<template>
  <div id="menu_body">
    <div class="menu_item" v-for="(i, index) in item" @click="menuClick(index)">
      <span v-if="i != title" style="margin: 5%">{{ i }}</span>
      <span v-if="i == title" style="margin: 5%; color: #fdb813">{{ i }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      item: ["个人信息", "修改密码", "我的订单", "我的拍卖"],
      url: ["/Person", "/updatePwd", "/myOrder", "/myAuction"],
    };
  },
  methods: {
    menuClick(index) {
      this.$router.push({ path: this.url[index] });
    },
  },
};
</script>
<style>
#menu_body :hover {
  background-color: #fdb813;
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