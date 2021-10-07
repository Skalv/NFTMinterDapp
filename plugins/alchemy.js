const { createAlchemyWeb3 } = require('@alch/alchemy-web3')

export default async ({ app }, inject) => {
  const web3 = createAlchemyWeb3(app.$config.ALCHEMY_API)
  inject("web3", web3)
  const web3Contract = await new web3.eth.Contract(app.$config.CONTRACT_ABI, app.$config.CONTRACT_ADDRESS)
  inject('web3Contract', web3Contract)
}
