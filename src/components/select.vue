<template>
    <div style="margin: 20px;">
        <h1>{{$t("message.title1")}}</h1>
        <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enterInput')">
        <ul>
          <li v-for="language in languages" :key="language" >{{language}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        this.$t("language.zh"),
        this.$t("language.en"),
      ],
    };
  }
};
</script>