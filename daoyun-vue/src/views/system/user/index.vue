<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column
      label="用户编号"
      prop="id"
    />
    <el-table-column
      label="用户名称"
      prop="name"
    />
    <el-table-column
      label="用户权限"
      prop="level"
    />
    <el-table-column
      label="手机号码"
      prop="phone"
    />
    <el-table-column
      label="状态"
      prop="state"
    />
    <el-table-column
      label="创建时间"
      prop="date"
    />
    <el-table-column
      align="right"
    >
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"
        />
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '1',
        level: 'admin',
        phone: '18888888888',
        state: 'active',
        date: '2020-03-19',
        name: '王1虎'
      }, {
        id: '2',
        level: 'admin',
        phone: '18888888888',
        state: 'active',
        date: '2020-03-19',
        name: '王2虎'
      }, {
        id: '3',
        level: 'admin',
        phone: '18888888888',
        state: 'active',
        date: '2020-03-19',
        name: '王3虎'
      }, {
        id: '4',
        level: 'admin',
        phone: '18888888888',
        state: 'active',
        date: '2020-03-19',
        name: '王4虎'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
