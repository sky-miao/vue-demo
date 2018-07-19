<template>
  <el-table
    :data='marketsDate'
    style='width: 100%'>
    <el-table-column
      prop='coin'
      :label="$t('markets.coin')"
      width='180'>
    </el-table-column>
    <el-table-column
      prop='lastPrice'
      :label="$t('markets.lastPrice')"
      width='180'>
    </el-table-column>
    <el-table-column
      prop='change'
      :label="$t('markets.change')">
    </el-table-column>
  </el-table>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.getList()
  },
  computed: {
    marketsDate: {
      get () {
        return this.$store.state.markets.marketsDate
      }
    }
  },
  methods: {
    ...mapActions(['getMarketsList']),

    getList () {
      this.getMarketsList()
    }
  }
}
</script>
