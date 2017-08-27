<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/create" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
          >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Mari gabung meetup yang keren!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        { imageUrl: 'http://4.bp.blogspot.com/-oil8KfzeC4o/TlAZz20Y3KI/AAAAAAAAEMk/B8axSvcY34g/s1600/jakarta-pictures.jpg', id: 'asdf', title: 'Meetup di Jakarta' },
        { imageUrl: 'https://crushingfromthehigh.files.wordpress.com/2013/01/lowongan-pekerjaan-jakarta3.jpg', id: 'asdffadfsf', title: 'Meetup di Bandung' }
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
  .title {
    color: white;
    font-size: 2em;
  }
</style>
