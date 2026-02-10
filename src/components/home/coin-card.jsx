import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  console.log(coin);
  return (
    <Link
      to={`/coin/${coin.id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 cursor-pointer hover:scale-105 transform transition duration-500"
    >
      {/* üst kısım  */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={coin.image}
              alt={coin.name}
              className="size-12 rounded-full"
            />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs size-6 grid place-items-center font-bold rounded-full">
              {coin.market_cap_rank}
            </span>
          </div>
          <div className="">
            <h5 className="font-bold text-lg text-gray-900 dark:text-white">
              {coin.symbol}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-40">
              {coin.name}
            </p>
          </div>
        </div>
      </div>
      {/* orta kısım */}
      <div className=""></div>
      {/* alt kısım */}
      <div className=""></div>
    </Link>
  );
};

export default CoinCard;
