const request = require('request-promise')
const crypto = require('crypto')
const sha256 = crypto.createHash('sha256')
const secp256k1 = require('secp256k1')
const keccak256 = require('keccak256')
const { NodeHttpTransport } = require('@improbable-eng/grpc-web-node-http-transport')
const { grpc } = require('@improbable-eng/grpc-web')

const GooglePb = require('./proto/google/protobuf/any_pb')

const InjectiveCryptoPb = require('./proto/injective/crypto/v1beta1/ethsecp256k1/keys_pb')

const BasePb = require('./proto/cosmos/base/v1beta1/coin_pb')
const BankPb = require('./proto/cosmos/bank/v1beta1/tx_pb')

const TxPb = require('./proto/cosmos/tx/v1beta1/tx_pb')
const TxService = require('./proto/cosmos/tx/v1beta1/service_pb_service')
const TxServicePb = require('./proto/cosmos/tx/v1beta1/service_pb')
const TxSigningPb = require('./proto/cosmos/tx/signing/v1beta1/signing_pb')

async function getAccSeq(address){
  let options = {
      uri: 'http://localhost:10337/cosmos/auth/v1beta1/accounts/' + address,
      json: true
  }
  let res = await request(options)
  let info = res.account.base_account
  return [parseInt(info.account_number), parseInt(info.sequence)]
}

function sign(msgBytes,pk){
  let msgHash = keccak256(Buffer.from(msgBytes))
  let signingKey = Buffer.from(pk,'hex')
  let sigObj = secp256k1.ecdsaSign(msgHash, signingKey)
  return sigObj.signature
}

async function main(){
  // local network with default accounts
  let chainId = 'injective-1'
  let pk = "88CBEAD91AEE890D27BF06E003ADE3D4E952427E88F88D31D61D3EF5E5D54305"
  let sender = "inj1cml96vmptgw99syqrrz8az79xer2pcgp0a885r"
  let receiver = "inj1hkhdaj2a2clmq5jq6mspsggqs32vynpk228q3r"
  let [accNum, accSeq] = await getAccSeq(sender)
  let [gasPrice, gasLimit] = [500000000, 200000]

  // build fee
  let feeAmount = new BasePb.Coin()
  feeAmount.setAmount((gasPrice * gasLimit).toString())
  feeAmount.setDenom('inj')

  let fee = new TxPb.Fee()
  fee.setGasLimit(gasLimit)
  fee.setAmountList([feeAmount])

  // build pub key
  let pubKey = new InjectiveCryptoPb.PubKey()
  pubKey.setKey('injpub1addwnpepqt2u9fg77dpyya44nh5g3gph2ld6qlq3y3g5nv8f6z6k6qqh78777gjvup4')

  let packedPubKey = new GooglePb.Any()
  packedPubKey.setTypeUrl('/injective.crypto.v1beta1.ethsecp256k1.PubKey')
  packedPubKey.setValue('CiEC1cKlHvNCQna1neiIoDdX26B8ESRRSbDp0LVtABfx/e8=')

  // build MsgSend
  const amount = new BasePb.Coin()
  amount.setAmount("100")
  amount.setDenom('inj')

  const msg = new BankPb.MsgSend()
  msg.setFromAddress(sender)
  msg.setToAddress(receiver)
  msg.setAmountList([amount])

  const packedMsg = new GooglePb.Any()
  packedMsg.setTypeUrl('/cosmos.bank.v1beta1.MsgSend')
  packedMsg.setValue(msg.serializeBinary())

  // build TxBody
  const txBody = new TxPb.TxBody()
  txBody.setMessagesList([packedMsg])
  txBody.setMemo("")
  txBody.setTimeoutHeight(0)
  const txBodyBytes = txBody.serializeBinary()

  // build signerInfo
  const modeSingleDirect = new TxPb.ModeInfo.Single()
  modeSingleDirect.setMode(TxSigningPb.SignMode.SIGN_MODE_DIRECT)
  const modeInfo = new TxPb.ModeInfo()
  modeInfo.setSingle(modeSingleDirect)

  const signerInfo = new TxPb.SignerInfo()
  signerInfo.setPublicKey(packedPubKey)
  signerInfo.setModeInfo(modeInfo)
  signerInfo.setSequence(accSeq)

  // build authInfo
  const authInfo = new TxPb.AuthInfo()
  authInfo.setSignerInfosList([signerInfo])
  authInfo.setFee(fee)
  const authInfoBytes = authInfo.serializeBinary()

  // build signDoc, we will sign over its serialized data
  const signDoc = new TxPb.SignDoc()
  signDoc.setBodyBytes(txBodyBytes)
  signDoc.setAuthInfoBytes(authInfoBytes)
  signDoc.setChainId(chainId)
  signDoc.setAccountNumber(accNum)

  // sign tx
  let sig = sign(signDoc.serializeBinary(), pk)

  // build rawTx, we hash this to obtain tx hash
  const txRaw = new TxPb.TxRaw()
  txRaw.setBodyBytes(txBodyBytes)
  txRaw.setAuthInfoBytes(authInfoBytes)
  txRaw.setSignaturesList([sig])

  // compute tx hash
  const localTxHash = sha256.update(txRaw.serializeBinary()).digest('hex')
  console.log("Computed Tx Hash:", localTxHash)

  // init txService with option to support grpc-web properly
  const txService = new TxService.ServiceClient(
    'http://localhost:9091',
    { transport: NodeHttpTransport() }
  )

  // broadcast tx request
  const broadcastTxRequest = new TxServicePb.BroadcastTxRequest()
  broadcastTxRequest.setTxBytes(txRaw.serializeBinary())
  broadcastTxRequest.setMode(TxServicePb.BroadcastMode.BROADCAST_MODE_BLOCK)

  let res = txService.broadcastTx(
    broadcastTxRequest,
    (err, res) => {
      console.log(err)
      console.log(res.toObject())
    }
  )

  // // get tx request
  // const getTxRequest = new TxServicePb.GetTxRequest()
  // getTxRequest.setHash('8C9AC14F7D54E8647576FC325E35CEF2ED0F85467952D8389EF192E2FEF7F236')
  //
  // let res = txService.getTx(
  //   getTxRequest,
  //   (err, res) => {
  //     console.log(err)
  //     console.log(JSON.stringify(res.toObject()))
  //   }
  // )
}


main()
