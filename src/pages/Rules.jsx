import React from 'react'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Rules() {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const userData = sessionStorage.getItem("User");
    const user = userData ? JSON.parse(userData) : null;
    const navigate = useNavigate();
    
    useEffect(() => {
      // Function to check if the current time is 6 PM or later
      const checkTime = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
  
        if (currentHour >= 0) {
          setIsButtonEnabled(true);
        }
      };
  
      checkTime();
  
      const interval = setInterval(checkTime, 60000);

      return () => clearInterval(interval);
    }, []);
  
    const handleStart = ()=>{
      if(!isButtonEnabled){
        toast.error('Game has not started yet')
      }else{
        if(user.round >= 10){
            navigate("/Result");
        }else{
          navigate( `/rounds/${user.round}`);
        }
      }
    }
  return (
    <div className="min-h-screen bg-radial-topbottom-corners sm:px-6 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className=" w-full md:h-28 flex flex-row items-center px-4">
          <Image
            src={"/Finance Logo.png"}
            width={100}
            height={100}
            className="md:w-24 md:h-24 w-16 h-16"
            alt="Ima"
          />
          <h4 className="font-playflair sm:text-7xl text-5xl tablet:text-4xl sm_mobile:text-3xl bg-gradient-to-r from-[#160f4a] via-[#04942C] to-[#160f4a] bg-clip-text text-transparent text-center flex-1">
            Era Of Estates
          </h4>
          <Image
            src={"/SAC Logo.png"}
            width={100}
            height={100}
            className="md:w-20 md:h-20 ml-auto w-16 h-16 tablet:w-12 tablet:h-12 sm_mobile:w-12 sm_mobile:h-12"
            alt="image"
          />
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-accent to-primary">
          .
        </div>
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#04942C]">
            Game Overview
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Initial Points:</strong> Each team begins with 10,000
              points.
            </li>
            <li>
              <strong>Team Composition:</strong> A maximum of 4 participants per
              team.
            </li>
            <li>
              <strong>Commodities:</strong> The simulation includes 11
              commodities: Crude Oil, Gold, Copper, Natural Gas, Iron Ore,
              Wheat, Cotton, Rubber, Steel, Corn, Urea.
            </li>
            <li>
              <strong>Rounds:</strong> The game consists of multiple rounds,
              each representing significant commodity price changes.
            </li>
            <li>
              <strong>Platform:</strong> All transactions are conducted on the
              Finance Club website.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#04942C]">
            Gameplay Rules
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Starting Portfolio:</strong> Each team starts with 10,000
              points to buy and trade commodities.
            </li>
            <li>
              <strong>Buying and Selling Window:</strong> A fixed time window is
              provided for trading each round.
            </li>
            <li>
              <strong>Price Fluctuations:</strong> Percentage changes are shown
              on a central screen after each round.
            </li>
            <li>
              <strong>Net Worth Calculation:</strong> Teams’ net worth updates
              based on points and commodity values.
            </li>
            <li>
              <strong>Portfolio Updates:</strong> Portfolios update
              automatically after each round.
            </li>
            <li>
              <strong>Selling Phase:</strong> Selling of commodities is allowed
              after the first round.
            </li>
            <li>
              <strong>End of Game:</strong> The team with the highest net worth
              wins.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#04942C]">
            Additional Rules
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Trading Freeze:</strong> No changes allowed after the
              trading window closes.
            </li>
            <li>
              <strong>Information Disclosure:</strong> Each round’s event is
              briefly described.
            </li>
            <li>
              <strong>Team Strategy Discussions:</strong> Teams may discuss
              strategies within their team area.
            </li>
            <li>
              <strong>Cheating and Fair Play:</strong> External information use
              is prohibited.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#04942C]">
            Example Round Flow
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Team starts with 10,000 points.</li>
            <li>
              During the trading period, buys 2,000 points of crude oil and
              3,000 points of gold.
            </li>
            <li>
              Price fluctuation announced: crude oil up by 20%, gold down by
              10%.
            </li>
            <li>
              Portfolio updates: Crude Oil: 2,400 points, Gold: 2,700 points,
              Remaining: 5,000 points.
              <br /> Net Worth: 10,100 points.
            </li>
          </ol>
        </section>
        <button
          className={`text-2xl font-bold text-white ${
            isButtonEnabled ? "hover:text-primary" : "text-gray-500"
          } w-24 h-max p-1 transition-all duration-200 rounded-lg ${
            isButtonEnabled ? "bg-accent hover:scale-105" : "bg-gray-400"
          }`}
          disabled={!isButtonEnabled}
          onClick={()=>handleStart()}
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default Rules