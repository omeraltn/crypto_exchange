import { useEffect, useState } from "react";
import api from "../utils/api";

// ! custom hook

//reactta tekrar eden state i veya kodu. componentlardan alıp yeniden kullanılabilir hale getirdiğimiz fonksiyondur.
//hooklar her zaman use ile başlar ve data  / fonksiyon  return eder
const useCoins = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);

  const fetchCoins = () => {
    setLoading(true);
    api
      .get("/coins/markets?vs_currency=usd")
      .then((res) => {
        setCoins(res.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  // hookun döndüreceği verileri belirlemem lazım
  return { loading, error, fetchCoins, coins };
};

export default useCoins;
