<template>
  <v-container>
    <pre>{{confessions}}</pre>
    <pre>{{loading}}</pre>

  </v-container>
</template>

<script>
  export default {
    computed: {
      confessions () {
        return this.$store.getters.allConfessions
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      // onLoadMeetup (id) {
      //   this.$router.push('/meetups/' + id)
      // }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
