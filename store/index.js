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
