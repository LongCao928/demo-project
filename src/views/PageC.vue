<template>
  <div v-loading="!isLogin">
    <h2 v-if="!isLogin">
      当前状态为未登录，请返回上个页面切换为登录状态！
    </h2>
    <el-form>
      <el-form-item label="页面A输入内容：">
        <span>{{ data.aInput }}</span>
      </el-form-item>
      <el-form-item label="页面B输入内容：">
        <span>{{ data.bInput }}</span>
      </el-form-item>
      <el-form-item>
        <el-button @click="jump">before</el-button>
        <el-button @click="submit">submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import { useInputDataStore } from '@/stores/inputData'
import server from '@/services/demo'
import loading from '@/utils/loading'
const isLogin = ref(false)
const router = useRouter()
const store = useInputDataStore()
const { data } = storeToRefs(store)
isLogin.value = data.value.isLogin
function jump() {
  router.push({name: 'pageB'})
}

const submit = async () => {
  loading.show()
  let res = await server.submitData({ a: data.value.aInput, b: data.value.bInput })
  loading.hide()
  console.log(res)
  ElMessage({
    message: '提交成功!',
    type: 'success',
  })
}

/* const getData = async () => {
  let resData = await server.getData()
  console.log(resData)
}
getData() */

</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 20px;
    color: red;
  }
</style>