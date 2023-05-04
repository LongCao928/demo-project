import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInputDataStore = defineStore('inputData', () => {
  const data = reactive({
    aInput: '',
    bInput: '',
    isLogin: false
  })

  function setInputAData(val: string) {
    data.aInput = val
  }

  function setInputBData(val: string) {
    data.bInput = val
  }

  function changeLogin() {
    data.isLogin = !data.isLogin
  }

  return { data, setInputAData, setInputBData, changeLogin }
})