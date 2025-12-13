import React,{useEffect, useState} from "react";
import { ethers } from "ethers";
import TipJarArtifact from "../../../artifacts/contracts/TipJar.sol/TipJar.json";


const TipForm = ({ accounts, contract }) => {
  const [ amount, setAmount ] = useState("");
  const [ message, setMessage ] = useState("");
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const sendTip = async (e) => {
    e.preventDefault();    
    if(!amount) return;    
    if(!window.ethereum){
      alert("MetaMask Not Found");
      return;
    }

    try{      
      console.log("Sending transaction...");

      const amountInWei = ethers.parseEther(amount);
      const tx = await contract.sendTip(message || "No Message", amountInWei, {value: amountInWei});
      
      console.log("Mining...");
      await tx.wait();

      console.log("Tip sent successfully!", tx);
      alert("Tip sent successfully!");

      setAmount("");
      setMessage("");

    }catch(error){
      console.error("Error sending tip:", error);
      alert("Failed to send tip. See console for details.");
    }

  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border-2 shadow-lg p-6 space-y-6">
      <div>
        <h4 className="text-2xl flex items-center gap-2">💸 Send a Tip</h4>
        <p className="text-purple-400 text-sm">Support with ETH and leave a message</p>
      </div>

      <form className="space-y-5">
        {/* Amount input */}
        <div className="space-y-3">
          <label htmlFor="amount" className="text-sm font-medium">Amount (ETH)</label>
          <input
            type="number"
            id="amount"
            step="0.01"
            min="0.001"
            placeholder="0.05"            
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 h-12 text-lg outline-none"
          />

          <div className="flex gap-2 flex-wrap">
            {["0.01", "0.05", "0.1", "0.5"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(val)}
                className="px-3 py-1 border rounded-md hover:bg-purple-50 hover:border-purple-300 transition"
              >
                {val} ETH
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <label htmlFor="message" className="text-sm font-medium">Message (Optional)</label>
          <textarea
            id="message"
            rows="4"            
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            placeholder="Leave a nice message..."
            className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 outline-none resize-none"
          ></textarea>
        </div>

        {/* Send */}
        <button
          onClick={sendTip}
          className="w-full h-12 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition text-white font-medium shadow-lg flex justify-center items-center gap-2"          
        >
          <span>Send Tip</span>
        </button>

        {/* Notice */}
        <div className="text-center p-3 bg-amber-50 border border-amber-200 rounded-lg">
          {<p className="text-sm text-amber-700">Connect your wallet to send tips</p>}
        </div>
      </form>
    </div>
  );
};

export default TipForm;
