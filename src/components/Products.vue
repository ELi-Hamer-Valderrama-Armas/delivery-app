<template>
  <div class="row q-col-gutter-sm">
    <div class="col-12">
      <div class="row">
        <span class="text-h6 q-pa-sm">Categorias</span>
      </div>

      <div class="row item-center justify-center q-py-sm">
        <q-tabs
          class="text-grey text-h5"
          active-color="deep-purple"
          indicator-color="deep-purple"
          v-model="category"
          align="center"
          narrow-indicator
          dense
        >
          <q-tab name="Todas" icon="fastfood" label="Todas" />
          <q-tab name="Hamburguesas" icon="lunch_dining" label="Hamburguesas" />
          <q-tab name="Bebidas" icon="wine_bar" label="Bebidas" />
        </q-tabs>
      </div>
      <span class="q-pa-sm text-h6">{{ category }}</span>
    </div>
    <CardItem
      v-for="(product, index) in listProducts"
      :products="product"
      :key="index"
      v-show="category === 'Todas' || product.category === category"
    />
  </div>
</template>
<script>
import CardItem from "components/CardItem.vue";
import { mapActions } from "vuex";
export default {
  name: "Products",
  components: {
    CardItem,
  },
  data() {
    return {
      category: "Todas",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions({ fetchData: "cart/fetchData" }),
  },

  computed: {
    listProducts() {
      return this.$store.state.cart.products.filter((item) =>
        this.$store.state.cart.sale
          ? item.price < this.$store.state.cart.highPrice && item.sale
          : item.price < this.$store.state.cart.highPrice
      );
    },
  },
};
</script>
