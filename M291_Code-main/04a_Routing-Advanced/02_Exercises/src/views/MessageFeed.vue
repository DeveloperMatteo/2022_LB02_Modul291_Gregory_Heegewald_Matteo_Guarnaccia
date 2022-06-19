<template>
  <div>
    <h1>Message Feed</h1>
    <div v-for="(m, i) in messages" :key="i" >
      <router-link :to="{ name: 'singlemessage', params: {content: m}}">
        {{ m }}
      </router-link>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hallo, wie geht es dir?',
        'Wir lieben Yarn!',
        'Horgen Oberdorf',
        'Mediamatiker EFZ'
      ]
    }
  }
}
</script>
