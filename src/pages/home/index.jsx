import Loader from "../../components/loader";
import Error from "../../components/error";
import useCoins from "../../hooks/useCoins";
import CoinCard from "../../components/home/coin-card";
import Infolist from "../../components/home/info-list";
import Searchbar from "../../components/home/searchbar";
import RefreshButton from "../../components/home/refresh-button";
import RefreshInfo from "../../components/home/refresh-info";

const Home = () => {
  const {
    loading,
    error,
    fetchCoins,
    coins,
    lastUpdated,
    refreshing,
    searchTerm,
    setSearchTerm,
    filtredCoins,
  } = useCoins();

  if (error) return <Error message={error} refetch={fetchCoins} />;
  console.log(loading, error, coins);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* başlık */}
        <div>
          {" "}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Kripto Para Piyasası
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            En popüler kripto para birimleri
          </p>
        </div>
        {/* FİLTRE */}
        <div className="flex items-center gap-5">
          <Searchbar setSearchTerm={setSearchTerm} />
          <RefreshButton refetch={fetchCoins} loading={refreshing} />
        </div>
      </div>
      {/* bilgiler */}
      <Infolist
        total={coins?.length}
        lastUpdated={lastUpdated.toLocaleTimeString()}
      />
      {/* listeleme */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
          {filtredCoins.map((coin, key) => (
            <CoinCard key={key} coin={coin} />
          ))}
        </div>
      )}

      {/* veri yenileniiyor */}
      <RefreshInfo refreshing={refreshing} />
    </div>
  );
};

export default Home;
