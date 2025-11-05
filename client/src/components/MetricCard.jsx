const MetricCard = ({ label, value , children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 border border-white/20 shadow-xl flex-1 text-center">
      <div className="text-sm text-purple-200 mb-1">{label}</div>
      <div className="text-3xl font-bold">{value}</div>
      {children}
    </div>
  );
};

export default MetricCard;
