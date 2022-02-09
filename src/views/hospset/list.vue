<template>
  <div class="app-container">
    医院设置列表
    <el-table
      :data="list"
      style="width: 100%"
    >
      <el-table-column type="index" width="50" label="序号" />
      <el-table-column prop="hosname" label="医院名称" />
      <el-table-column prop="hoscode" label="医院编号" />
      <el-table-column prop="apiUrl" label="api基础路径" width="200" />
      <el-table-column prop="contactsName" label="联系人姓名" />
      <el-table-column prop="contactsPhone" label="联系人手机" />
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
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
      list: [], // 每页数据集合
      total: 0 // 总记录数
    }
  },
  created() {
    // 一般调用methods定义的方法得到数据
    this.getList()
  },
  methods: {
    // 医院设置列表
    getList(page = 1) {
      this.current = page
      hospset.getHospSetList(this.current, this.limit, this.searchObj)
        .then(response => {
          // 返回集合赋值给list
          this.list = response.data.records
          // 总数
          this.total = response.data.total
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

