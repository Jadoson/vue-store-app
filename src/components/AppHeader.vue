<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo">Штуки</h1>
      <ul class="nav-links">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/">Магазин</router-link></li>
      </ul>
      <div class="cart">
        <router-link to="/cart">
          <span class="cart-icon">
            <span class="cart-count">{{ cartCount }}</span>
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      cartCount: 0,
    }
  },
  watch: {
    '$route': 'fetchCartCount',
  },
  created() {
    this.$root.$on('cart-updated', this.fetchCartCount)
  },
  beforeDestroy() {
    this.$root.$off('cart-updated', this.fetchCartCount)
  },
  mounted() {
    this.fetchCartCount()
  },
  methods: {
    fetchCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      this.cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border: 4px solid #275742;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  color: #275742;
  margin-left: 3rem;
  margin-top: 2rem;
  margin-right: 3rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 3rem;
  flex-grow: 0;
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-grow: 1;
  font-weight: bold;
}

.nav-links li {
  margin: 10px;
}

.nav-links a {
  color: #275742;
  text-decoration: none;
  font-size: 2rem;
  margin: 0;
}

.cart {
  display: flex;
  align-items: center;
  margin: 0;
}

.cart-icon {
  position: relative;
  background: url('~@/assets/icon.png') no-repeat center center;
  background-size: contain;
  width: 100px;
  height: 40px;
  display: inline-block;
  margin: 0;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  margin: 0;
}
</style>
