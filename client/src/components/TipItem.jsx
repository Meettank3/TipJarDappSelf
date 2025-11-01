const TipItem = ({ id, address, amount, message }) => {
  return (
    <div className="p-4 border-2 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-md hover:border-purple-200 transition-all">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-sm">
            {id}
          </div>
          <code className="text-sm bg-white px-2 py-1 rounded border">{address}</code>
        </div>

        <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md shadow-sm">
          {amount}
        </span>
      </div>

      <p className="text-sm text-gray-700 italic mt-2 bg-white/60 p-2 rounded">
        "{message}"
      </p>
    </div>
  );
};

export default TipItem;
