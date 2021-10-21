<template>
  <div id="MintPage" class="container-fluid wrapper">
    <div class="row">
      <div class="col">
        <div class="container">
          <div class="row">
            <div v-if="!hereComeTheTime" class="col timer">
              <h4>Sale and reveal {{ $config.REVEAL_DATE | displayDate }}</h4>
              <p>Please, be patient !</p>
            </div>
            <div v-else class="col minter">
              <div class="supply">
                <h2>Current supply</h2>
                <p>{{ supply }} / 10000</p>
              </div>
              <h4>How many poop you want ?</h4>
              <form @submit.prevent="">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="amount--"
                    >
                      -
                    </button>
                  </div>
                  <input v-model="amount" type="number" class="form-control" />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="amount++"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button class="cta" @click="mintNFT">Mint my poop !</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const moment = require('moment')

export default {
  filters: {
    displayDate(date) {
      return moment(date).fromNow()
    },
  },
  data() {
    return {
      amount: 1,
    }
  },
  computed: {
    ...mapState(['walletAddress', 'supply']),
    hereComeTheTime() {
      return true
      // return moment(this.$config.REVEAL_DATE).isBefore(moment())
    },
  },
  watch: {
    amount() {
      if (this.amount > 20) {
        this.amount = 20
      }
      if (this.amount < 1) {
        this.amount = 1
      }
    },
  },
  methods: {
    ...mapMutations(['toggleToast']),
    async mintNFT() {
      const totalCost =
        this.amount * this.$web3.utils.toWei(`${this.$config.WEI_COST}`)
      // const totalGasLimit =
      //   this.amount * this.$web3.utils.toWei(`${this.$config.GAS_LIMIT}`, 'wei')

      try {
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: this.$config.CONTRACT_ADDRESS,
              from: this.walletAddress,
              data: this.$web3Contract.methods.mintNFT(this.amount).encodeABI(),
              value: `${this.$web3.utils.toHex(totalCost)}`,
              // gasLimit: `${this.$web3.utils.toHex(totalGasLimit)}`,
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
