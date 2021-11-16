<template>
  <div id="publish_body">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>发布商品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div id="publis_form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            rows="5"
            maxlength="200"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="起拍价格" prop="price">
          <el-input v-model="ruleForm.price" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="加价幅度" prop="step">
          <el-input v-model="ruleForm.step"></el-input>
        </el-form-item>
        <el-form-item label="商品分类" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="截止时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        desc: "",
        price: "",
        step: "",
        type: [],
        date1: "",
        date2: "",
        delivery: false,
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        desc: [{ required: true, message: "请填写商品描述", trigger: "blur" }],
        price: [{ required: true, message: "请选择起拍价格", trigger: "blur" }],
        step: [{ required: true, message: "请选择加价幅度", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
#publis_form {
  width: 60%;
  margin: auto;
  margin-top: 2%;
}
#publish_body {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
}
</style>