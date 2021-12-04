<template>
  <div id="menu_body">
    <div class="menu_item" v-for="i in 5">
      <span style="margin: 5%">基本信息</span>
    </div>
  </div>
</template>
<script>
export default {};
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