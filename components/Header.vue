<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Cute Poop</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <button
        v-if="walletAddress === ''"
        class="btn btn-outline-primary ml-auto"
        @click="connectWallet()"
      >
        Connecter mon wallet
      </button>
      <button v-else class="btn btn-outline-primary ml-auto">
        {{ walletAddress | slice }}
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  filters: {
    slice(text) {
      return `Connecté : ${text.slice(0, 7)}...`
    },
  },
  computed: mapState(['walletAddress']),
  mounted() {
    if (window.ethereum) {
      this.getCurrentWalletConnected()
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          this.setWalletAddress(accounts[0])
          this.toggleToast({
            text: 'Metamask connecté !',
            type: 'success',
          })
        } else {
          this.setWalletAddress('')
          this.toggleToast({
            text: `😥 Metamask déconnecté`,
            type: 'warning',
          })
        }
      })
    } else {
      this.toggleToast({
        text: "🦊 Metamask n'est pas détecté !!",
        type: 'danger',
      })
    }
  },
  methods: {
    ...mapMutations(['setWalletAddress', 'toggleToast']),
    async connectWallet() {
      if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
          this.setWalletAddress(addressArray[0])
          this.toggleToast({
            text: 'Metamask connecté !',
            type: 'success',
          })
        } catch (err) {
          this.toggleToast({
            text: `😥 ${err.message}`,
            type: 'danger',
          })
        }
      } else {
        this.toggleToast({
          text: "🦊 Metamask n'est pas détecté !!",
          type: 'danger',
        })
      }
    },
    async getCurrentWalletConnected() {
      try {
        const addressArray = await window.ethereum.request({
          method: 'eth_accounts',
        })
        if (addressArray.length > 0) {
          this.setWalletAddress(addressArray[0])
          this.toggleToast({
            text: 'Metamask connecté !',
            type: 'success',
          })
        }
      } catch (err) {
        this.toggleToast({
          text: `😥 ${err.message}`,
          type: 'danger',
        })
      }
    },
  },
}
</script>
