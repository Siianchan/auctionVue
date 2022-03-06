<template  v-loading.fullscreen.lock="fullscreenLoading">
  <div id="publish_body" v-loading.fullscreen.lock="fullscreenLoading">
    <div style="width: 100%; height: 50px; margin-top: 20px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>发布物品</el-breadcrumb-item>
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
        <el-form-item label="物品名称" prop="name">
          <el-input v-model="ruleForm.name" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="物品描述" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            rows="5"
            maxlength="200"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="起拍价格" prop="price">
          <el-input
            v-model="ruleForm.price"
            maxlength="10"
            type="number"
          ></el-input>
        </el-form-item>
        <el-form-item label="加价幅度" prop="step">
          <el-input
            v-model="ruleForm.step"
            maxlength="5"
            type="number"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品分类" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择分类">
            <el-option label="日常百货" value="baihuo"></el-option>
            <el-option label="学习资料" value="ziliao"></el-option>
            <el-option label="衣物服饰" value="fushi"></el-option>
            <el-option label="数码电子" value="shuma"></el-option>
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
        <el-form-item label="商品图片">
          <el-upload
            action="#"
            :limit="5"
            list-type="picture-card"
            :on-exceed="fileNumsLimit"
            :auto-upload="false"
            :on-change="fileChange"
          >
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
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
      fullscreenLoading: false,
      files: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      ruleForm: {
        name: "",
        desc: "",
        price: 1,
        step: 1,
        type: "",
        date1: "",
        date2: "",
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
        price: [
          { required: true, message: "请选择起拍价格", trigger: "blur" },
          // { type: "number", message: "价格必须为数字值" },
        ],
        step: [
          { required: true, message: "请选择加价幅度", trigger: "blur" },
          // { type: "number", message: "价格必须为数字值" },
        ],
        type: [{ required: true, message: "请选择分类", trigger: "blur" }],
      },
    };
  },
  methods: {
    fileChange(file) {
      this.files.push(file.raw);
    },
    fileNumsLimit() {
      this.$message("图片最多上传5张");
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data = new FormData();
          var date = new Date(this.ruleForm.date1);
          var time = new Date(this.ruleForm.date2);
          date.setHours(time.getHours());
          date.setMinutes(time.getMinutes());
          data.append("goodsName", this.ruleForm.name);
          data.append("goodsDescribe", this.ruleForm.desc);
          data.append("startPrice", this.ruleForm.price);
          data.append("priceStep", this.ruleForm.step);
          data.append("goodsEndTime", date);
          data.append("goodsClassify", this.ruleForm.type);
          this.files.forEach((f) => {
            data.append("files", f);
          });
          console.log(data);
          var config = {
            headers: { "Content-Type": "multipart/form-data;boundary=----" },
          };
          this.fullscreenLoading = true;
          this.$axios
            .post("http://localhost:8000/addGoods", data, config)
            .then((response) => {
              this.fullscreenLoading = false;
              alert("添加成功");
            });
          alert("submit!");
        } else {
          alert("请正确填写！");
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