<template>
  <div class="container fixed-bottom">
    <div class="row">
      <div class="col">
        <p>Cute Poop NFT collection</p>
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
