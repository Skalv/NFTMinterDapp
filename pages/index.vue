<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Salut</h1>
        <button class="btn btn-success" @click="mintNFT()">
          Minter mon Poop !!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState(['walletAddress']),
  methods: {
    ...mapMutations(['toggleToast']),
    async mintNFT() {
      const tokenURI =
        'https://gateway.pinata.cloud/ipfs/QmXnBxMqay9wmucWWE8j7iENMdd2iXBWpwWDSTBpskbXf3'
      try {
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: this.$config.CONTRACT_ADDRESS,
              from: this.walletAddress,
              data: this.$web3Contract.methods
                .mintNFT(this.walletAddress, tokenURI)
                .encodeABI(),
            },
          ],
        })
        this.toggleToast({
          text: `✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/${txHash}`,
          type: 'success',
        })
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
