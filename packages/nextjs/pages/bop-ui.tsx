import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { ApproveBop } from "~~/components/bop-ui/ApproveBop";
import { BopHoardingContractData } from "~~/components/bop-ui/BopHoardingContractData";
import { Claim } from "~~/components/bop-ui/Claim";
import { ContractData } from "~~/components/bop-ui/ContractData";
import { ContractInteraction } from "~~/components/bop-ui/ContractInteraction";
import { DonateBop } from "~~/components/bop-ui/DonateBop";
import { Hoard } from "~~/components/bop-ui/Hoard";
import { IncreaseHoard } from "~~/components/bop-ui/IncreaseHoard";
import StakingCard from "~~/components/bop-ui/StakingCard";
import { StakingForm } from "~~/components/bop-ui/StakingForm";
import { UnHoard } from "~~/components/bop-ui/UnHoard";

const BOPUI: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="Bop UI | MHGN Hoarding Gateway"
        description="Allows hoarders to interact with BOP token and Smart Contracts."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="grid lg:grid-block flex-grow" data-theme="exampleUi">
        <ContractData />
        <BopHoardingContractData />
        <ContractInteraction />
        <ApproveBop />
        <DonateBop />
        <StakingCard />
        <IncreaseHoard />
        <UnHoard />
        <Claim />
      </div>
    </>
  );
};

export default BOPUI;
