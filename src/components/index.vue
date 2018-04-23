<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <div>
              <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
              <!-- <a href="javascript:;"  @click="$store.commit('switch_dialog')">点击</a> -->
              <t-dialog></t-dialog>
            </div>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
import dialog from "./dialog";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    Header,
    Footer,
    "t-dialog": dialog
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>