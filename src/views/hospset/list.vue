<template>
  <div class="app-container">
    医院设置列表
  </div>
</template>
<script>
// 引入接口定义
import hospset from '@/api/hospset'
export default {
  data() {
    return {
      current: 1, // 当前页
      limit: 3, // 每页
      searchObj: {}, // 条件封装对象
      list: [] // 每页数据集合
    }
  },
  created() {
    // 一般调用methods定义的方法得到数据
    this.getList()
  },
  methods: {
    // 医院设置列表
    getList() {
      hospset.getHospSetList(this.current, this.limit, this.searchObj)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

