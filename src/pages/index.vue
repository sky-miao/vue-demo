<template>
  <div class="page-wrap">
    <Header></Header>
    <div class="main-wrap">
      <!-- <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a> -->
      <a href="javascript:;" @click="open(true)">点击</a>
      <t-dialog></t-dialog>
      <List></List>
      <el-button>默认按钮</el-button>
      <el-button type="primary">默认按钮</el-button>
      <span>afsddddddddddddddddddddd你你你你《、</span>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header'
import Footer from '../components/footer'
import dialog from '../components/dialog'
import List from './list/list'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer,
    't-dialog': dialog,
    List
  },
  methods: {
    ...mapActions(['switch_dialog']),
    open (params) {
      this.switch_dialog(params)
    }
  }
}
</script>
<style lang="less">
@import '../assets/css/page.less';

</style>
