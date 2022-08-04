import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
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
  TGEDeposited,
} from "../generated/protoKol2/protoKol2";
import {
  Campaign,
  Kol,
  KolInvestmentTransaction,
  PlatformPercentages,
  User,
} from "../generated/schema";
export function handleBlackListedKol(event: BlackListedKol): void {
  let kol = Kol.load(event.params.Kol.toHex());

  if (kol) {
    kol.Blacklisted = true;

    const currentBlacklistedCampaigns = kol.BlacklistedCampaigns;
    if (currentBlacklistedCampaigns) {
      currentBlacklistedCampaigns.push(event.params.campaignId);
      kol.BlacklistedCampaigns = currentBlacklistedCampaigns;
    }
    kol.save();
  }
}

export function handleCampaignCreated(event: CampaignCreated): void {
  let platformPercentage = PlatformPercentages.load(BigInt.fromI32(1).toHex());
  if (!platformPercentage) {
    platformPercentage = new PlatformPercentages(BigInt.fromI32(1).toHex());
    const contract = protoKol2.bind(event.address);
    platformPercentage.PenaltyFee = BigInt.fromI32(contract._penalty_per());
    platformPercentage.save();
  }

  let campaign = Campaign.load(event.params._campaign.campaignNumber.toHex());
  if (!campaign) {
    campaign = new Campaign(event.params._campaign.campaignNumber.toHex());
    campaign.CampaignId = event.params._campaign.campaignNumber;

    campaign.InvestmentClaimed =
      event.params._campaign.campaignData.investmentClaimed;

    campaign.PreSaleTokenBalance = new BigInt(0);

    campaign.CreatedAt = event.block.timestamp;

    campaign.DepositedAmount = new BigInt(0);

    campaign.ClaimableInvestment = new BigInt(0);

    campaign.ClaimBackInvestment = false;

    campaign.PreSaleToken = event.params._campaign.campaignData.preSaleToken;

    campaign.CampaignOwner = event.params._campaign.campaignData.campaignOwner;

    campaign.SecondOwner = event.params._campaign.campaignData.secondOwner;

    campaign.RequiredInvestment =
      event.params._campaign.campaignData.requiredInvestment;

    campaign.MarketingBudget =
      event.params._campaign.campaignData.marketingBudget;

    campaign.StartTime = event.params._campaign.campaignData.startDate;

    campaign.EndTime = event.params._campaign.campaignData.endDate;

    campaign.RemainingInvestment =
      event.params._campaign.campaignData.remainingInvestment;

    campaign.NumberOfPostsReq =
      event.params._campaign.campaignData.numberOfPostsReq;

    campaign.StakingAmount = event.params._campaign.campaignData.stakingAmount;

    campaign.IsVestingInEnabled =
      event.params._campaign.vestingData.isVestingInEnabled;

    campaign.NumberOfvestings =
      event.params._campaign.vestingData.NumberOfvestings;

    campaign.InvestedAmount = new BigInt(0);

    campaign.VestingCycleDuration =
      event.params._campaign.vestingData.vestingCycleDuration;

    campaign.VestingAmtPerCycle =
      event.params._campaign.vestingData.vestingAmtPerCycle;

    campaign.IsTGE = event.params._campaign.tgeDetails.isTGE;

    campaign.TgePercentage = BigInt.fromI32(
      event.params._campaign.tgeDetails.tgePercentage
    );

    campaign.TgeTime = event.params._campaign.tgeDetails.tgeDate;

    campaign.TgeAmount = event.params._campaign.tgeDetails.tgeAmount;

    campaign.save();
  }

  let user = User.load(
    event.params._campaign.campaignData.campaignOwner.toHex()
  );
  if (!user) {
    user = new User(event.params._campaign.campaignData.campaignOwner.toHex());
    user.WalletAddress = event.params._campaign.campaignData.campaignOwner;
    user.Role = "project";
    user.save();
  }
}

export function handleCampaignDetailsUpdated(
  event: CampaignDetailsUpdated
): void {
  let campaign = Campaign.load(
    event.params._newCampaign.campaignNumber.toHex()
  );
  if (campaign) {
    campaign.CampaignId = event.params._newCampaign.campaignNumber;

    campaign.InvestmentClaimed =
      event.params._newCampaign.campaignData.investmentClaimed;

    campaign.ClaimableInvestment = new BigInt(0);

    campaign.PreSaleToken = event.params._newCampaign.campaignData.preSaleToken;

    campaign.CampaignOwner =
      event.params._newCampaign.campaignData.campaignOwner;

    campaign.SecondOwner = event.params._newCampaign.campaignData.secondOwner;

    campaign.RequiredInvestment =
      event.params._newCampaign.campaignData.requiredInvestment;

    campaign.MarketingBudget =
      event.params._newCampaign.campaignData.marketingBudget;

    campaign.StartTime = event.params._newCampaign.campaignData.startDate;

    campaign.EndTime = event.params._newCampaign.campaignData.endDate;

    campaign.RemainingInvestment =
      event.params._newCampaign.campaignData.remainingInvestment;

    campaign.NumberOfPostsReq =
      event.params._newCampaign.campaignData.numberOfPostsReq;

    campaign.StakingAmount =
      event.params._newCampaign.campaignData.stakingAmount;

    campaign.IsVestingInEnabled =
      event.params._newCampaign.vestingData.isVestingInEnabled;

    campaign.NumberOfvestings =
      event.params._newCampaign.vestingData.NumberOfvestings;

    campaign.VestingCycleDuration =
      event.params._newCampaign.vestingData.vestingCycleDuration;

    campaign.VestingAmtPerCycle =
      event.params._newCampaign.vestingData.vestingAmtPerCycle;

    campaign.IsTGE = event.params._newCampaign.tgeDetails.isTGE;

    campaign.TgePercentage = BigInt.fromI32(
      event.params._newCampaign.tgeDetails.tgePercentage
    );

    campaign.TgeTime = event.params._newCampaign.tgeDetails.tgeDate;

    campaign.TgeAmount = event.params._newCampaign.tgeDetails.tgeAmount;

    campaign.save();
  }
}

export function handleClaimBackInvestment(event: ClaimBackInvestment): void {
  let kolInvestment = KolInvestmentTransaction.load(
    event.params.campaign_Id.toString() + "-" + event.params._kol.toHex()
  );
  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (kolInvestment) {
    kolInvestment.ClaimedBackInvestment = true;
    kolInvestment.Amount = new BigInt(0);
    kolInvestment.lastClaimedProgress = event.params._progress;
    kolInvestment.InvestmentShare = new BigInt(0);
    kolInvestment.save();
  }
  if (campaign) {
    //   if (event.params._progress.gt(BigInt.fromI32(0))) {
    campaign.InvestedAmount = campaign.InvestedAmount.minus(
      event.params._investment
    );

    campaign.ClaimableInvestment = campaign.ClaimableInvestment.plus(
      event.params._investment
    );

    campaign.RemainingInvestment = campaign.RemainingInvestment.plus(
      event.params._investment
    );
    //   } else {
    //     const contract = protoKol2.bind(event.address);

    // campaign.InvestedAmount = campaign.InvestedAmount.minus(
    //   event.params._investment.plus(
    //     event.params._investment.times(
    //       BigInt.fromI32(contract._penalty_per()).div(new BigInt(10000))
    //     )
    //   )
    // );
    // campaign.RemainingInvestment = campaign.RemainingInvestment.plus(
    //   event.params._investment.times(
    //     BigInt.fromI32(contract._penalty_per()).div(new BigInt(10000))
    //   )
    // );

    // campaign.ClaimableInvestment = campaign.ClaimableInvestment.plus(
    //   event.params._investment.times(
    //     BigInt.fromI32(contract._penalty_per()).div(new BigInt(10000))
    //   )
    // );
    // }
    campaign.save();
  }
}

export function handleClaimKolInvestment(event: ClaimKolInvestment): void {
  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (campaign) {
    campaign.InvestmentClaimed = campaign.InvestmentClaimed.plus(
      event.params._investment
    );

    campaign.ClaimableInvestment = new BigInt(0);

    campaign.save();
  }
}

export function handleClaimPreSaleTokens(event: ClaimPreSaleTokens): void {
  let kolInvestment = KolInvestmentTransaction.load(
    event.params.campaign_Id.toString() + "-" + event.params._kol.toHex()
  );

  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (campaign) {
    campaign.PreSaleTokenBalance = campaign.PreSaleTokenBalance.minus(
      event.params._amount
    );
    campaign.save();
  }
  if (kolInvestment) {
    kolInvestment.ClaimedPresaleTokensAmount = kolInvestment.ClaimedPresaleTokensAmount.plus(
      event.params._amount
    );

    kolInvestment.lastClaimedProgress = event.params.progress;
    kolInvestment.save();
  }
}

export function handleClaimPreSaleTokensBlackListed(
  event: ClaimPreSaleTokensBlackListed
): void {}

export function handleContractVariablesUpdated(
  event: ContractVariablesUpdated
): void {}

export function handleDepositPreSaleTokens(event: DepositPreSaleTokens): void {
  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (!campaign) {
    campaign = new Campaign(event.params.campaign_Id.toHex());
  }

  campaign.PreSaleTokenBalance = campaign.PreSaleTokenBalance.plus(
    event.params._amount
  );
  campaign.DepositedAmount = campaign.DepositedAmount.plus(
    event.params._amount
  );

  campaign.save();
}

export function handleInvestInCampaign(event: InvestInCampaign): void {
  let kol = Kol.load(event.params._kol.toHex());

  if (!kol) {
    kol = new Kol(event.params._kol.toHex());
  }

  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (!campaign) {
    campaign = new Campaign(event.params.campaign_Id.toHex());
  }

  let kolInvestment = new KolInvestmentTransaction(
    event.params.campaign_Id.toString() + "-" + event.params._kol.toHex()
  );

  kolInvestment.CampaignId = campaign.id;

  kolInvestment.CampaignInvestedId = event.params.campaign_Id;

  kolInvestment.ClaimedBackInvestment = false;

  kolInvestment.ClaimedPresaleTokensAmount = new BigInt(0);

  kolInvestment.TransactionTime = event.block.timestamp;

  kolInvestment.KolAddress = event.params._kol;

  kolInvestment.lastClaimedProgress = new BigInt(0);

  kolInvestment.ProjectOwner = campaign.CampaignOwner;

  kol.TotalInvestedAmount = kol.TotalInvestedAmount.plus(event.params._amount);

  kolInvestment.InvestmentShare = event.params._investmentShare;

  kolInvestment.Amount = event.params._amount;

  campaign.Kols = kol.id;

  campaign.InvestedAmount = campaign.InvestedAmount.plus(event.params._amount);

  campaign.ClaimableInvestment = campaign.ClaimableInvestment.plus(
    event.params._amount
  );

  campaign.RemainingInvestment = campaign.RemainingInvestment.minus(
    event.params._amount
  );

  kolInvestment.Kols = kol.id;

  campaign.save();
  kol.save();
  kolInvestment.save();
}

export function handleKOLAdded(event: KOLAdded): void {
  let kol = Kol.load(event.params._kol.kolWallet.toHex());
  if (!kol) {
    kol = new Kol(event.params._kol.kolWallet.toHex());

    kol.KolId = event.params._kol.kolID;

    kol.KolName = event.params._kol.name;

    kol.KolWalletAddress = event.params._kol.kolWallet;

    kol.TotalInvestedAmount = new BigInt(0);

    kol.IpfsHash = event.params._kol.ipfsHash;

    kol.save();
  }
  let user = User.load(event.params._kol.kolWallet.toHex());
  if (!user) {
    user = new User(event.params._kol.kolWallet.toHex());
    user.WalletAddress = event.params._kol.kolWallet;
    user.Role = "kol";
    user.Name = event.params._kol.name;
    user.save();
  }
}

export function handleSetMaxTGEAllowance(event: SetMaxTGEAllowance): void {}

export function handleSetPenalty(event: SetPenalty): void {}

export function handleTGEDeposited(event: TGEDeposited): void {
  let campaign = Campaign.load(event.params._campaignID.toHex());
  if (campaign) {
    campaign.IsTGE = true;
    campaign.TgeAmount = event.params._tgeAmount;
    campaign.TgeTime = event.params._tgeTime;
    campaign.PreSaleTokenBalance = campaign.PreSaleTokenBalance.plus(
      event.params._tgeAmount
    );
    campaign.DepositedAmount = campaign.DepositedAmount.plus(
      event.params._tgeAmount
    );
    campaign.save();
  }
}
