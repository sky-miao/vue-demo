<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
          <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>
<script>
import Header from "./header";
import Footer from "./footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
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