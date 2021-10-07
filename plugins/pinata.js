const Pinata = require('@pinata/sdk')

export default async ({ app }, inject) => {
  const pinata = Pinata(app.$config.PINATA_KEY, app.$config.PINATA_SECRET)
  inject('pinata', pinata)
}
