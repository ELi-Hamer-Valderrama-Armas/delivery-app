<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-transparent">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            class="text-subtitle1 text-weight-bolder"
            flat
            to="/"
            color="deep-purple"
            align="between"
            icon="fastfood"
            label="DELIVERY SHOP"
          />
        </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="deep-purple"
            :icon="
              quasar.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'
            "
            @click="quasar.fullscreen.toggle()"
            v-if="quasar.screen.gt.sm"
          >
          </q-btn>

          <q-toggle
            color="deep-purple"
            :icon="dark ? 'dark_mode' : 'light_mode'"
            v-model="dark"
            @input="changeDarkMode"
          />
          <q-btn round dense flat color="red" icon="shopping_bag">
            <q-badge v-if="itemCart > 0" color="red" text-color="white" floating>
              {{ itemCart }}
            </q-badge>
            <q-menu v-if="itemCart > 0">
              <q-card
                class="text-center no-shadow no-border"
                style="min-width: 100px"
              >
                <q-card-section
                  class="row text-subtitle1 justify-between items-center"
                >
                  <div>Tu carrito</div>
                  <div>Total : S/ {{ cartTotal }}</div>
                </q-card-section>
                <q-separator class="q-mx-sm" />
                <q-scroll-area
                  :thumb-style="thumbStyle"
                  :bar-style="barStyle"
                  style="height: 200px; width: 300px"
                >
                  <div
                    class="row items-center"
                    v-for="(cart, index) in cartProducts"
                    :key="index"
                  >
                    <div class="col-auto q-mx-xs">
                      <div>
                        <q-btn
                          :disable="cart.inventory == 0"
                          @click="addProductToCart(cart)"
                          flat
                          dense
                          icon="expand_less"
                         
                        />
                      </div>
                      <span> {{ cart.quantity }}</span>
                      <div>
                        <q-btn
                          :disable="cart.quantity <= 1"
                          @click="decreaseCartProduct(cart)"
                          flat
                          dense
                          icon="expand_more"
                         
                        />
                      </div>
                    </div>
                    <div class="col-auto q-mx-xs">
                      <q-img
                        :style="
                          cart.category == 'Bebidas'
                            ? 'width: 45px; height: 70px'
                            : 'width: 80px; height: 60px'
                        "
                        class="rounded-borders"
                        :src="require(`assets/static/images/${cart.img}`)"
                        :alt="`imagen de ${cart.title}`"
                      />
                    </div>
                    <div class="col text-left q-mx-xs">
                      <div class="text-subtitle2">
                        {{ cart.title }}
                      </div>
                      <span class="text-subtitle2">S/ {{ cart.price }}</span>
                    </div>
                    <div class="col-auto q-mx-xs justify-end">
                      <q-btn
                        @click="removeItemProductCart(cart)"
                        flat
                        round
                        dense
                        color="grey"
                        icon="close"
                      />
                    </div>
                  </div>
                </q-scroll-area>

                <q-separator class="q-mx-sm" />

                <div class="row q-py-sm q-px-xs justify-between items-center">
                  <q-btn
                    class=""
                    flat
                    align="between"
                    color="grey"
                    icon="delete_sweep"
                    label="limpiar"
                    @click="clearCart(cartProducts)"
                  />
                  <q-btn
                    flat
                    to="carrito"
                    align="between"
                    color="green-14"
                    label="Comprar"
                    icon="shopping_bag"
                  />
                </div>
              </q-card>
            </q-menu>
            
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Footer from "components/Footer.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MainLayout",
  components: {
    Footer,
  },
  data() {
    return {
      quasar: null,
      dark: null,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        background: "#76f7c5",
        width: "5px",
        opacity: 0.75,
      },
      barStyle: {
        right: "2px",
        borderRadius: "9px",
        background: "#76f7c5",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
  methods: {
    changeDarkMode(value) {
      this.dark = value;
      this.$q.dark.set(value);
    },
    ...mapActions({
      addProductToCart: "cart/addProductToCart",
      decreaseCartProduct: "cart/decreaseCartProduct",
      removeItemProductCart: "cart/removeItemProductCart",
      clearCart: "cart/clearCart",
    }),
  },
  computed: {
    itemCart() {
      return this.$store.state.cart.itemCart;
    },
    ...mapGetters({
      cartProducts: "cart/cartProducts",
      cartTotal: "cart/cartTotal",
    }),
  },
  watch: {
    "$q.dark.isActive"(val) {
      this.dark = val;
    },
  },
  created() {
    this.quasar = this.$q;
    this.dark = this.$q.dark.isActive;
  },
};
</script>
