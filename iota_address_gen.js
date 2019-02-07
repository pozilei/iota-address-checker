const Iota = require('@iota/core')

// you can change nodes here
const iota = Iota.composeAPI({
    provider: 'https://nodes.thetangle.org:443/'
})

// insert the seed you want to generate addresses from here
seed = "SEED"

let addressWithMoney = [];

// set index and amount of addresses to be generated
iota.getNewAddress(seed, { index: 0, total: 20 })
    .then(address => {
    iota.getBalances(address, 100)
    .then(({ balances }) => {
        for (i = 0; i <= balances.length; i++) {
            if(balances[i] > 0){
                addressWithMoney.push(address[i])
            }
          }
      console.log(address)
      console.log(balances)
      console.log(addressWithMoney)
    })
    .catch(err => {
      console.log(err)
    })
})
.catch(err => {
  console.log(err)
})
