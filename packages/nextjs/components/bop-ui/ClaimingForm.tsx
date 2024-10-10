import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const ClaimingForm: React.FC = () => {
  const { address } = useAccount();
  const [stakeShare, setStakeShare] = useState("0");

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "BopHoardingContract",
    functionName: "ClaimReward",
  });

  const { data: calculateReward } = useScaffoldContractRead({
    contractName: "BopHoardingContract",
    functionName: "calculateReward",
    args: [address],
  });

  const { data: hoardingBalance } = useScaffoldContractRead({
    contractName: "BopHoardingContract",
    functionName: "Check_Bop_Hoarded_Balance",
    args: [address],
  });


  return (
    <div className=" p-5 rounded-lg shadow-lg">
      <div className="flex flex-col mb-5 p-5 rounded-lg text-zinc-200 items-center font-bold shadow-lg justify-center bg-[url('/assets/background.jpeg')] bg-opacity-80">
        <h2>Claimable BOP: {parseFloat(formatEther(calculateReward || "0")).toFixed(4)}</h2>
        <h2>Hoarding Share: {parseFloat(formatEther(hoardingBalance || "0")).toFixed(2)}BOP</h2>
      </div>
      <button
        onClick={writeAsync}
        className=" btn btn-primary bg-black shadow-lg w-full hover:bg-[url('/assets/background.jpeg')] hover:scale-[1.02] bg-opacity-100 "
      >
        Claim
      </button>
    </div>
  );
};

export default ClaimingForm;
