<template>
    <div class="select-wrap fr">
      <label class="lg-show" for="">Language: </label>
      <select class="selset-option" @change="chooseLanguage()">
        <option :selected="selectLangeage=='en'?'selected':''" >中文</option>
        <option :selected="selectLangeage=='zh'?'selected':''" >English</option>
      </select>
    </div>
</template>
<script>
export default {
  data () {
    return {
      selectLangeage: 'en'
    }
  },
  mounted () {
  },
  methods: {
    chooseLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'zh' : 'en'
    }
  }
}
</script>
<style lang="less">
select {
  /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
  border: solid 1px #000;
  border: none;
  /*很关键：将默认的select选择框样式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("../assets/imgs/drop-down.png") no-repeat scroll right center
    transparent !important;

  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 20px;
}

/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand {
  display: none;
}
</style>
