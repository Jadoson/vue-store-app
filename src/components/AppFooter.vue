<template>
  <footer class="app-footer">
    <div class="footer-content">
      <h1 class="logo">Штуки</h1>
      <ul class="nav-links">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/">Магазин</router-link></li>
      </ul>
      <div>
        <button @click="sendMessage">Напиши нам</button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    sendMessage() {
      alert('Напишите нам на почту: support@shop.com')
    },
  },
}
</script>

<style scoped>
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #275742;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
  font-family: 'Roboto', sans-serif;
  margin-left: 3rem;
  margin-bottom: 2rem;
  margin-right: 3rem;
}

.logo {
  font-size: 3rem;
  margin-left: 1rem;
  color: white;
}

.footer-content {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-grow: 1;
}

.nav-links li {
  margin: 40px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  margin: 0;
}

button {
  background-color: #275742;
  color: white;
  border: 4px solid white;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.5rem;
}

button:hover {
  background-color: white;
  color: #275742;
}
</style>
