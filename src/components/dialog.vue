<!--子组件-->
<template>
  <!-- <el-dialog :visible.sync="currentShow"> -->
  <el-dialog :visible.sync="show">
      afsdsfadfasdfasd
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  // props: ["show"],
  //   computed: {
  //     currentShow: {
  //       get() {
  //         return this.show;
  //       },
  //       set(val) {
  //         this.$emit("update:show", val);
  //       }
  //     }
  //   }
  computed: {
    // 这里的三点叫做 : 扩展运算符
    // ...mapState({
    //   show: state => state.dialog.show
    // })
    show() {
      return this.$store.state.dialog.show;
    }
  }
};
</script>