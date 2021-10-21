export const state = () => ({
  walletAddress: "",
  toaster: {},
  name: "", // Store NFT's name
  descriptions: "", // NFT's description
  url: "", // link to NFT's digital assets
  supply: 0
})

export const mutations = {
  setWalletAddress(state, address) {
    state.walletAddress = address
  },
  toggleToast(state, payload) {
    state.toaster = payload
  },
  setTotalSupply(state, payload) {
    state.supply = payload
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }, { $config }) {
    await dispatch('getTotalSupply')
  },
  async getTotalSupply({ commit }) {
    const supply = await this.app.$web3Contract.methods.totalSupply().call();
    commit("setTotalSupply", supply)
  }
}
