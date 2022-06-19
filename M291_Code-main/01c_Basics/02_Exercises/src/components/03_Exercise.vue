<template>
  <div>
    <h1>Tischreservation in einem Restaurant (Matteo & Gregory)</h1>
    <ul>
      <li v-for="n in 6" :key="n">
        <a href="#" @click="triggerAlert(n)">Tisch {{ n }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    triggerAlert(n) {
      alert(`${n} has been clicked!`);
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  display: block;
  list-style: none;

  + li {
    margin-top: 20px;
  }
}

a {
  margin-left: 50px;
  display: inline-block;
  background: #0095d2;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

h1{
  margin-left: 50px;
}
</style>
