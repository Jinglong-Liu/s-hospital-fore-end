<template>
  <div class="app-container">
    <div class="el-toolbar">
      <div class="el-toolbar-body" style="justify-content: flex-start;">
        <a href="http://localhost:8202/admin/cmn/dict/exportData" target="_blank">
          <el-button type="text"><i class="fa fa-plus" /> 导出</el-button>
        </a>
        <!--el-button type="text" @click="importData"><i class="fa fa-plus"/> 导入</el-button-->
      </div>
    </div>
    <el-table
      :data="list"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="getChildrens"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">

      <el-table-column label="名称" width="230" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="编码" width="220">
        <template slot-scope="{row}">
          {{ row.dictCode }}
        </template>
      </el-table-column>
      <el-table-column label="值" width="230" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>

      <el-table-column label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 引入接口定义
import dict from '@/api/dict'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    // 一般调用methods定义的方法得到数据 1:全部数据
    this.getDictList(1)
  },
  methods: {
    // 医院设置列表
    getDictList(id) {
      dict.dictList(id).then(response => {
        this.list = response.data
      })
    },
    // 查询下层内容
    getChildrens(tree, treeNode, resolve) {
      dict.dictList(tree.id).then(response => {
        resolve(response.data)
      })
    },
    // 导出数据字典
    exportData() {
      // 调用导出接口
      window.location.href = 'http://localhost:8202/admin/cmn/dict/exportData'
    }
  }
}
</script>

