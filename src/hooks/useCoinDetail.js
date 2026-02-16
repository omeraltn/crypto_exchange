import { useEffect, useState } from "react";
import api from "../utils/api";

const useCoinDetail = (coinId) => {
  const id = coinId.id;
  //coin detay stateleri
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  //grafik ile alakalı stateler
  const [selectedPeriod, setSelectedPeriod] = useState(7);
  const [priceHistory, setPriceHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);

  //coin detaylarını çeken fonksiyon
  const getCoinsDetails = (isRefreshing = true) => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    api
      .get(`/coins/${id}`)
      .then((res) => {
        setCoin(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  //fiyat geçmişini çek
  const fetchPriceHistory = async () => {
    setHistoryLoading(true);
    const params = { vs_currency: "usd", days: String(selectedPeriod) };
    api
      .get(`/coins/${id}/market_chart`, { params })
      .then((res) => {
        setPriceHistory(res.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(setHistoryLoading(false));
  };

  //sayfa yüklenme anında verileri al
  useEffect(() => {
    getCoinsDetails();
    fetchPriceHistory();
  }, [id]);
  //ekrandaki verileri yenilemek için kullanılacak fonksiyon
  const refreshData = () => {
    getCoinsDetails();
    fetchPriceHistory();
  };

  //gün değeri değişince yeni fiyat geçmişini al
  useEffect(() => {
    if (coin) {
      refreshData();
    }
  }, [selectedPeriod]);

  //hook'un return ettiği verileri belirli
  return {
    coin,
    loading,
    error,
    refreshing,
    refetch: () => getCoinsDetails,
    refreshData,
    selectedPeriod,
    setSelectedPeriod,
    priceHistory,
    setPriceHistory,
    historyLoading,
    setHistoryLoading,
  };
};

export default useCoinDetail;
