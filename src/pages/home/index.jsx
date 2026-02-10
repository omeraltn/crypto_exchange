import Loader from "../../components/loader";
import Error from "../../components/error";
import useCoins from "../../hooks/useCoins";
import CoinCard from "../../components/home/coin-card";

const Home = () => {
  const { loading, error, fetchCoins, coins } = useCoins();

  if (error) return <Error message={error} refetch={fetchCoins} />;
  console.log(loading, error, coins);
  return (
    <div>
      {/* başlık */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Kripto Para Piyasası
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          En popüler kripto para birimleri
        </p>
        <div></div>
      </div>
      {/* listeleme */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
          {coins.map((coin, key) => (
            <CoinCard key={key} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
