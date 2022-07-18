<template>
  <q-card class="q-mx-sm q-my-sm no-shadow">
    <q-card-section class="text-center">
      <div class="text-subtitle2 q-mt-sm">Maximo precio S/ {{ price }}</div>
    </q-card-section>
    <q-card-section>
      <q-slider
        v-model="price"
        :min="min"
        :max="max"
        :step="0.1"
        label
        :label-value="'S/ ' + price"
        label-always
        color="deep-purple"
        @input="updateHighPrice($event)"
      />
      <div class="col-12">
        <span>S/ {{ min }}</span>
        <span class="float-right">S/ {{ max }}</span>
      </div>
    </q-card-section>
    <q-separator class="q-mx-sm" />
    <q-card-section class="text-center">
      <div>Mostrar productos en oferta</div>
      <q-toggle
        v-model="sale"
        color="deep-purple"
        icon="local_offer"
        @input="updateSale"
      />
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  data() {
    return {
      min: 0,
      max: 8,
      price: this.priceRange,
      sale: this.checkedSale,
    };
  },
  methods: {
    updateSale() {
      this.$store.commit("cart/updateSale");
    },
    updateHighPrice(event) {
      this.$store.commit("cart/updateHighPrice", event);
    },
  },
  computed: {
    checkedSale() {
      return this.$store.state.cart.sale;
    },
    priceRange() {
      return this.$store.state.cart.highPrice;
    },
  },
  created() {
    this.sale = this.checkedSale;
    this.price = this.priceRange;
  },
};
</script>
<style scoped></style>
