<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="12">
          <el-form-item label="用户名称" prop="field104">
            <el-input v-model="formData.field104" placeholder="请输入用户名称" clearable :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号" prop="mobile">
            <el-input
              v-model="formData.mobile"
              placeholder="请输入手机号"
              :maxlength="11"
              show-word-limit
              clearable
              prefix-icon="el-icon-mobile"
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="权限等级" prop="field105">
            <el-select v-model="formData.field105" placeholder="请选择权限等级" clearable :style="{width: '100%'}">
              <el-option
                v-for="(item, index) in field105Options"
                :key="index"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出生日期" prop="field107">
            <el-date-picker
              v-model="formData.field107"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              :style="{width: '100%'}"
              placeholder="请选择出生日期"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学历" prop="field109">
            <el-select v-model="formData.field109" placeholder="请选择学历" clearable :style="{width: '100%'}">
              <el-option
                v-for="(item, index) in field109Options"
                :key="index"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="毕业院校" prop="field111">
            <el-input v-model="formData.field111" placeholder="请输入毕业院校" clearable :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注" prop="field101">
            <el-input
              v-model="formData.field101"
              type="textarea"
              placeholder="请输入备注"
              :autosize="{minRows: 4, maxRows: 4}"
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field104: undefined,
        mobile: '',
        field105: undefined,
        field107: null,
        field109: undefined,
        field111: undefined,
        field101: undefined
      },
      rules: {
        field104: [{
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }],
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        field105: [{
          required: true,
          message: '请选择权限等级',
          trigger: 'change'
        }],
        field107: [{
          required: true,
          message: '请选择出生日期',
          trigger: 'change'
        }],
        field109: [{
          required: true,
          message: '请选择学历',
          trigger: 'change'
        }],
        field111: [{
          required: true,
          message: '请输入毕业院校',
          trigger: 'blur'
        }],
        field101: [{
          required: true,
          message: '请输入备注',
          trigger: 'blur'
        }]
      },
      field105Options: [{
        'label': '管理员',
        'value': 1
      }, {
        'label': '教师',
        'value': 2
      }],
      field109Options: [{
        'label': '小学',
        'value': 1
      }, {
        'label': '初中',
        'value': 2
      }, {
        'label': '高中',
        'value': 3
      }, {
        'label': '本科',
        'value': 4
      }, {
        'label': '研究生',
        'value': 5
      }]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    }
  }
}

</script>
<style>
</style>
