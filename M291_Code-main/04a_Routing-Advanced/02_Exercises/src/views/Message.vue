<template>
  <div>
    <h1>Message</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Advanced Routing',
        'Modul 291',
        'Gregory Heegewald',
        'Matteo Guarnaccia'
      ]
    }
  }
}
</script>
