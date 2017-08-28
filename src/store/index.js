import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://4.bp.blogspot.com/-oil8KfzeC4o/TlAZz20Y3KI/AAAAAAAAEMk/B8axSvcY34g/s1600/jakarta-pictures.jpg',
        id: 'asdf',
        title: 'Meetup di Jakarta',
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://crushingfromthehigh.files.wordpress.com/2013/01/lowongan-pekerjaan-jakarta3.jpg',
        id: 'asdffadfsf',
        title: 'Meetup di Bandung',
        date: '2017-07-20'
      }
    ],
    user: {
      id: 'asdfajshfljkasdf',
      registeredMeetups: ['asdffadfsf']
    }
  },
  mutations: {
    createMeetup (state, payLoad) {
      state.loadedMeetups.push(payLoad)
    }
  },
  actions: {
    createMeetup ({commit}, payLoad) {
      const meetup = {
        title: payLoad.title,
        location: payLoad.location,
        imageUrl: payLoad.imageUrl,
        description: payLoad.description,
        date: payLoad.date
      }
      // reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
