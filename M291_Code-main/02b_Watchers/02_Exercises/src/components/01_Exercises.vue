
<template>
  <div class="container">
    <h1>Watcher Shop Gregory & Matteo</h1>
    <div>
      Ausverkauf "ESN Designer Whey Protein 1000g"
      <strike> von {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong><br/>
      <a href="#" @click="updateDiscount">Increase discount by 7.5%</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      oldDiscount: 5,
      discount: 7.5,
    }
  },
  watch: {
    discount: {
      discount(newVal,oldVal){
        console.log(`actual(${newVal}%) and old(${oldVal}%) discount.`);
        this.oldDiscount = oldVal;
      }
    }
  },


  methods: {
    updateDiscount(){
      this.discount = this.discount + 7.5;
    }
  }
}

</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

a {
  display: inline-block;
  background: rgb(120, 30, 200);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 55px;
}
</style>
