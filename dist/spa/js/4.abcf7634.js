(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0266":function(t,a,e){t.exports=e.p+"img/hamburguesa.0c5749c1.png"},"0bf0":function(t,a,e){t.exports=e.p+"img/dientes-de-sable.0ad9b200.jpg"},1373:function(t,a,e){t.exports=e.p+"img/fenix.4586bb75.jpg"},"1f35":function(t,a,e){t.exports=e.p+"img/7up.16496e13.png"},"40a2":function(t,a,e){t.exports=e.p+"img/electro.a264cebd.jpg"},"54ad":function(t,a,e){t.exports=e.p+"img/pepsi.886fae92.png"},5896:function(t,a,e){t.exports=e.p+"img/max.a7528bb5.png"},6239:function(t,a,e){t.exports=e.p+"img/bebida.ec07bb0b.jpg"},"6b52":function(t,a,e){t.exports=e.p+"img/antorcha.fe3e3672.jpg"},"713b":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("q-layout",{attrs:{view:"lHh Lpr lFf"}},[r("q-header",{staticClass:"bg-transparent",attrs:{elevated:""}},[r("q-toolbar",[r("q-toolbar-title",[r("q-btn",{staticClass:"text-subtitle1 text-weight-bolder",attrs:{flat:"",to:"/",color:"deep-purple",align:"between",icon:"fastfood",label:"DELIVERY SHOP"}})],1),r("q-space"),r("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[t.quasar.screen.gt.sm?r("q-btn",{attrs:{round:"",dense:"",flat:"",color:"deep-purple",icon:t.quasar.fullscreen.isActive?"fullscreen_exit":"fullscreen"},on:{click:function(a){return t.quasar.fullscreen.toggle()}}}):t._e(),r("q-toggle",{attrs:{color:"deep-purple",icon:t.dark?"dark_mode":"light_mode"},on:{input:t.changeDarkMode},model:{value:t.dark,callback:function(a){t.dark=a},expression:"dark"}}),r("q-btn",{attrs:{round:"",dense:"",flat:"",color:"red",icon:"shopping_bag"}},[t.itemCart>0?r("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            "+t._s(t.itemCart)+"\n          ")]):t._e(),t.itemCart>0?r("q-menu",[r("q-card",{staticClass:"text-center no-shadow no-border",staticStyle:{"min-width":"100px"}},[r("q-card-section",{staticClass:"row text-subtitle1 justify-between items-center"},[r("div",[t._v("Tu carrito")]),r("div",[t._v("Total : S/ "+t._s(t.cartTotal))])]),r("q-separator",{staticClass:"q-mx-sm"}),r("q-scroll-area",{staticStyle:{height:"200px",width:"300px"},attrs:{"thumb-style":t.thumbStyle,"bar-style":t.barStyle}},t._l(t.cartProducts,(function(a,n){return r("div",{key:n,staticClass:"row items-center"},[r("div",{staticClass:"col-auto q-mx-xs"},[r("div",[r("q-btn",{attrs:{disable:0==a.inventory,flat:"",dense:"",icon:"expand_less"},on:{click:function(e){return t.addProductToCart(a)}}})],1),r("span",[t._v(" "+t._s(a.quantity))]),r("div",[r("q-btn",{attrs:{disable:a.quantity<=1,flat:"",dense:"",icon:"expand_more"},on:{click:function(e){return t.decreaseCartProduct(a)}}})],1)]),r("div",{staticClass:"col-auto q-mx-xs"},[r("q-img",{staticClass:"rounded-borders",style:"Bebidas"==a.category?"width: 45px; height: 70px":"width: 80px; height: 60px",attrs:{src:e("e1f2")("./"+a.img),alt:"imagen de "+a.title}})],1),r("div",{staticClass:"col text-left q-mx-xs"},[r("div",{staticClass:"text-subtitle2"},[t._v("\n                      "+t._s(a.title)+"\n                    ")]),r("span",{staticClass:"text-subtitle2"},[t._v("S/ "+t._s(a.price))])]),r("div",{staticClass:"col-auto q-mx-xs justify-end"},[r("q-btn",{attrs:{flat:"",round:"",dense:"",color:"grey",icon:"close"},on:{click:function(e){return t.removeItemProductCart(a)}}})],1)])})),0),r("q-separator",{staticClass:"q-mx-sm"}),r("div",{staticClass:"row q-py-sm q-px-xs justify-between items-center"},[r("q-btn",{attrs:{flat:"",align:"between",color:"grey",icon:"delete_sweep",label:"limpiar"},on:{click:function(a){return t.clearCart(t.cartProducts)}}}),r("q-btn",{attrs:{flat:"",to:"carrito",align:"between",color:"green-14",label:"Comprar",icon:"shopping_bag"}})],1)],1)],1):t._e()],1)],1)],1)],1),r("q-page-container",[r("router-view")],1),r("Footer")],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-footer",{staticClass:"bg-transparent"},[e("q-toolbar",[e("q-btn",{attrs:{type:"a",target:"_blank",href:"https://github.com/ELi-Hamer-Valderrama-Armas",flat:"",rounded:"",color:"blue-grey-9",icon:"fa-brands fa-github"}}),e("q-space"),e("q-btn",{staticClass:"q-mr-sm",attrs:{type:"a",target:"_blank",href:"https://www.linkedin.com/in/eli-valderrama-armas-137834112/",flat:"",rounded:"",color:"light-blue-10",icon:"fa-brands fa-linkedin-in"}}),e("q-space"),e("q-btn",{staticClass:"q-mr-sm",attrs:{type:"a",target:"_blank",href:"mailto:evalderrama500@gmail.com",flat:"",rounded:"",color:"red",icon:"fa-solid fa-envelope"}}),e("q-space"),e("q-btn",{staticClass:"q-mr-sm",attrs:{type:"a",target:"_blank",href:"https://www.facebook.com/eli.valderramaarmas",flat:"",rounded:"",color:"light-blue-6",icon:"fa-brands fa-facebook"}}),e("q-space"),e("q-btn",{staticClass:"q-mr-sm",attrs:{type:"a",target:"_blank",href:"https://wa.me/51928139629",flat:"",rounded:"",color:"green-6",icon:"fa-brands fa-whatsapp"}})],1),e("q-toolbar",{staticClass:"justify-center"},[e("p",{staticClass:"text-grey"},[t._v("ELI VALDERRAMA ARMAS © 2022")])])],1)},s=[],c={name:"Footer"},i=c,l=e("2877"),d=e("7ff0"),p=e("65c6"),u=e("9c40"),b=e("2c91"),f=e("eebe"),g=e.n(f),m=Object(l["a"])(i,o,s,!1,null,null,null),h=m.exports;g()(m,"components",{QFooter:d["a"],QToolbar:p["a"],QBtn:u["a"],QSpace:b["a"]});var x=e("2f62"),q={name:"MainLayout",components:{Footer:h},data(){return{quasar:null,dark:null,thumbStyle:{right:"4px",borderRadius:"5px",background:"#76f7c5",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",background:"#76f7c5",width:"9px",opacity:.2}}},methods:{changeDarkMode(t){this.dark=t,this.$q.dark.set(t)},...Object(x["b"])({addProductToCart:"cart/addProductToCart",decreaseCartProduct:"cart/decreaseCartProduct",removeItemProductCart:"cart/removeItemProductCart",clearCart:"cart/clearCart"})},computed:{itemCart(){return this.$store.state.cart.itemCart},...Object(x["c"])({cartProducts:"cart/cartProducts",cartTotal:"cart/cartTotal"})},watch:{"$q.dark.isActive"(t){this.dark=t}},created(){this.quasar=this.$q,this.dark=this.$q.dark.isActive}},C=q,v=e("4d5a"),w=e("e359"),k=e("6ac5"),_=e("9564"),y=e("58a8"),j=e("4e73"),Q=e("f09f"),P=e("a370"),S=e("eb85"),T=e("4983"),A=e("068f"),E=e("09e3"),O=Object(l["a"])(C,r,n,!1,null,null,null);a["default"]=O.exports;g()(O,"components",{QLayout:v["a"],QHeader:w["a"],QToolbar:p["a"],QToolbarTitle:k["a"],QBtn:u["a"],QSpace:b["a"],QToggle:_["a"],QBadge:y["a"],QMenu:j["a"],QCard:Q["a"],QCardSection:P["a"],QSeparator:S["a"],QScrollArea:T["a"],QImg:A["a"],QPageContainer:E["a"]})},"7a2d":function(t,a,e){t.exports=e.p+"img/hulk.7589ce49.jpg"},"8e9b":function(t,a,e){t.exports=e.p+"img/sandwich-gf49e56a4a_640.4ad16834.jpg"},b4b0:function(t,a,e){t.exports=e.p+"img/fanta.7caf590d.png"},bf49:function(t,a,e){t.exports=e.p+"img/capitan-america.8b57065c.jpg"},c890:function(t,a,e){t.exports=e.p+"img/cocacola.e22d7c50.png"},d188:function(t,a,e){t.exports=e.p+"img/tormenta.44dd764f.jpg"},e1f2:function(t,a,e){var r={"./7up.png":"1f35","./antorcha.jpg":"6b52","./bebida.jpg":"6239","./capitan-america.jpg":"bf49","./cocacola.png":"c890","./dientes-de-sable.jpg":"0bf0","./electro.jpg":"40a2","./fanta.png":"b4b0","./fenix.jpg":"1373","./hamburguesa.png":"0266","./hulk.jpg":"7a2d","./max.png":"5896","./pepsi.png":"54ad","./sandwich-gf49e56a4a_640.jpg":"8e9b","./sprite.png":"f92d","./tormenta.jpg":"d188"};function n(t){var a=o(t);return e(a)}function o(t){if(!e.o(r,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id="e1f2"},f92d:function(t,a,e){t.exports=e.p+"img/sprite.a16368d7.png"}}]);