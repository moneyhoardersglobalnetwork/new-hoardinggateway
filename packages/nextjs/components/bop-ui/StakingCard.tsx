import { useState } from "react";
import ClaimingForm from "./ClaimingForm";
import StakingForm from "./StakingForm";
import IncreaseHoardForm from "./IncreaseHoardForm";

const StakingCard: React.FC = () => {
  const [hoard, setHoard] = useState(true);
  const [increasehoard, setIncreaseHoard] = useState(true);

  return (
    <div className="flex bg-[url('/assets/background.jpeg')] relative pb-10">
    <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20 items-center">
    <div className="justify-center">
    <div className=" mt-10  rounded-xl shadow-lg w-1/4   hover:blur-none duration-300 min-w-[500px] staking bg-base-300">
      <div className="flex justify-between">
        <h1
          className={`text-2xl font-bold w-1/2 flex justify-center p-5 text-white hover:cursor-pointer hover:text-zinc-200 duration-300 rounded-tl-xl border-2 border-black ${
            hoard ? " text-content bg-[url('/assets/background.jpeg')] " : "bg-[url('/assets/background.jpeg')]"
          }`}
          onClick={() => setHoard(true)}
        >
          HOARD
        </h1>
        <h1
          className={`text-2xl font-bold w-1/2 flex justify-center p-5 text-white hover:cursor-pointer hover:text-zinc-200 duration-300 rounded-tr-xl border-2 border-black ${
            !hoard ? "bg-[url('/assets/background.jpeg')] text-content" : "bg-primary"
          }`}
          onClick={() => setHoard(false)}
        >
          Claim Rewards
        </h1>
      </div>
      {hoard ? <StakingForm /> : <ClaimingForm /> }
    </div>
    </div>
    </div>
    </div>
  );
};

export default StakingCard;
