<template>
  <div class="topmenu">
    <div id="head">
      <div>江西高校物品拍卖网</div>
      <div>
        <el-link> 发布商品</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link> 登录/注册</el-link>
      </div>
    </div>
    <el-divider style="margin: 0"></el-divider>
    <div id="header">
      <div id="header_in">
        <div style="width: 15%">
          <el-select v-model="value" clearable placeholder="分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div style="width: 45%; margin: ">
          <el-input
            placeholder="搜索商品..."
            v-model="search"
            class="input-with-select"
            style="width: 100%"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div style="width: 14%">
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
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
      ],
      value: "",
      search: "",
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

#header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #409eff;
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
