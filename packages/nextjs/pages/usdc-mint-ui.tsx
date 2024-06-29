import { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { ApproveMhgd } from "~~/components/usdc-mint-ui/ApproveMhgd";
import { ApproveUsdc } from "~~/components/usdc-mint-ui/ApproveUsdc";
import { Mint } from "~~/components/usdc-mint-ui/Mint";
import { MintContractData } from "~~/components/usdc-mint-ui/MintContractData";
import { SwapMhgd } from "~~/components/usdc-mint-ui/SwapMhgd";
import { SwapUsdc } from "~~/components/usdc-mint-ui/SwapUsdc";

const USDCMINTUI: NextPage = () => {
  return (
    <>
      <MetaHeader title="MHGD MINT | A MHGN Hoarder Labs Project" description="Mint MHGD using USDC.">
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
      <div className="grid lg:grid-cols-1 items-center flex-grow" data-theme="exampleUi">
        <MintContractData />
        <ApproveUsdc />
        <ApproveMhgd />
        <Mint />
        <SwapUsdc />
        <SwapMhgd />
      </div>
    </>
  );
};

export default USDCMINTUI;
