<template>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col">
        <div class="container">
          <div id="History" class="row">
            <div class="col-6">
              <h2>Your <span>poops</span>, our history</h2>
              <p>
                It's always a personal satisfaction to see that our poop has
                been well designed. After reading this, will you look at your
                poop the same way? Don't deny your poop, don't flush it until
                you see what it looks like, don't be in denial, join the
                CutePoopNFT adventure.
              </p>
              <button class="cta">Mint your own poop</button>
            </div>
            <div class="col-6 drafts">
              <div class="imgContainer">
                <img
                  src="~/assets/images/draft_2.png"
                  alt="First draft of our NFT"
                />
              </div>
              <div class="imgContainer">
                <img
                  src="~/assets/images/draft_1.png"
                  alt="First draft of our NFT"
                />
              </div>
              <div class="imgContainer">
                <img
                  src="~/assets/images/draft_3.png"
                  alt="First draft of our NFT"
                />
              </div>
            </div>
          </div>
          <div id="Roadmap" class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <h2>Our <span>Digestive system</span></h2>
                </div>
              </div>
              <div class="row milestone">
                <div class="offset-5 col-2 divider"><p>1</p></div>
                <div class="col-5 text">
                  <h4>Start drawing and brainstorming around CutePoop</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, amet, voluptatibus illum earum sapiente cum rerum
                    aliquam quam distinctio doloremque quidem? Iusto illum
                    ducimus cumque qui natus dolores dolorum nam.
                  </p>
                </div>
              </div>
              <div class="row milestone">
                <div class="col-5 text">
                  <h4>Create a script to assembled randomly all CutePoops</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, amet, voluptatibus illum earum sapiente cum rerum
                    aliquam quam distinctio doloremque quidem? Iusto illum
                    ducimus cumque qui natus dolores dolorum nam.
                  </p>
                </div>
                <div class="col-2 divider"><p>2</p></div>
              </div>
              <div class="row milestone">
                <div class="offset-5 col-2 divider"><p>3</p></div>
                <div class="col-5 text">
                  <h4>Create a Dapp for minting on ethereum blockchain</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, amet, voluptatibus illum earum sapiente cum rerum
                    aliquam quam distinctio doloremque quidem? Iusto illum
                    ducimus cumque qui natus dolores dolorum nam.
                  </p>
                </div>
              </div>
              <div class="row milestone">
                <div class="col-5 text">
                  <h4>Prepare some special CutePoops for twitter giveaway</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, amet, voluptatibus illum earum sapiente cum rerum
                    aliquam quam distinctio doloremque quidem? Iusto illum
                    ducimus cumque qui natus dolores dolorum nam.
                  </p>
                </div>
                <div class="col-2 divider"><p>4</p></div>
              </div>
              <div class="row milestone">
                <div class="offset-5 col-2 divider"><p>5</p></div>
                <div class="col-5 text">
                  <h4>Our mint live on October 12th</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, amet, voluptatibus illum earum sapiente cum rerum
                    aliquam quam distinctio doloremque quidem? Iusto illum
                    ducimus cumque qui natus dolores dolorum nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="Attributes" class="row">
            <div class="col">
              <div class="row">
                <div class="col-5">
                  <h2>Over <span>10000</span> differents possibilities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet varius et ut vel. Posuere fringilla neque risus dolor
                    mi vitae, laoreet ornare pretium. Elementum iaculis
                    fermentum nisl consectetur accumsan, leo id risus.
                  </p>
                  <p>
                    Vitae duis et elit nam at id volutpat. Quisque enim vitae
                    est elit aenean mattis mi est consectetur.
                  </p>
                  <p>
                    Urna, amet ac eget libero urna dui. Accumsan, nisl aliquet
                    faucibus vitae eget condimentum. Enim, erat suspendisse sed
                    morbi ullamcorper at enim erat libero. Eu augue lectus fusce
                    ante nulla.
                  </p>
                  <p>
                    Est facilisis dui nunc risus tincidunt at sit. Vivamus felis
                    tempus egestas ut dui. Arcu scelerisque vestibulum
                    ullamcorper sit nisl amet.
                  </p>
                  <button class="cta">Mint your own poop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      const amount = 1
      const totalCost =
        amount * this.$web3.utils.toWei(`${this.$config.WEI_COST}`)
      const totalGasLimit =
        amount * this.$web3.utils.toWei(`${this.$config.GAS_LIMIT}`, 'wei')
      console.log(totalCost, totalGasLimit)

      try {
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: this.$config.CONTRACT_ADDRESS,
              from: this.walletAddress,
              data: this.$web3Contract.methods.mintNFT(amount).encodeABI(),
              value: `${this.$web3.utils.toHex(totalCost)}`,
              gasLimit: `${this.$web3.utils.toHex(totalGasLimit)}`,
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
