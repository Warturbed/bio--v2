import { createStore } from 'vuex'

export default createStore({
  state: {
    coins : 5,
    storage : {
      bio: 2,
      cpu: 2,
      soul: 2
    },
    production: {
      bio: 0,
      cpu: 0,
      soul: 0
    }
  },
  mutations: {
    ADD_COINS_TO_STATE: (state, value) => {
      if (value === 5) {
        state.coins = state.coins + 5
      }
      else {
        state.coins++
      }
    },
    BUY_ITEM_IN_STORAGE: (state, value) => {
      if (value === 7) {
        state.coins = state.coins - 7
        state.storage.bio++
      } else if (value === 5) {
        state.coins = state.coins - 5
        state.storage.cpu++
      } else {
        state.coins = state.coins - 25
        state.storage.soul++
      }
      
    },
    SELL_ITEM_FROM_STORAGE: (state, value) => {
      if (value === 5) {
        state.storage.bio--
        state.coins = state.coins + 5
      } else if (value === 3) {
        state.coins = state.coins + 3
        state.coins.push(0,0,0)
      } else {
        state.storage.soul--
        state.coins = state.coins + 15
      }
    },
    SEND_ITEM_TO_PRODUCTION: (state, type) => {
      if (type === 'bio') {
        state.storage.bio--
        state.production.bio++
      } else if (type === 'cpu') {
        state.storage.cpu--
        state.production.cpu++
      } else {
        state.storage.soul--
        state.production.soul++
      }
    },
    BACK_ITEM_TO_STORAGE: (state, type) => {
      if (type === 'bio') {
        state.storage.bio++
        state.production.bio--
      } else if (type === 'cpu') {
        state.storage.cpu++
        state.production.cpu--
      } else {
        state.storage.soul++
        state.production.soul--
      }
    },
    PRODUCE_ROBOT: (state) => {
      state.coins = state.coins - 10
      state.production = {bio: 0, cpu: 0, soul: 0}
    }
  },
  actions: {
    ADD_COINS({commit}, value) {
      commit('ADD_COINS_TO_STATE', value);
    },
    BUY_ITEM({commit}, value) {
      commit('BUY_ITEM_IN_STORAGE', value);
    },
    SELL_ITEM({commit}, value) {
      commit('SELL_ITEM_FROM_STORAGE', value);
    },
    SEND_TO_PROD({commit}, type) {
      commit('SEND_ITEM_TO_PRODUCTION', type);
    },
    BACK_TO_STORAGE({commit}, type) {
      commit('BACK_ITEM_TO_STORAGE', type);
    },
    PRODUCE_ROBOT({commit}) {
      commit('PRODUCE_ROBOT');
    },
  },
  getters: {
    COINS(state) {
      return state.coins;
    },
    STORAGE(state) {
      return state.storage;
    },
    PRODUCTION(state) {
      return state.production;
    }
  }
})
