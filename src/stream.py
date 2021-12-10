import asyncio
import time
import sys
sys.path.insert(0, '/Users/nam/desktop/injective/sdk-python/')

from pyinjective.client import Client
from pyinjective.constant import Network
from concurrent.futures import ThreadPoolExecutor

loop = asyncio.get_event_loop()

spot_market_ids = ["0xa508cb32923323679f29a032c70342c147c17d0145625922b0ef22e955c844c0",
                   "0x26413a70c9b78a495023e5ab8003c9cf963ef963f6755f8b57255feb5744bf31",
                   "0x74b17b0d6855feba39f1f7ab1e8bad0363bd510ee1dcc74e40c2adfe1502f781",
                   "0x8b1a4d3e8f6b559e30e40922ee3662dd78edf7042330d4d620d188699d1a9715",
                   "0x01edfab47f124748dc89998eb33144af734484ba07099014594321729a0ca16b",
                   "0xe8bf0467208c24209c1cf0fd64833fa43eb6e8035869f9d043dbff815ab76d01",
                   "0x74ee114ad750f8429a97e07b5e73e145724e9b21670a7666625ddacc03d6758d"]

derivative_market_ids = ["0x4ca0f92fc28be0c9761326016b5a1a2177dd6375558365116b5bdda9abc229ce"]

def stream_derivative_orderbooks(client,id):
    print("derv orderbook for client",id)
    res = client.stream_derivative_orderbooks(market_ids=derivative_market_ids)
    for r in res:
        print(id)

def stream_spot_orderbooks(client,id):
    print("spot orderbook for client",id)
    res = client.stream_spot_orderbooks(market_ids=spot_market_ids)
    for r in res:
        print(id)

def stream_spot_orders(client):
    for market in spot_market_ids:
        res = client.stream_spot_orders(market_id=market)
        for r in res:
            print(r)

def stream_derivative_orders(client):
    for market in derivative_market_ids:
        res = client.stream_derivative_orders(market_id=market)
        for r in res:
            print(r)

async def main() -> None:
    network = Network.mainnet(node='sentry2')
    client = Client(network, insecure=True)

    processes = []
    limit = 500
    with ThreadPoolExecutor(max_workers=limit) as executor:
        for i in range(limit):
            # processes.append(executor.submit(stream_spot_orders, client))
            # processes.append(executor.submit(stream_derivative_orders, client))
            # processes.append(executor.submit(stream_spot_orderbooks, client, i))
            processes.append(executor.submit(stream_derivative_orderbooks, client, i))


loop.create_task(main())
try:
    loop.run_forever()
except KeyboardInterrupt:
    pass
