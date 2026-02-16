import { useParams } from "react-router-dom";
import useCoinDetail from "../../hooks/useCoinDetail";
import Loader from "../../components/loader";
import Error from "../../components/error";
import CoinHeader from "../../components/details/coin-header";
import CoinPrice from "../../components/details/coin-price";
import { isValidElement } from "react";
import CoinCart from "../../components/details/coin-chart";
import CoinStats from "../../components/details/coin-stats";
import CoinDescription from "../../components/details/coin-description";

const Detail = () => {
  const id = useParams();

  const {
    loading,
    error,
    coin,
    refreshing,
    refetch,
    refreshData,
    selectedPeriod,
    setSelectedPeriod,
    priceHistory,
    setPriceHistory,
    historyLoading,
    setHistoryLoading,
  } = useCoinDetail(id);

  if (loading) return <Loader />;
  // if (error) return <Error message={error.message} refetch={refetch} />;

  return (
    <div className="space-y-6">
      <CoinHeader
        coin={coin}
        refreshData={refreshData}
        refreshing={refreshing}
      />
      <CoinPrice coin={coin} />
      <CoinCart
        symbol={coin.symbol}
        selectedPeriod={selectedPeriod}
        priceHistory={priceHistory}
        historyLoading={historyLoading}
        setSelectedPeriod={setSelectedPeriod}
      />
      <CoinStats coin={coin} />
      <CoinDescription description={coin.description.en} />
    </div>
  );
};

export default Detail;
