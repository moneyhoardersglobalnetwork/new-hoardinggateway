import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const StakingForm = () => {
  const { address } = useAccount();

  const [_amount, setAmount] = useState<any>("0");
  

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "BopHoardingContract",
    functionName: "Hoard",
    args: [_amount.toString()],
  });

  const { data: totalHoarded } = useScaffoldContractRead({
    contractName: "BopHoardingContract",
    functionName: "totalHoarded",
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

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <div className=" p-5 rounded-lg shadow-lg">
    

      <div className="flex flex-col justify-center">
        <label htmlFor="amount" className="font-bold text-content">
          Amount BOP
        </label>
        <input
          max={1000000}
          value={_amount}
          onChange={handleAmount}
          type="text"
          inputMode="decimal"
          name="amount"
          placeholder="0.0"
          pattern="^[0-9]*[.]?[0-9]*$"
          minLength={1}
          className="rounded-md p-2 bg-[url('/assets/background.jpeg')] bg-opacity-80 text-white font-bold focus:p-3 duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col mb-5 p-5 rounded-lg text-zinc-200 items-center font-bold shadow-lg justify-center bg-[url('/assets/background.jpeg')] bg-opacity-80">
        <h2>Claimable BOP: {parseFloat(formatEther(calculateReward || "0")).toFixed(4)}</h2>
        <h2>Hoarding Share: {parseFloat(formatEther(hoardingBalance || "0")).toFixed(2)}BOP</h2>
      </div>
      <button
        onClick={writeAsync}
        className=" btn btn-primary bg-black shadow-lg w-full hover:bg-[url('/assets/background.jpeg')] hover:scale-[1.02] bg-opacity-100"
      >
        Hoard
      </button>
    </div>
  );
};

export default StakingForm;

