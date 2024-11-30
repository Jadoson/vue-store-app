<template>
  <div class="cart-page">
    <h1>Корзина</h1>
    <table class="cart-table">
      <thead>
        <tr>
          <th>Товар</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.price }}$</td>
          <td>{{ item.quantity }}</td>
          <td>{{ (item.price * item.quantity).toFixed(2) }}$</td>
          <td>
            <img
              src="@/assets/IconTeritary.png"
              alt="Удалить"
              class="delete-icon"
              @click="removeFromCart(item)"
            />
          </td>
        </tr>
        <tr class="cart-total">
          <td colspan="2">Итог</td>
          <td>{{ totalItems }}</td>
          <td>{{ totalSum.toFixed(2) }}$</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <button class="pay-button">Плачу за всё!</button>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      cartItems: [],
    }
  },
  computed: {
    totalSum() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },
    totalItems() {
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },
  },
  methods: {
    fetchCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      this.cartItems = cart
    },
    removeFromCart(itemToRemove) {
      const cart = this.cartItems.filter((item) => item.id !== itemToRemove.id)
      localStorage.setItem('cart', JSON.stringify(cart))
      this.cartItems = cart
      this.$root.$emit('cart-updated')
    },
  },
  mounted() {
    this.fetchCart()
  },
}
</script>

<style scoped>
.cart-page {
  padding: 3rem;
  font-family: 'Roboto', sans-serif;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  border: 2px solid #275742;
  color: #275742;
  font-size: 2rem;
}

.cart-table th,
.cart-table td {
  padding: 0.8rem;
  text-align: left;
}

.cart-table tbody tr {
  border: 2px solid #275742;
}

.cart-table th {
  color: #275742;

  font-weight: bold;
}

.cart-total {
  font-weight: bold;
  background-color: #f9f9f9;
}

.delete-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.delete-icon:hover {
  transform: scale(1.2);
}

h1 {
  color: #275742;
  font-size: 3rem;
  text-align: center;
}

.pay-button {
  margin: 2rem 0 0 auto;
  display: block;
  padding: 1rem 3rem;
  background-color: #275742;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
