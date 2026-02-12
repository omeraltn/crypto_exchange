import { RefreshCcw } from "lucide-react";
import React from "react";

const RefreshButton = ({ refetch, loading }) => {
  return (
    <button
      disabled={loading}
      onClick={refetch}
      className="p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      <RefreshCcw />
    </button>
  );
};

export default React.memo(RefreshButton);
