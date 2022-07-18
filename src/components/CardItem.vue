<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <q-card class="q-mx-sm q-my-sm shadow-1">
      <div class="text-center">
        <q-img
          :src="require(`assets/static/images/${products.img}`)"
          :alt="`imagen de ${products.title}`"
          :style="
            products.category == 'Bebidas'
              ? 'width: 150px; height: 250px'
              : 'width: 300px; height: 200px'
          "
        />

        <q-chip
          v-if="products.sale && products.inventory > 0"
          square
          class="absolute text-white"
          color="red-7"
          label="Oferta 10%"
          style="top: 0; left: 0px; transform: translateY(0px)"
        />
        <q-chip
          v-if="products.inventory < 1"
          square
          class="absolute text-white"
          color="grey"
          label="Sin stock"
          style="top: 0; left: 0px; transform: translateY(0px)"
        />
      </div>
      <q-card-section class="text-center">
        <span class="text-h6 ellipses">
          {{ products.title }}
        </span>

        <div class="q-pa-xs">
          <q-rating v-model="star" size="20px" :max="5" color="yellow" />
        </div>
        <div class="items-center">
          <span class="text-subtitle1">S/ {{ products.price }}</span>
          <span v-if="products.sale" class="text-grey text-strike q-pl-sm"
            >S/ {{ (products.price * 10) / 100 + products.price }}</span
          >
        </div>
        <div class="row q-pa-xs justify-between items-center">
          <q-btn
            flat
            align="between"
            color="green-14"
            icon="pinch"
            @click="card = true"
          />

          <q-btn
            :disable="products.inventory <= 0"
            flat
            align="between"
            color="green-14"
            label="Ordenar"
            icon="shopping_bag"
            @click="addProductToCart(products)"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="card">
      <q-card class="q-mx-sm q-my-sm shadow-1">
        <q-carousel
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          v-model="slide"
          control-color="deep-purple"
          navigation-icon="radio_button_unchecked"
          navigation
          navigation-active-icon="radio_button_checked"
          padding
          height="auto"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide :name="1">
            <div class="text-center">
              <q-img
                :src="require(`assets/static/images/${products.img}`)"
                :alt="`imagen de ${products.title}`"
                :style="
                  products.category == 'Bebidas'
                    ? ' width: 100%; max-width: 150px; height: auto; max-height: 250px;'
                    : ' width: 100%; max-width: 300px; height: auto; max-height: 200px;'
                "
              />

              <q-chip
                v-if="products.sale && products.inventory > 0"
                square
                class="absolute text-white"
                color="red-7"
                label="Oferta 10%"
                style="top: 0; left: 0px; transform: translateY(0px)"
              />
              <q-chip
                v-if="products.inventory < 1"
                square
                class="absolute text-white"
                color="grey"
                label="Sin stock"
                style="top: 0; left: 0px; transform: translateY(0px)"
              />
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <div class="text-center">
              <q-img
                :src="require(`assets/static/images/${products.img1}`)"
                :alt="`imagen de ${products.title}`"
                :style="
                  products.category == 'Bebidas'
                    ? ' width: 100%; max-width: 150px; height: auto; max-height: 250px;'
                    : ' width: 100%; max-width: 300px; height: auto; max-height: 200px;'
                "
              />

              <q-chip
                v-if="products.sale && products.inventory > 0"
                square
                class="absolute text-white"
                color="red-7"
                label="Oferta 10%"
                style="top: 0; left: 0px; transform: translateY(0px)"
              />
              <q-chip
                v-if="products.inventory < 1"
                square
                class="absolute text-white"
                color="grey"
                label="Sin stock"
                style="top: 0; left: 0px; transform: translateY(0px)"
              />
            </div>
          </q-carousel-slide>
        </q-carousel>

        <q-card-section class="text-center">
          <span class="text-h6 ellipses">
            {{ products.title }}
          </span>
          <p class="text-left">
            {{ products.description }}
          </p>

          <div class="q-pa-xs">
            <q-rating v-model="star" size="20px" :max="5" color="yellow" />
          </div>
          <div class="items-center">
            <span class="text-subtitle1">S/ {{ products.price }}</span>
            <span v-if="products.sale" class="text-grey text-strike q-pl-sm"
              >S/ {{ (products.price * 10) / 100 + products.price }}</span
            >
          </div>
          <div class="row q-pa-xs justify-between items-center">
            <q-btn
              flat
              align="between"
              color="green-14"
              icon="close_fullscreen"
              @click="card = false"
            />

            <q-btn
              :disable="products.inventory <= 0"
              flat
              align="between"
              color="green-14"
              label="Ordenar"
              icon="shopping_bag"
              @click="addProductToCart(products)"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CardItem",
  props: {
    products: Object,
  },
  data() {
    return { star: this.products.valoration, card: false, slide: 1 };
  },
  methods: {
    ...mapActions({
      addProductToCart: "cart/addProductToCart",
    }),

    showNotify() {
      this.$q.notify({
        type: "positive",
        position: "bottom-left",
        message: '"Este producto fue agregado."',

        timeout: Math.random() * 5000 + 3000,
      });
    },
  },
};
</script>
<style scoped></style>
