import React from 'react';
import MetricCard from './MetricCard';
import TipForm from "./TipForm";
import RecentTips from "./RecentTips";

const Intro = () => {
  return (
<div>
    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">

          <div className="inline-block mb-6 animate-pulse">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20 shadow-lg">
              <span className="text-sm">🚀 Powered by Web3</span>
            </div>
          </div>

          <h1 className="mb-6 max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Support Creators with
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mt-2">
              Decentralized Tips
            </span>
          </h1>

          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
            Send ETH tips with personalized messages. Secure, transparent, and built on smart contracts.
          </p>

          {/* --- METRICS USING MetricCard COMPONENT --- */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md mx-auto">
            <MetricCard label="Total Tips" value="0.17 ETH" />
            <MetricCard label="Total Supporters" value="3" />
          </div>

        </div>
      </div>

      {/* floating glow blobs */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
      

    </div>
    {/* Intro Section with TipForm and RecentTips */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
                <TipForm />
            </div>
            <div className="flex justify-center">
                <RecentTips />
            </div>
        </div>
    </div>
</div>

    
  );
};

export default Intro;
