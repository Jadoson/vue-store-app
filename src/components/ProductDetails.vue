<template>
  <div class="product-details-overlay">
    <div class="product-details-modal">
      <div class="product-header">
        <h2>{{ product.title }}</h2>
        <button class="close-btn" @click="closeModal">X</button>
      </div>
      <div class="product-container">
        <img :src="product.image" :alt="product.title" class="product-image" />
        <div class="product-details">
          <h3>Описание</h3>
          <p>{{ product.description }}</p>
          <h3>Категория</h3>
          <p>{{ product.category }}</p>
          <h3>Рейтинг</h3>
          <p>{{ product.rating.rate }}</p>
          <h2>{{ product.price }}$</h2>
          <button @click="addToCart(product)">Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: Object,
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    addToCart(product) {
      this.$emit('add-to-cart', product)
      this.closeModal()
    },
  },
}
</script>

<style scoped>
.product-details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.product-details-modal {
  background-color: white;
  width: 1000px;
  text-align: center;
}

.product-header {
  background-color: #275742;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 2rem;
}
.product-details {
  text-align: left;
  margin-top: 1rem;
  padding-right: 1rem;
}

.product-details h2,
p {
  color: #275742;
  font-weight: bold;
}

.product-details h3 {
  color: grey;
}

.product-image {
  width: 450px;
  max-height: 500px;
  border-radius: 8px;
  padding: 1rem;
}

.product-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: #275742;
  text-align: center;
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  border-radius: 3px;
  margin-bottom: 1rem;
}

.close-btn {
  text-align: right;
  background-color: #275742;
  color: white;
  font-size: 2rem;
}
</style>
