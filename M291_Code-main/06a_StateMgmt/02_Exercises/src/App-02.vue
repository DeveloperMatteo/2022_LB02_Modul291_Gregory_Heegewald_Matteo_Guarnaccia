<template>
  <div id="app">
    <b-container fluid>
      <b-jumbotron>
        <template #header>Digitale Visitenkarte</template>
        <template #lead>
          created by Gregory Heegewald & Matteo Guarnaccia
        </template>
        <hr class="my-4">
        <p>Fitnessstudio</p>
        <p>
          Anbieter: {{ $store.getters.trainer }}<br/>
          Hier findest du uns: {{ $store.getters.jobPosition }}
        </p>
          <b-button variant="primary" id="tooltip1" v-b-tooltip.hover>
            Telefon
          </b-button>&nbsp;&nbsp;
          <b-tooltip target="tooltip1" triggers="hover">
            {{ $store.state.lehrbetrieb }} 044 860 26 66 anrufen
          </b-tooltip>
        <b-button variant="success" id="tooltip2" v-b-tooltip.hover>Email</b-button>&nbsp;&nbsp;
        <b-tooltip target="tooltip2" triggers="hover">
          an {{ $store.getters.trainerEmail }} schreiben?
        </b-tooltip>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
