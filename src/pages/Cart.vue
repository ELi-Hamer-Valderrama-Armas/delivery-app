<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-stepper
          v-model="step"
          vertical
          ref="stepper"
          done-color="green-14"
          active-color="yellow"
          inactive-color="grey"
          animated
          @before-transition="checkFormCart"
        >
          <q-step
            :name="1"
            title="Dirección de envio"
            icon="shopping_cart"
            :done="step > 1"
            error-icon="error"
            :error="stateFormAddressDetail"
            error-color="red"
          >
            <q-form ref="formAddressDetail" class="q-gutter-md">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      class="full-width"
                      v-model="addressDetail.firstName"
                      label="Nombres"
                      :rules="[(val) => !!val || 'Los Nombres son requeridos']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="badge" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      class="full-width"
                      v-model="addressDetail.lastName"
                      label="Apellidos"
                      :rules="[
                        (val) => !!val || 'Los Apellidos son requeridos',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="badge" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      v-model="addressDetail.addressLine"
                      class="full-width"
                      label="Direccion: Av/Jr/Calle"
                      :rules="[(val) => !!val || 'La Direccion es requerida']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="pin_drop" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      v-model="addressDetail.number"
                      class="full-width"
                      label="N°"
                      :rules="[(val) => !!val || 'El Número es requerido']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="tag" />
                      </template>
                    </q-input>
                  </q-item>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      class="full-width"
                      v-model="addressDetail.city"
                      label="Cuidad"
                      :rules="[(val) => !!val || 'La Cuidad es requerida']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="location_city" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      class="full-width"
                      v-model="addressDetail.country"
                      label="País"
                      :rules="[(val) => !!val || 'El  País es requerido']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="flag" />
                      </template>
                    </q-input>
                  </q-item>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <q-item>
                    <q-checkbox
                      v-model="addressDetail.checkbox"
                      label="Esta informacion será usada en los detalles del pago"
                      rigth-label
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    />
                  </q-item>
                </div>
              </div>
            </q-form>
          </q-step>

          <q-step
            :name="2"
            title="detalles del pago"
            icon="shopping_cart"
            :done="step > 2"
            error-icon="error"
            :error="stateFormCardDetail && step > 2"
            error-color="red"
          >
            <q-form ref="formCardDetail" class="q-gutter-md">
              <div class="row">
                <div class="col-12">
                  <q-item class="justify-between">
                    <div
                      class="radio items-center justify-center text-center"
                      :class="{ gray: mastercard }"
                      @click="radio('Mastercard')"
                    >
                      <img
                        class="pay"
                        :src="require(`assets/images/masterCard.jpg`)"
                      />
                    </div>
                    <div
                      class="radio items-center justify-center text-center"
                      :class="{ gray: visa }"
                      @click="radio('Visa')"
                    >
                      <img
                        class="pay"
                        :src="require(`assets/images/visa.jpg`)"
                      />
                    </div>
                    <div
                      class="radio items-center justify-center text-center"
                      :class="{ gray: paypal }"
                      @click="radio('Paypal')"
                    >
                      <img
                        class="pay"
                        :src="require(`assets/images/paypal.jpg`)"
                      />
                    </div>
                  </q-item>
                </div>
                <div class="col-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      class="full-width"
                      v-model="cardDetail.cardNumber"
                      label="Número de targeta"
                      mask="#### #### #### ####"
                      fill-mask
                      :rules="[
                        (val) =>
                          !!val || 'El Número de la targeta es requerido',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="123" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      v-model="cardDetail.expiryDate"
                      class="full-width"
                      label="Fecha de vencimiento"
                      mask="##/##"
                      fill-mask
                      :rules="[
                        (val) =>
                          !!val || 'La Fecha de vencimiento es requerida',
                      ]"
                    >
                      <template v-slot:prepend>
                        <q-icon name="calendar_month" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-item>
                    <q-input
                      dense
                      rounded
                      outlined
                      v-model="cardDetail.cvv"
                      class="full-width"
                      label="CVV "
                      mask="###"
                      fill-mask
                      :rules="[(val) => !!val || 'El CVV es requerido']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="pin" />
                      </template>
                    </q-input>
                  </q-item>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <q-item>
                    <q-checkbox
                      v-model="cardDetail.checkbox"
                      label="Recordar los datos para la próxima vez"
                      rigth-label
                      checked-icon="task_alt"
                      unchecked-icon="highlight_off"
                    />
                  </q-item>
                </div>
              </div>
            </q-form>
          </q-step>

          <q-step
            :name="3"
            :done="stepComplete == true"
            title="Revisar mi orden"
            icon="shopping_cart"
          >
            <div class="row">
              <div class="col-12">
                <q-item-label header class="text-h6"
                  >Resumen del pedido</q-item-label
                >
                <q-separator></q-separator>
                <q-item
                  v-for="(cart, index) in cartProducts"
                  :key="index"
                  class="full-width"
                >
                  <q-item-section side>
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
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="1">{{ cart.title }}</q-item-label>
                    <q-item-label caption
                      >Cantidad: {{ cart.quantity }}</q-item-label
                    >
                    <q-item-label caption
                      >precio: S/ {{ cart.price }}</q-item-label
                    >
                  </q-item-section>
                  <q-item-section side>
                    S/ {{ cart.quantity * cart.price }}
                  </q-item-section>
                </q-item>
                <q-separator></q-separator>

                <q-item class="full-width">
                  <q-item-section>
                    <q-item-label lines="1">Envio</q-item-label>
                  </q-item-section>
                  <q-item-section side> Gratis</q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item class="full-width" style="border-top: 4px; grey">
                  <q-item-section>
                    <q-item-label lines="1">Total</q-item-label>
                  </q-item-section>
                  <q-item-section side class="text-subtitle1">
                    S/ {{ cartTotal }}
                  </q-item-section>
                </q-item>
              </div>
            </div>

            <q-card class="rounded-borders q-mt-xs">
              <q-card-section class="row">
                <q-card-section
                  class="col-lg-5 col-md-5 col-sm-5 col-xs-12 q-pt-xs"
                >
                  <div class="text-h6 text-center">Envio</div>
                  <div class="text-subtitle1">
                    Para : {{ addressDetail.firstName }}
                    {{ addressDetail.lastName }}
                  </div>
                  <div class="text-subtitle2">
                    Dirección : {{ addressDetail.addressLine }}
                    {{ addressDetail.number }} {{ addressDetail.city }}
                    {{ addressDetail.country }}
                  </div>
                </q-card-section>
                <q-card-section
                  class="col-lg-7 col-md-7 col-sm-7 col-xs-12 q-pt-xs"
                >
                  <div class="text-h6 text-center">Detalles del pago</div>
                  <div class="text-subtitle1 q-mb-xs">
                    Targeta : {{ cardDetail.cardName }}
                  </div>
                  <div class="text-subtitle1 q-mb-xs">
                    Titular : {{ addressDetail.firstName }}
                    {{ addressDetail.lastName }}
                  </div>
                  <div class="text-subtitle1 q-mb-xs">
                    Número : {{ cardDetail.cardNumber }}
                  </div>
                  <div class="text-subtitle1 q-mb-xs">
                    Vencimiento : {{ cardDetail.expiryDate }}
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <div class="row justify-end">
                <q-btn
                  v-if="step > 1"
                  class="on-right"
                  flat
                  rounded
                  color="red"
                  @click="$refs.stepper.previous()"
                  label="Atras"
                />
                <q-btn
                  v-if="step !== 3"
                  @click="$refs.stepper.next()"
                  rounded
                  class="on-right"
                  color="green-14"
                  label="Siguiente"
                />
                <q-btn
                  v-if="step == 3"
                  @click="shoppingCompleted"
                  class="on-right"
                  rounded
                  color="green-14"
                  label="Completar orden"
                />
              </div>
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Checkout",
  data() {
    return {
      step: 1,
      stepComplete: false,
      addressDetail: {
        firstName: null,
        lastName: null,
        addressLine: null,
        number: null,
        city: null,
        country: null,
        checkbox: false,
      },
      cardDetail: {
        cardName: "Mastercard",
        cardNumber: null,
        expiryDate: null,
        cvv: null,
        checkbox: false,
      },
      stateFormAddressDetail: false,
      stateFormCardDetail: false,
      inProgress: true,
      mastercard: false,
      visa: true,
      paypal: true,
    };
  },
  methods: {
    radio(value) {
      if (value == "Mastercard") {
        this.visa = true;
        this.mastercard = false;
        this.paypal = true;
        this.cardDetail.cardName = value;
      }
      if (value == "Visa") {
        this.visa = false;
        this.mastercard = true;
        this.paypal = true;
        this.cardDetail.cardName = value;
      }
      if (value == "Paypal") {
        this.visa = true;
        this.mastercad = true;
        this.paypal = false;
        this.cardDetail.cardName = value;
      }
    },
    checkFormCart() {
      if (this.$refs.formAddressDetail) {
        this.$refs.formAddressDetail.validate().then((success) => {
          if (success) {
            this.stateFormAddressDetail = false;
          } else {
            this.stateFormAddressDetail = true;
          }
        });
      }
      if (this.$refs.formCardDetail) {
        this.$refs.formCardDetail.validate().then((success) => {
          if (success) {
            this.stateFormCardDetail = false;
          } else {
            this.stateFormCardDetail = true;
          }
        });
      }
    },
    shoppingCompleted() {
      
      if (this.stateFormAddressDetail && this.stateFormCardDetail) {
        
        const notif = this.$q.notify({
          group: false,
          timeout: 0,
          spinner: true,
          color: "yellow",
          position: "center",
          message: "Procesando pago..",
          caption: "0%",
        });

        let percentage = 0;
        const interval = setInterval(() => {
          percentage = Math.min(
            100,
            percentage + Math.floor(Math.random() * 22)
          );

          notif({
            caption: `${percentage}%`,
          });

          if (percentage === 100) {
            notif({
              icon: "error",
              spinner: false,
              color: "red",
              message: "La compra no pudo ser procesada.",
              timeout: 2500, //
            });
            clearInterval(interval);
          }
        }, 500);


      } else {
        const notif = this.$q.notify({
          group: false,
          timeout: 0,
          spinner: true,
          color: "yellow",
          position: "center",
          message: "Procesando pago..",
          caption: "0%",
        });

        let percentage = 0;
        const interval = setInterval(() => {
          percentage = Math.min(
            100,
            percentage + Math.floor(Math.random() * 22)
          );

          notif({
            caption: `${percentage}%`,
          });

          if (percentage === 100) {
            notif({
              icon: "done",
              color: "green-14",
              spinner: false,
              message: "La compra fue realizada con exito.",
              timeout: 2500, //
            });
            clearInterval(interval);
            this.$router.push("/");
          }
        }, 500);
      }
    },
  },
  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
      cartTotal: "cart/cartTotal",
    }),
  },
};
</script>

<style scoped>
.pay {
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #00c853;
  margin: 10px 20px 10px 0px;
  cursor: pointer;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  color: #e0e0e0;
}

.gray .pay {
  box-shadow: none;
}
</style>
