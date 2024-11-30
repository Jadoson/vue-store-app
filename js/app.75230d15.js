(function(){"use strict";var t={2484:function(t,e,r){var a=r(5471),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("AppHeader"),e("router-view",{key:t.$route.fullPath}),e("AppFooter")],1)},o=[],c=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("nav",{staticClass:"nav"},[e("h1",{staticClass:"logo"},[t._v("Штуки")]),e("ul",{staticClass:"nav-links"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Магазин")])],1)]),e("div",{staticClass:"cart"},[e("router-link",{attrs:{to:"/cart"}},[e("span",{staticClass:"cart-icon"},[e("span",{staticClass:"cart-count"},[t._v(t._s(t.cartCount))])])])],1)])])},n=[],i=(r(8992),r(8872),{name:"AppHeader",data(){return{cartCount:0}},watch:{$route:"fetchCartCount"},created(){this.$root.$on("cart-updated",this.fetchCartCount)},beforeDestroy(){this.$root.$off("cart-updated",this.fetchCartCount)},mounted(){this.fetchCartCount()},methods:{fetchCartCount(){const t=JSON.parse(localStorage.getItem("cart"))||[];this.cartCount=t.reduce(((t,e)=>t+e.quantity),0)}}}),u=i,l=r(1656),d=(0,l.A)(u,c,n,!1,null,"78d6de9e",null),p=d.exports,h=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"app-footer"},[e("div",{staticClass:"footer-content"},[e("h1",{staticClass:"logo"},[t._v("Штуки")]),e("ul",{staticClass:"nav-links"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Магазин")])],1)]),e("div",[e("button",{on:{click:t.sendMessage}},[t._v("Напиши нам")])])])])},v=[],f={name:"AppFooter",methods:{sendMessage(){alert("Напишите нам на почту: support@shop.com")}}},m=f,_=(0,l.A)(m,h,v,!1,null,"edc8dd34",null),A=_.exports,C={name:"App",components:{AppHeader:p,AppFooter:A}},g=C,y=(0,l.A)(g,s,o,!1,null,null,null),b=y.exports,w=r(173),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[t._m(0),t._m(1),e("div",{staticClass:"product-list"},t._l(t.products,(function(r){return e("div",{key:r.id,staticClass:"product-card"},[e("img",{staticClass:"product-image",attrs:{src:r.image,alt:r.title},on:{click:function(e){return t.viewProductDetails(r)}}}),e("h3",[t._v(t._s(r.title))]),e("button",{on:{click:function(e){return t.addToCart(r)}}},[t._v("Купить")])])})),0),t.showModal?e("product-details",{attrs:{product:t.selectedProduct},on:{close:function(e){t.showModal=!1},"add-to-cart":t.addToCart}}):t._e()],1)},I=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-block"},[e("div",{staticClass:"header-text"},[e("h2",[t._v("Смотри внимательно сколько всего у нас есть")]),e("h1",[t._v("Магазин очень нужных штуковин")])]),e("img",{staticClass:"header-image",attrs:{src:r(8369),alt:"Header Image"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-new-items"},[e("h1",[t._v("Новинки")])])}],O=(r(4114),function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-details-overlay"},[e("div",{staticClass:"product-details-modal"},[e("div",{staticClass:"product-header"},[e("h2",[t._v(t._s(t.product.title))]),e("button",{staticClass:"close-btn",on:{click:t.closeModal}},[t._v("X")])]),e("div",{staticClass:"product-container"},[e("img",{staticClass:"product-image",attrs:{src:t.product.image,alt:t.product.title}}),e("div",{staticClass:"product-details"},[e("h3",[t._v("Описание")]),e("p",[t._v(t._s(t.product.description))]),e("h3",[t._v("Категория")]),e("p",[t._v(t._s(t.product.category))]),e("h3",[t._v("Рейтинг")]),e("p",[t._v(t._s(t.product.rating.rate))]),e("h2",[t._v(t._s(t.product.price)+"$")]),e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Купить")])])])])])}),x=[],S={name:"ProductDetails",props:{product:Object},methods:{closeModal(){this.$emit("close")},addToCart(t){this.$emit("add-to-cart",t),this.closeModal()}}},P=S,$=(0,l.A)(P,O,x,!1,null,"7ce128b2",null),M=$.exports,T={name:"HomePage",components:{ProductDetails:M},data(){return{products:[],showModal:!1,selectedProduct:null}},methods:{async fetchProducts(){const t=await fetch("https://fakestoreapi.com/products");this.products=await t.json()},addToCart(t){const e=JSON.parse(localStorage.getItem("cart"))||[],r=e.findIndex((e=>e.id===t.id));-1===r?e.push({...t,quantity:1}):e[r].quantity++,localStorage.setItem("cart",JSON.stringify(e)),this.$root.$emit("cart-updated")},viewProductDetails(t){this.selectedProduct=t,this.showModal=!0}},mounted(){this.fetchProducts()}},B=T,F=(0,l.A)(B,k,I,!1,null,"c9741bec",null),E=F.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-page"},[e("h1",[t._v("Корзина")]),e("table",{staticClass:"cart-table"},[t._m(0),e("tbody",[t._l(t.cartItems,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.price)+"$")]),e("td",[t._v(t._s(a.quantity))]),e("td",[t._v(t._s((a.price*a.quantity).toFixed(2))+"$")]),e("td",[e("img",{staticClass:"delete-icon",attrs:{src:r(9763),alt:"Удалить"},on:{click:function(e){return t.removeFromCart(a)}}})])])})),e("tr",{staticClass:"cart-total"},[e("td",{attrs:{colspan:"2"}},[t._v("Итог")]),e("td",[t._v(t._s(t.totalItems))]),e("td",[t._v(t._s(t.totalSum.toFixed(2))+"$")]),e("td")])],2)]),e("button",{staticClass:"pay-button"},[t._v("Плачу за всё!")])])},q=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Товар")]),e("th",[t._v("Цена")]),e("th",[t._v("Количество")]),e("th",[t._v("Сумма")])])])}],D=(r(4520),{name:"CartPage",data(){return{cartItems:[]}},computed:{totalSum(){return this.cartItems.reduce(((t,e)=>t+e.price*e.quantity),0)},totalItems(){return this.cartItems.reduce(((t,e)=>t+e.quantity),0)}},methods:{fetchCart(){const t=JSON.parse(localStorage.getItem("cart"))||[];this.cartItems=t},removeFromCart(t){const e=this.cartItems.filter((e=>e.id!==t.id));localStorage.setItem("cart",JSON.stringify(e)),this.cartItems=e,this.$root.$emit("cart-updated")}},mounted(){this.fetchCart()}}),j=D,J=(0,l.A)(j,N,q,!1,null,"3b5ab7c5",null),U=J.exports;a.Ay.use(w.Ay);const H=[{path:"/",name:"Home",component:E},{path:"/cart",name:"Cart",component:U}],K=new w.Ay({mode:"history",routes:H});var R=K;a.Ay.config.productionTip=!1,new a.Ay({router:R,render:t=>t(b)}).$mount("#app")},9763:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgB7ZW7DcMgEIYPFFl25w2cFVy5TTZwJogzmZMNkg3cufQKjOCKRwM5ikguOEOKKA2fhEDc4z8d0gGQicBSnOZ5HnBrtnecc9F13SMWyxISHnENRPwdl9gTPBCBI6QxfA7WWr+lCaDzDStq4DtE6JJ8g2VZamPM1TlXww6+NUVRvNq2XUN2qkWglBoZYz1E8K3RWk94PAcLoAJTkm84UQYOPyYLZIEs8GeBCRLBgfikbOSwK8vyIqXsY2Mbk69VVUV/tgzJGxI0OUnXIX/6AAAAAElFTkSuQmCC"},8369:function(t,e,r){t.exports=r.p+"img/image.7cd7d2f8.png"}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,s,o){if(!a){var c=1/0;for(l=0;l<t.length;l++){a=t[l][0],s=t[l][1],o=t[l][2];for(var n=!0,i=0;i<a.length;i++)(!1&o||c>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[i])}))?a.splice(i--,1):(n=!1,o<c&&(c=o));if(n){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,s,o]}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/vue-store-app/"}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,c=a[0],n=a[1],i=a[2],u=0;if(c.some((function(e){return 0!==t[e]}))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(i)var l=i(r)}for(e&&e(a);u<c.length;u++)o=c[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},a=self["webpackChunkvue_store_app"]=self["webpackChunkvue_store_app"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(2484)}));a=r.O(a)})();
//# sourceMappingURL=app.75230d15.js.map