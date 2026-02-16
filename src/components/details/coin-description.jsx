import React from "react";

const CoinDescription = ({ description }) => {
  console.log(description);
  return (
    <div className="detail-box whitespace-pre-wrap dark:text-gray-300 text-gray-600">
      {description ? description : "Açıklama bulunamadı"}
    </div>
  );
};

export default React.memo(CoinDescription);
