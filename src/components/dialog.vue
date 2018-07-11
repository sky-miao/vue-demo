<!--子组件-->
<template>
  <!-- <el-dialog :visible.sync="currentShow"> -->
  <el-dialog :visible.sync="show"
    :before-close="handleClose"
    >
    sdfggggggggggggg
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    handleClose () {
      this.$store.dispatch('switch_dialog')
    }
    // ...mapMutations({
    //   switch_dialog: "handleClose(false)" // 映射 this.increment() 为 this.$store.commit('increment')
    // })
  },
  computed: {
    // The three points here are called: extension operators
    ...mapState({
      show: state => state.dialog.show
    })
    // show() {
    //   return this.$store.state.dialog.show;
    // }
  }
}
</script>
