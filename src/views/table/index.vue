<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="ID" width="150">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="OJ" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.OJ }}
        </template>
      </el-table-column>
      <el-table-column label="Prob" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.Prob }}</span>
        </template>
      </el-table-column>
      <el-table-column label="user" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Accept" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.Accept }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Link" width="200">
        <template slot-scope="scope">
          <a :href="'https://vjudge.net/problem/' + scope.row.OJ + '-' + scope.row.Prob" target="_blank"><svg-icon icon-class="link" /></a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/list'
import store from '@/store'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      username: store.getters.vjudge,
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.username).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
