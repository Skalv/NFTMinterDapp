<template>
  <div id="Header" class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainNavMenu"
              aria-controls="mainNavMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="mainNavMenu" class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="#History" class="nav-link">History</a>
                </li>
                <li class="nav-item">
                  <a href="#Roadmap" class="nav-link">Roadmap</a>
                </li>
                <li class="nav-item">
                  <a href="#Attributes" class="nav-link">Attributes</a>
                </li>
                <li class="nav-item">
                  <a href="/" class="nav-link">
                    <img
                      class=""
                      src="~/assets/images/LOGO.png"
                      alt="CutePoop logo"
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#Team" class="nav-link">Team</a>
                </li>
                <li class="nav-item">
                  <a href="#FAQ" class="nav-link">FAQ</a>
                </li>
                <li class="nav-item">
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
                </li>
              </ul>
            </div>
          </nav>
          <h1>You have never seen <span>your poop</span> like that</h1>
          <p>
            In a perfect world, we could imagine that even our poop reflects our
            emotions and the trends of the moment. Cute or monstrous, our poop
            remains our own creation, a reflection of our health and even our
            mental state.
          </p>
          <button class="cta">Mint your own poop</button>
          <div class="poops">
            <img src="~/assets/images/poop-brown.png" alt="A brown poop" />
            <img
              src="~/assets/images/poop-poulpo.png"
              alt="A poop with a poulp"
            />
            <img src="~/assets/images/poop-blue.png" alt="A blue poop" />
          </div>
        </div>
      </div>
    </div>
  </div>
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
