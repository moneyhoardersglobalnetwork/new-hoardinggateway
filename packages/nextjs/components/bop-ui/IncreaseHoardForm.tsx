import { useEffect, useState } from "react";
import { formatEther } from "ethers";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const IncreaseHoardForm = () => {
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

  const { data: Balance } = useScaffoldContractRead({
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
          className="rounded-md p-2 bg-accent bg-opacity-80 text-secondary-content font-bold focus:p-3 duration-300 ease-in-out"
        />
      </div>
      <button
        onClick={writeAsync}
        className=" btn btn-primary bg-accent shadow-lg w-full hover:bg-accent-focus hover:scale-[1.02] bg-opacity-80 "
      >
        Hoard
      </button>
    </div>
  );
};

export default IncreaseHoardForm;

