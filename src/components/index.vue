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
          <h1>{{$t("message.hello")}}</h1>
          <div style="margin: 20px;">
            <h1>{{$t("message.title")}}</h1>
            <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
            <ul>
              <li v-for="brand in brands" :key="brand">{{brand}}</li>
            </ul>
          </div>
          <buttonTemplate></buttonTemplate>
          <selectTemplate></selectTemplate>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>
<script>
import Header from './header'
import Footer from './footer'
import dialog from './dialog'
import buttonTemplate from './button'
import selectTemplate from './select'
export default {
  data () {
    return {
      show: false,
      brands: [
        this.$t('brands.nike'),
        this.$t('brands.adi'),
        this.$t('brands.nb'),
        this.$t('brands.ln')
      ]
    }
  },
  components: {
    Header,
    Footer,
    't-dialog': dialog,
    buttonTemplate,
    selectTemplate
  }
}
</script>
<style>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
