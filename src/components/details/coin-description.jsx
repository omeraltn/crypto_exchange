const CoinDescription = ({ description }) => {
  return (
    <div className="detail-box whitespace-pre-wrap dark:text-gray-300 text-gray-600">
      {description?.en ? description.en : "Açıklama bulunamadı"}
    </div>
  );
};

export default CoinDescription;
