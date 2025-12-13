import TipItem from "./TipItem";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const RecentTips = ({ contract }) => {
  const tips = [
    { id: 74, address: "0x742d...bEb1", amount: "0.05 ETH", message: "Great work on this project! 🎉" },
    { id: 86, address: "0x8626...1199", amount: "0.1 ETH", message: "Keep building awesome stuff!" },
    { id: "DD", address: "0xdD2F...44C0", amount: "0.02 ETH", message: "Love the concept 💡" },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 shadow-lg h-full p-6 flex flex-col">
      <h4 className="text-2xl flex items-center justify-between gap-2">💝 Recent Tips</h4>
      <p className="text-purple-400 text-sm mb-4">{tips.length} tips received</p>

      <div className="overflow-y-auto h-[450px] pr-2 space-y-3">
        {tips.map((t, i) => (
          <TipItem key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

export default RecentTips;
