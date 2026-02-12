import { useState } from "react";

const useCoinDetail = (coinId) => {
  //coin detay stateleri
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  //coin detaylarını çeken fonksiyon

  //sayfa yüklenme anında verileri al

  //hook'un return ettiği verileri belirli
  return { coin, loading, error, refreshing };
};

export default useCoinDetail;
