import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BlackListedKol,
  CampaignCreated,
  CampaignDetailsUpdated,
  ClaimBackInvestment,
  ClaimKolInvestment,
  ClaimPreSaleTokens,
  ClaimPreSaleTokensBlackListed,
  ContractVariablesUpdated,
  DepositPreSaleTokens,
  InvestInCampaign,
  KOLAdded,
  SetMaxTGEAllowance,
  SetPenalty,
  TGEDeposited,
  WithdrawPenaltyAndUpdateAddress,
  WithdrawPresaleByCampaignOwner
} from "../generated/protoKol2/protoKol2"

export function createBlackListedKolEvent(
  Kol: Address,
  campaignId: BigInt
): BlackListedKol {
  let blackListedKolEvent = changetype<BlackListedKol>(newMockEvent())

  blackListedKolEvent.parameters = new Array()

  blackListedKolEvent.parameters.push(
    new ethereum.EventParam("Kol", ethereum.Value.fromAddress(Kol))
  )
  blackListedKolEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )

  return blackListedKolEvent
}

export function createCampaignCreatedEvent(
  _campaign: ethereum.Tuple
): CampaignCreated {
  let campaignCreatedEvent = changetype<CampaignCreated>(newMockEvent())

  campaignCreatedEvent.parameters = new Array()

  campaignCreatedEvent.parameters.push(
    new ethereum.EventParam("_campaign", ethereum.Value.fromTuple(_campaign))
  )

  return campaignCreatedEvent
}

export function createCampaignDetailsUpdatedEvent(
  _newCampaign: ethereum.Tuple
): CampaignDetailsUpdated {
  let campaignDetailsUpdatedEvent = changetype<CampaignDetailsUpdated>(
    newMockEvent()
  )

  campaignDetailsUpdatedEvent.parameters = new Array()

  campaignDetailsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newCampaign",
      ethereum.Value.fromTuple(_newCampaign)
    )
  )

  return campaignDetailsUpdatedEvent
}

export function createClaimBackInvestmentEvent(
  campaign_Id: BigInt,
  _progress: BigInt,
  _investment: BigInt,
  _kol: Address
): ClaimBackInvestment {
  let claimBackInvestmentEvent = changetype<ClaimBackInvestment>(newMockEvent())

  claimBackInvestmentEvent.parameters = new Array()

  claimBackInvestmentEvent.parameters.push(
    new ethereum.EventParam(
      "campaign_Id",
      ethereum.Value.fromUnsignedBigInt(campaign_Id)
    )
  )
  claimBackInvestmentEvent.parameters.push(
    new ethereum.EventParam(
      "_progress",
      ethereum.Value.fromUnsignedBigInt(_progress)
    )
  )
  claimBackInvestmentEvent.parameters.push(
    new ethereum.EventParam(
      "_investment",
      ethereum.Value.fromUnsignedBigInt(_investment)
    )
  )
  claimBackInvestmentEvent.parameters.push(
    new ethereum.EventParam("_kol", ethereum.Value.fromAddress(_kol))
  )

  return claimBackInvestmentEvent
}

export function createClaimKolInvestmentEvent(
  campaign_Id: BigInt,
  _investment: BigInt,
  _kol: Address
): ClaimKolInvestment {
  let claimKolInvestmentEvent = changetype<ClaimKolInvestment>(newMockEvent())

  claimKolInvestmentEvent.parameters = new Array()

  claimKolInvestmentEvent.parameters.push(
    new ethereum.EventParam(
      "campaign_Id",
      ethereum.Value.fromUnsignedBigInt(campaign_Id)
    )
  )
  claimKolInvestmentEvent.parameters.push(
    new ethereum.EventParam(
      "_investment",
      ethereum.Value.fromUnsignedBigInt(_investment)
    )
  )
  claimKolInvestmentEvent.parameters.push(
    new ethereum.EventParam("_kol", ethereum.Value.fromAddress(_kol))
  )

  return claimKolInvestmentEvent
}

export function createClaimPreSaleTokensEvent(
  campaign_Id: BigInt,
  _amount: BigInt,
  _preSaleToken: Address,
  _kol: Address,
  progress: BigInt
): ClaimPreSaleTokens {
  let claimPreSaleTokensEvent = changetype<ClaimPreSaleTokens>(newMockEvent())

  claimPreSaleTokensEvent.parameters = new Array()

  claimPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "campaign_Id",
      ethereum.Value.fromUnsignedBigInt(campaign_Id)
    )
  )
  claimPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  claimPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "_preSaleToken",
      ethereum.Value.fromAddress(_preSaleToken)
    )
  )
  claimPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam("_kol", ethereum.Value.fromAddress(_kol))
  )
  claimPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "progress",
      ethereum.Value.fromUnsignedBigInt(progress)
    )
  )

  return claimPreSaleTokensEvent
}

export function createClaimPreSaleTokensBlackListedEvent(
  campaign_Id: BigInt,
  _amountPST: BigInt,
  _amountUSDT: BigInt,
  _preSaleToken: Address,
  _kol: Address
): ClaimPreSaleTokensBlackListed {
  let claimPreSaleTokensBlackListedEvent = changetype<
    ClaimPreSaleTokensBlackListed
  >(newMockEvent())

  claimPreSaleTokensBlackListedEvent.parameters = new Array()

  claimPreSaleTokensBlackListedEvent.parameters.push(
    new ethereum.EventParam(
      "campaign_Id",
      ethereum.Value.fromUnsignedBigInt(campaign_Id)
    )
  )
  claimPreSaleTokensBlackListedEvent.parameters.push(
    new ethereum.EventParam(
      "_amountPST",
      ethereum.Value.fromUnsignedBigInt(_amountPST)
    )
  )
  claimPreSaleTokensBlackListedEvent.parameters.push(
    new ethereum.EventParam(
      "_amountUSDT",
      ethereum.Value.fromUnsignedBigInt(_amountUSDT)
    )
  )
  claimPreSaleTokensBlackListedEvent.parameters.push(
    new ethereum.EventParam(
      "_preSaleToken",
      ethereum.Value.fromAddress(_preSaleToken)
    )
  )
  claimPreSaleTokensBlackListedEvent.parameters.push(
    new ethereum.EventParam("_kol", ethereum.Value.fromAddress(_kol))
  )

  return claimPreSaleTokensBlackListedEvent
}

export function createContractVariablesUpdatedEvent(
  _stakingPerct: i32,
  _penaltyPer: i32,
  _transactionPer: i32,
  _platformPer: i32,
  _time: BigInt,
  _updatedBy: Address
): ContractVariablesUpdated {
  let contractVariablesUpdatedEvent = changetype<ContractVariablesUpdated>(
    newMockEvent()
  )

  contractVariablesUpdatedEvent.parameters = new Array()

  contractVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_stakingPerct",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_stakingPerct))
    )
  )
  contractVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_penaltyPer",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_penaltyPer))
    )
  )
  contractVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_transactionPer",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_transactionPer))
    )
  )
  contractVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_platformPer",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_platformPer))
    )
  )
  contractVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam("_time", ethereum.Value.fromUnsignedBigInt(_time))
  )
  contractVariablesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_updatedBy",
      ethereum.Value.fromAddress(_updatedBy)
    )
  )

  return contractVariablesUpdatedEvent
}

export function createDepositPreSaleTokensEvent(
  campaign_Id: BigInt,
  _amount: BigInt,
  _cummulativeDeposit: BigInt,
  _token: Address,
  _depositer: Address
): DepositPreSaleTokens {
  let depositPreSaleTokensEvent = changetype<DepositPreSaleTokens>(
    newMockEvent()
  )

  depositPreSaleTokensEvent.parameters = new Array()

  depositPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "campaign_Id",
      ethereum.Value.fromUnsignedBigInt(campaign_Id)
    )
  )
  depositPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  depositPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "_cummulativeDeposit",
      ethereum.Value.fromUnsignedBigInt(_cummulativeDeposit)
    )
  )
  depositPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  depositPreSaleTokensEvent.parameters.push(
    new ethereum.EventParam(
      "_depositer",
      ethereum.Value.fromAddress(_depositer)
    )
  )

  return depositPreSaleTokensEvent
}

export function createInvestInCampaignEvent(
  campaign_Id: BigInt,
  _amount: BigInt,
  _investmentShare: BigInt,
  _kol: Address
): InvestInCampaign {
  let investInCampaignEvent = changetype<InvestInCampaign>(newMockEvent())

  investInCampaignEvent.parameters = new Array()

  investInCampaignEvent.parameters.push(
    new ethereum.EventParam(
      "campaign_Id",
      ethereum.Value.fromUnsignedBigInt(campaign_Id)
    )
  )
  investInCampaignEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  investInCampaignEvent.parameters.push(
    new ethereum.EventParam(
      "_investmentShare",
      ethereum.Value.fromUnsignedBigInt(_investmentShare)
    )
  )
  investInCampaignEvent.parameters.push(
    new ethereum.EventParam("_kol", ethereum.Value.fromAddress(_kol))
  )

  return investInCampaignEvent
}

export function createKOLAddedEvent(_kol: ethereum.Tuple): KOLAdded {
  let kolAddedEvent = changetype<KOLAdded>(newMockEvent())

  kolAddedEvent.parameters = new Array()

  kolAddedEvent.parameters.push(
    new ethereum.EventParam("_kol", ethereum.Value.fromTuple(_kol))
  )

  return kolAddedEvent
}

export function createSetMaxTGEAllowanceEvent(
  _tge: BigInt
): SetMaxTGEAllowance {
  let setMaxTgeAllowanceEvent = changetype<SetMaxTGEAllowance>(newMockEvent())

  setMaxTgeAllowanceEvent.parameters = new Array()

  setMaxTgeAllowanceEvent.parameters.push(
    new ethereum.EventParam("_tge", ethereum.Value.fromUnsignedBigInt(_tge))
  )

  return setMaxTgeAllowanceEvent
}

export function createSetPenaltyEvent(_penalty: BigInt): SetPenalty {
  let setPenaltyEvent = changetype<SetPenalty>(newMockEvent())

  setPenaltyEvent.parameters = new Array()

  setPenaltyEvent.parameters.push(
    new ethereum.EventParam(
      "_penalty",
      ethereum.Value.fromUnsignedBigInt(_penalty)
    )
  )

  return setPenaltyEvent
}

export function createTGEDepositedEvent(
  _campaignID: BigInt,
  _tgeAmount: BigInt,
  _tgeTime: BigInt,
  _stakingAmount: BigInt,
  _preSaleToken: Address,
  _depositedBy: Address,
  _cummulativeDeposit: BigInt
): TGEDeposited {
  let tgeDepositedEvent = changetype<TGEDeposited>(newMockEvent())

  tgeDepositedEvent.parameters = new Array()

  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignID",
      ethereum.Value.fromUnsignedBigInt(_campaignID)
    )
  )
  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_tgeAmount",
      ethereum.Value.fromUnsignedBigInt(_tgeAmount)
    )
  )
  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_tgeTime",
      ethereum.Value.fromUnsignedBigInt(_tgeTime)
    )
  )
  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_stakingAmount",
      ethereum.Value.fromUnsignedBigInt(_stakingAmount)
    )
  )
  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_preSaleToken",
      ethereum.Value.fromAddress(_preSaleToken)
    )
  )
  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_depositedBy",
      ethereum.Value.fromAddress(_depositedBy)
    )
  )
  tgeDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "_cummulativeDeposit",
      ethereum.Value.fromUnsignedBigInt(_cummulativeDeposit)
    )
  )

  return tgeDepositedEvent
}

export function createWithdrawPenaltyAndUpdateAddressEvent(
  isUpdateAdmin: boolean,
  _newAddress: Address,
  penaltyAmount: BigInt
): WithdrawPenaltyAndUpdateAddress {
  let withdrawPenaltyAndUpdateAddressEvent = changetype<
    WithdrawPenaltyAndUpdateAddress
  >(newMockEvent())

  withdrawPenaltyAndUpdateAddressEvent.parameters = new Array()

  withdrawPenaltyAndUpdateAddressEvent.parameters.push(
    new ethereum.EventParam(
      "isUpdateAdmin",
      ethereum.Value.fromBoolean(isUpdateAdmin)
    )
  )
  withdrawPenaltyAndUpdateAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_newAddress",
      ethereum.Value.fromAddress(_newAddress)
    )
  )
  withdrawPenaltyAndUpdateAddressEvent.parameters.push(
    new ethereum.EventParam(
      "penaltyAmount",
      ethereum.Value.fromUnsignedBigInt(penaltyAmount)
    )
  )

  return withdrawPenaltyAndUpdateAddressEvent
}

export function createWithdrawPresaleByCampaignOwnerEvent(
  owner: Address,
  shareOfKolsInTermsToken: BigInt,
  transferPresale: BigInt
): WithdrawPresaleByCampaignOwner {
  let withdrawPresaleByCampaignOwnerEvent = changetype<
    WithdrawPresaleByCampaignOwner
  >(newMockEvent())

  withdrawPresaleByCampaignOwnerEvent.parameters = new Array()

  withdrawPresaleByCampaignOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawPresaleByCampaignOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "shareOfKolsInTermsToken",
      ethereum.Value.fromUnsignedBigInt(shareOfKolsInTermsToken)
    )
  )
  withdrawPresaleByCampaignOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "transferPresale",
      ethereum.Value.fromUnsignedBigInt(transferPresale)
    )
  )

  return withdrawPresaleByCampaignOwnerEvent
}
