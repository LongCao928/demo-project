
import Request from '@/utils/request'
import Module from '@/config/module'
import type { IDemoData } from './demo.d'
export default {
  getData() {
    Request.get(Module.Posts, '/1')
  },
  submitData(data: IDemoData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ code: 200, message: '提交成功!' })
      }, 1500)
    })
  }
}