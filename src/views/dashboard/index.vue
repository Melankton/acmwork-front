<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <panel-group/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <RaddarChart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <PieChart/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from '../../components/PanelGroup/PanelGroup'
import RaddarChart from '../../components/PanelGroup/RaddarChart'
import PieChart from '../../components/PanelGroup/PieChart'

export default {
  name: 'Dashboard',
  components: { PanelGroup, RaddarChart, PieChart },
  component: {
    PanelGroup,
    RaddarChart,
    PieChart
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
