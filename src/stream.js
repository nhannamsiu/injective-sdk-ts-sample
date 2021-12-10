const { DerivativeMarketConsumer, DerivativeMarketStream } = require('@injectivelabs/derivatives-consumer')

const derivativeMarketStream = new DerivativeMarketStream('https://public.api.injective.network')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  streams = []
  for (i=0; i<10000; i++) {
    try{
      stream = derivativeMarketStream.orderbook.start({
        marketIds: ['0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce'],
        callback: (res) => {
          console.log(res)
        },
        onEndCallback: () => {
          console.log(`stream ended`)
        },
      })
      console.log("started stream",i)
      streams.push(stream)
    }
    catch(err) {
      console.log(err)
    }

  }
}
main()
