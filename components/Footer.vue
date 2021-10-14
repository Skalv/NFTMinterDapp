<template>
  <div id="Footer" class="container-fluid">
    <div class="row">
      <div class="col">
        <a href="https://discord.gg/MHF9xhC5" target="_blank">
          <img src="~/assets/images/discord.png" alt="Discord logo" />
        </a>
        <a href="https://twitter.com/CutePOOPNFT" target="_blank">
          <img src="~/assets/images/twitter.png" alt="Twitter logo" />
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>Copyright Cute Poop - All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState(['toaster']),
  watch: {
    toaster() {
      if (this.toaster.text && this.toaster.type) {
        this.$bvToast.toast(this.toaster.text, {
          title: 'Cute Poop message',
          variant: this.toaster.type,
          toaster: 'b-toaster-bottom-right',
          solid: true,
        })
      }
    },
  },
  methods: mapMutations(['toggleToast']),
}
</script>
