<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <Side />
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        
              

        <router-view />
      </div>
    </div>
  </q-page>
</template>

<script>
import Side from "components/Side.vue";

export default {
  name: "PageIndex",
  components: {
    Side,
  },
  data() {
    return {};
  },
};
</script>
