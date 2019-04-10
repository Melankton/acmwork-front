<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="当前用户">
        {{ form.username }}
      </el-form-item>
      <el-form-item label="绑定vjudge账号">
        <el-input v-model="form.vjudge" style="width: 40%"/>
        <el-button type="primary" style="margin-left: 10px" @click="testVjudge(form.vjudge)">测试</el-button>
        <el-button type="primary" @click="vjudgeBind(form.vjudge)">绑定</el-button>
      </el-form-item>
      <el-form-item label="绑定邮箱">
        <el-input v-model="form.email" style="width: 40%"/>
      </el-form-item>
      <el-form-item label="修改当前密码">
        <el-input v-model="form.password" style="width: 40%"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveUserInfo(form)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getVjudgeInfo, testVjudge, vjudgeBind, saveUserInfo } from '@/api/login'
import store from '@/store'

export default {
  data() {
    return {
      form: {
        username: store.getters.name,
        vjudge: store.getters.vjudge,
        email: store.getters.email,
        password: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    saveUserInfo(form) {
      saveUserInfo(form.username, form.password, form.email).then(response => {
        const data = response
        if (data.code === 20000) {
          this.$notify({
            title: '成功',
            message: data.status,
            type: 'success'
          })
        } else {
          this.$notify.error({
            title: '失败',
            message: '账号信息更新失败',
            type: 'warning'
          })
        }
      })
    },
    vjudgeBind(vjudge) {
      vjudgeBind(vjudge, this.form.username).then(response => {
        const data = response
        if (data.code === 20000) {
          this.$notify({
            title: '成功',
            message: '账号绑定成功,稍后将导入数据',
            type: 'success'
          })
        } else {
          this.$notify.error({
            title: '失败',
            message: '账号绑定失败,请稍后再试',
            type: 'warning'
          })
        }
      })
    },
    testVjudge(vjudge) {
      testVjudge(vjudge).then(response => {
        const data = response
        if (data.code === 20000) {
          this.$notify({
            title: '成功',
            message: '账号测试通过',
            type: 'success'
          })
        } else {
          this.$notify.error({
            title: '失败',
            message: '账号测试失败',
            type: 'warning'
          })
        }
      })
    },
    test() {
      getVjudgeInfo('ky25390', store.getters.name).then(response => {
        const data = response.data
        console.log(data)
      })
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
  .line {
    text-align: center;
  }
</style>

