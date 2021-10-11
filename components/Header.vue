<template>
  <div id="Header" class="container-fluid">
    <div class="row">
      <div class="col">
        <nav class="Menu">
          <a href="#History" class="nav-link">History</a>
          <a href="#Roadmap" class="nav-link">Roadmap</a>
          <a href="#Attributes" class="nav-link">Attributes</a>
          <a href="/" class="logo">
            <img
              class="img-fluid d-block d-sm-none"
              src="~/assets/images/LOGO-mobile.png"
              alt="CutePoop mobile logo"
            />
            <img
              class="img-fluid d-none d-sm-block"
              src="~/assets/images/LOGO.png"
              alt="CutePoop logo"
            />
          </a>
          <a href="#Team" class="nav-link">Team</a>
          <a href="#FAQ" class="nav-link">FAQ</a>
          <button
            v-if="walletAddress === ''"
            class="btn btn-outline-primary"
            @click="connectWallet()"
          >
            Start
          </button>
          <button v-else class="btn btn-outline-primary">
            {{ walletAddress | slice }}
          </button>
        </nav>
      </div>
    </div>
    <div v-if="$route.name === 'index'" class="row IndexPage">
      <div class="col Hero">
        <h1>You have never seen <span>your poop</span> like that</h1>
        <p>
          In a perfect world, we could imagine that even our poop reflects our
          emotions and the trends of the moment. Cute or monstrous, our poop
          remains our own creation, a reflection of our health and even our
          mental state.
        </p>
        <button class="cta">Mint your own poop</button>
        <div class="poops">
          <img
            class="img-fluid d-none d-sm-block"
            src="~/assets/images/poop-header2.png"
            alt="A brown poop"
          />
          <img
            class="img-fluid"
            src="~/assets/images/poop-header3.png"
            alt="A poop with a poulp"
          />
          <img
            class="img-fluid d-none d-sm-block"
            src="~/assets/images/poop-header1.png"
            alt="A blue poop"
          />
        </div>
      </div>
    </div>
    <div v-else class="row MintPage">
      <div class="col-auto d-none d-md-block side">
        <img
          src="~/assets/images/poop-zombie.png"
          alt="A zombie poop"
          class="img-fluid"
        />
      </div>
      <div class="col title">
        <h1>Stop <span>pooping</span>, go <span>minting</span> !!</h1>
      </div>
      <div class="col-auto d-none d-md-block side">
        <img
          src="~/assets/images/poop-gold.png"
          alt="A golden poop"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  filters: {
    slice(text) {
      return `${text.slice(0, 7)}...`
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
