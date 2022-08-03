import { BigInt } from "@graphprotocol/graph-ts"
import {
  protoKol2,
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
  TGEDeposited
} from "../generated/protoKol2/protoKol2"
import { ExampleEntity } from "../generated/schema"

export function handleBlackListedKol(event: BlackListedKol): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.Kol = event.params.Kol
  entity.campaignId = event.params.campaignId

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._penalty_per(...)
  // - contract._platformPer(...)
  // - contract._transactionPer(...)
  // - contract.admin(...)
  // - contract.blackListedKOL(...)
  // - contract.campaigns(...)
  // - contract.createCampaign(...)
  // - contract.investedCampaignDetails(...)
  // - contract.kolInvestDetails(...)
  // - contract.penaltyAmount(...)
  // - contract.retriveCampaign(...)
  // - contract.retriveKOL(...)
  // - contract.stakingPercentage(...)
}

export function handleCampaignCreated(event: CampaignCreated): void {}

export function handleCampaignDetailsUpdated(
  event: CampaignDetailsUpdated
): void {}

export function handleClaimBackInvestment(event: ClaimBackInvestment): void {}

export function handleClaimKolInvestment(event: ClaimKolInvestment): void {}

export function handleClaimPreSaleTokens(event: ClaimPreSaleTokens): void {}

export function handleClaimPreSaleTokensBlackListed(
  event: ClaimPreSaleTokensBlackListed
): void {}

export function handleContractVariablesUpdated(
  event: ContractVariablesUpdated
): void {}

export function handleDepositPreSaleTokens(event: DepositPreSaleTokens): void {}

export function handleInvestInCampaign(event: InvestInCampaign): void {}

export function handleKOLAdded(event: KOLAdded): void {}

export function handleSetMaxTGEAllowance(event: SetMaxTGEAllowance): void {}

export function handleSetPenalty(event: SetPenalty): void {}

export function handleTGEDeposited(event: TGEDeposited): void {}
