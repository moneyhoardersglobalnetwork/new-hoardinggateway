/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const Hoard = () => {
  const [visible, setVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_amount, setAmount] = useState("");

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "BopHoardingContract",
    functionName: "Hoard",
    args: [_amount],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div className=" p-5 rounded-lg shadow-lg">
    

    <div className="flex flex-col">
      <label htmlFor="amount" className="font-bold text-content">
        Amount BOP
      </label>
      <input
        max={1000000}
        value={_amount}
        onChange={e => setAmount(e.target.value)}
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
                  className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                  onClick={() => writeAsync()}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      Hoard <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
  </div>

    
  );
};
