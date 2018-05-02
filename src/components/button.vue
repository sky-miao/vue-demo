<template>
  <div>
    <h2>{{$t('test')}}</h2>
    <button type="button" class="btn btn-success" @click="changeLocale">中文/EN</button>      
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // js方法
    changeLocale() {
      this.$confirm(this.$t("layer.toggle"), this.$t("layer.tips"), {
        confirmButtonText: this.$t("button.ok"),
        cancelButtonText: this.$t("button.cancel"),
        type: "warning"
      })
        .then(() => {
          let locale = this.$i18n.locale;
          locale === "zh"
            ? (this.$i18n.locale = "en")
            : (this.$i18n.locale = "zh");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message:  this.$t("info")
          });
        });
    }
  }
};
</script>
