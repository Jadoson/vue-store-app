<template>
  <div class="home-page">
    <div class="header-block">
      <div class="header-text">
        <h2>Смотри внимательно сколько всего у нас есть</h2>
        <h1>Магазин очень нужных штуковин</h1>
      </div>
      <img src="@/assets/image.png" alt="Header Image" class="header-image" />
    </div>
    <div class="header-new-items"><h1>Новинки</h1></div>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img
          :src="product.image"
          :alt="product.title"
          class="product-image"
          @click="viewProductDetails(product)"
        />
        <h3>{{ product.title }}</h3>
        <button @click="addToCart(product)">Купить</button>
      </div>
    </div>

    <product-details
      v-if="showModal"
      :product="selectedProduct"
      @close="showModal = false"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue'

export default {
  name: 'HomePage',
  components: {
    ProductDetails,
  },
  data() {
    return {
      products: [],
      showModal: false,
      selectedProduct: null,
    }
  },
  methods: {
    async fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      this.products = await response.json()
    },
    addToCart(product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const productIndex = cart.findIndex((item) => item.id === product.id)

      if (productIndex === -1) {
        cart.push({ ...product, quantity: 1 })
      } else {
        cart[productIndex].quantity++
      }

      localStorage.setItem('cart', JSON.stringify(cart))

      this.$root.$emit('cart-updated')
    },
    viewProductDetails(product) {
      this.selectedProduct = product
      this.showModal = true
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style scoped>
.home-page {
  padding-left: 3rem;
  padding-top: 1rem;
  padding-right: 3rem;
  font-family: 'Roboto', sans-serif;
}

.header-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #275742;
  color: white;
  position: relative;
  overflow: hidden;
  padding-left: 2rem;
  padding-top: 2rem;
  padding-right: 3rem;
}

.header-text {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
}

.header-text h2 {
  position: absolute;
  bottom: 350px;
  left: 40px;
  margin: 0;
  font-size: 2rem;
  font-weight: normal;
  width: 400px;
}

.header-text h1 {
  position: absolute;
  top: 110px;
  left: 40px;
  margin: 0;
  font-size: 7rem;
  font-weight: normal;
}

.header-image {
  width: 605px;
  height: 808px;
  border-radius: 8px;
}

.header-new-items {
  color: #275742;
  font-size: 2rem;
  text-align: center;
  padding-top: 3rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  color: #275742;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.product-card {
  padding: 5rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;
}

.product-card h3 {
  text-align: left;
  height: 50px;
}

.product-image {
  width: 100%;
  height: 550px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: contain;
}

button {
  background-color: white;
  color: #275742;
  border: 4px solid #275742;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.5rem;
}

button:hover {
  background-color: #275742;
  color: white;
}
</style>
