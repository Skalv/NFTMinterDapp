export const state = () => ({
  walletAddress: "",
  toaster: {},
  name: "", // Store NFT's name
  descriptions: "", // NFT's description
  url: "" // link to NFT's digital assets
})

export const mutations = {
  setWalletAddress(state, address) {
    state.walletAddress = address
  },
  toggleToast(state, payload) {
    state.toaster = payload
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }, { $config }) {
    // await dispatch('fetchFromPinata')
  },
  async fetchFromPinata() {
    const filters = {
      status: 'pinned',
      metadata: {
        keyvalues: {
          type: {
            value: 'json',
            op: 'eq'
          },
          collection: {
            value: '1',
            op: 'eq'
          }
        }
      }
    }
    const result = await this.$pinata.pinList(filters)

    console.log(result)
  }
}
