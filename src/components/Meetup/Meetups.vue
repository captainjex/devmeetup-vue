<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="info">
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-card-media
                src="http://4.bp.blogspot.com/-oil8KfzeC4o/TlAZz20Y3KI/AAAAAAAAEMk/B8axSvcY34g/s1600/jakarta-pictures.jpg"
                height="130px"
              ></v-card-media>
            </v-flex>
            <v-flex xs7 sm8 md9>
              <v-card-title primary-title>
                <div>
                  <h5 class="white--text mb-0">Meetup ku</h5>
                  <div>11 Januari 2019</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat to="/meetups/1">
                  <v-icon left>arrow_forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
