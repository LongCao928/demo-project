
<template>
  <el-form
    ref="ruleFormRef"
    :model="form"
    :rules="rules">
    <el-form-item label="请输入：" prop="val">
      <el-input v-model="form.val" placeholder="请输入："></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button @click="jump(ruleFormRef)">next</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useInputDataStore } from '@/stores/inputData'
const ruleFormRef = ref<FormInstance>()
const form = reactive({
  val: ''
})
const rules = reactive<FormRules>({
  val: [
    { required: true, message: '请输入内容', trigger: 'blur' }
  ]
})
const router = useRouter()

const store = useInputDataStore()
const { data } = storeToRefs(store)
const { setInputAData } = store
console.log(data.value)
form.val = data.value.aInput || ''

const jump =  async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      setInputAData(form.val)
      router.push({ name: 'pageB' })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped></style>