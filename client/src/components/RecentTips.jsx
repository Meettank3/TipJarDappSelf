import TipItem from "./TipItem";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const RecentTips = ({ contract }) => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTips = async () => {
    if(!contract) return;

    try{
      setLoading(true);
      const data  = await contract.getAllTips();
      
      const formattedTips = data.map((tips)=> ({
        from: tips.from,
        amount: ethers.formatEther(tips.amount),
        message: tips.message,
      })).reverse(); // Show latest tips first

      setTips(formattedTips);

    }catch(e){
      console.error("Error fetching tips:", e);
      //alert("Failed to fetch recent tips. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(contract){
      fetchTips();
    }
  }, [contract]);

  if(!contract) return;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 shadow-lg h-full p-6 flex flex-col">
      <h4 className="text-2xl flex items-center justify-between gap-2">💝 Recent Support
        <span className="text-purple-400 text-sm mb-4">{tips.length} tips received</span>
          <button 
            // FIX 2: Pass the function reference, don't call it immediately!
            onClick={fetchTips} 
            className="text-xs font-bold text-purple-400 border border-purple-400/30 bg-purple-500/10 px-3 py-1 rounded hover:bg-purple-500/20 hover:text-purple-300 transition">
            Refresh ↻
        </button>
      </h4>

      {loading && <p className="text-gray-400 animate-pulse">Loading recent tips...</p>}

      { !loading && tips.length === 0 && (
        <div className="p-4 bg-white/5 rounded-lg text-center text-gray-400">
          No tips yet. Be the first to support! 🚀
        </div>
      )}

      <div className="space-y-3">
        {
          tips.map((tip,index) => (
            <div key={index} 
            className="p-4 bg-white/5 rounded-lg">
              < TipItem 
                id={tips.length - index} 
                address={tip.from.slice(0, 6) + "..." + tip.from.slice(-4)}
                amount={tip.amount}
                message={tip.message}
              />
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default RecentTips;
