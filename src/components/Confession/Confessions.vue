<template>
  <v-container fluid grid-list-md>
    <v-layout column>
      <v-flex
        v-for="confession in confessions"
        :key="confession.title"
      >
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0" v-text="confession.title"></h3>
              <div v-text="confession.description"></div>
            </div>
          </v-card-title>
          <v-card-media></v-card-media>
          <v-card-actions class="white">
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>thumb_up</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>thumb_down</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      confessions () {
        return this.$store.getters.loadedConfessions
      }
    }
  }
</script>
