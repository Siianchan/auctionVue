<template>
  <div class="topmenu">
    <div id="head">
      <div>江西高校物品拍卖网</div>

      <div>
        发布商品
        <el-divider direction="vertical"></el-divider>
        登录/注册
      </div>
    </div>
    <el-divider style="margin: 0"></el-divider>
    <div id="search"></div>
  </div>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      t: false,
    };
  },
  created() {},
  methods: {},
};
</script>
<style >
.topmenu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

#search {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: orange;
}
#head {
  color: #333;
  text-transform: capitalize;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  /* box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); */
}

.loginPage {
  position: fixed;
  width: 300px;
  margin: auto;
  margin-top: 300px;
  background-color: white;
  border: 1px rgba(0, 0, 0, 0.075) solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  z-index: 10;
}
.user_operate {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.user_operate :hover {
}
a {
  color: #212121;
}
</style>
