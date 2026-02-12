import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../utils/api";

// ! custom hook

//reactta tekrar eden state i veya kodu. componentlardan alıp yeniden kullanılabilir hale getirdiğimiz fonksiyondur.
//hooklar her zaman use ile başlar ve data  / fonksiyon  return eder
const useCoins = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //apidan alınan veri
  const fetchCoins = useCallback((isRefreshing = true) => {
    isRefreshing ? setRefreshing(true) : setLoading(true);
    setLoading(true);
    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => {
        setCoins(res.data);
        setError(null);
        setLastUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

  //hook çağırınca api isteğini atr
  useEffect(() => {
    fetchCoins(false);
  }, []);

  //otomatik yenileme
  useEffect(() => {
    //her 30 saniye bir apiden güncel veri al
    const id = setInterval(() => fetchCoins(true), 30000);

    //performans kaybını önlemek için intervalı durdurmam lazım
    return () => clearInterval(id);
  }, []);

  //aratılan terim veya coinler değişirse filtreleme yap

  const filtredCoins = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(term) || coin.symbol.includes(term),
    );
  }, [coins, searchTerm]);

  // hookun döndüreceği verileri belirlemem lazım
  return {
    loading,
    error,
    fetchCoins,
    coins,
    lastUpdated,
    searchTerm,
    setSearchTerm,
    refreshing,
    filtredCoins,
  };
};

export default useCoins;
