
<template>
  <el-form 
    ref="formRef"
    :model="form"
    :rules="rules"
  >
    <el-form-item label="请输入：" prop="textareaVal">
      <el-input v-model="form.textareaVal"
        :rows="2"
        type="textarea"
        placeholder="请输入："
        width="220px"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="jump('prev')">before</el-button>
      <el-button @click="jump('next', formRef)">next</el-button>
      <el-button @click="changeLogin">{{ data.isLogin ? '已登录' : '已退出' }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useInputDataStore } from '@/stores/inputData'
const router = useRouter()
const formRef = ref<FormInstance>()

const form = reactive({
  textareaVal: ''
})

const rules = reactive<FormRules>({
  textareaVal: [
    { required: true, message: '请输入内容', trigger: 'blur' }
  ]
})

const store = useInputDataStore()
const { data } = storeToRefs(store)
const { setInputBData, changeLogin } = store
console.log(data.value)
form.textareaVal = data.value.bInput || ''

const jump = async (type: string, formEl?: FormInstance | undefined) => {
  if(type === 'next') {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log(form.textareaVal)
        setInputBData(form.textareaVal)
        router.push({ name: 'pageC' })
      } else {
        console.log('error submit!', fields)
      }
    })
    return
  }
  router.push({ name: 'pageA' })
}
</script>

<style scoped lang="scss">
</style>