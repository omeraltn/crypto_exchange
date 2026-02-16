import { Link } from "react-router-dom";
import {
  formatBigNumber,
  formatPercanTage,
  formatPrice,
} from "../../utils/helpers";
import { TrendingDown, TrendingUp } from "lucide-react";

const CoinCard = ({ coin }) => {
  //fiyat dğişikliği pozitif ?
  const isPositive = coin.price_change_percentage_24h > 0;
  const color = isPositive ? "text-green-500" : "text-red-500";
  const icon = isPositive ? (
    <TrendingUp className="size-4" />
  ) : (
    <TrendingDown className="size-4" />
  );
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
      <div className="space-y-3">
        <div className="flex-between">
          <span className="card-label">Fiyat</span>
          <p className="card-value text-xl font-bold ">
            {formatPrice(coin.current_price)}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex-between">
          <span className="card-label">24s Değişim</span>
          <p
            className={`card-value flex items-center gap-1 font-semibold  text-sm ${color}`}
          >
            {icon}
            {formatPercanTage(coin.price_change_percentage_24h)}
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex-between">
          <span className="card-label">Market Hacmi</span>
          <p className="card-value  ">{formatBigNumber(coin.market_cap)}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex-between">
          <span className="card-label">24s Hacim</span>
          <p className="card-value  ">{formatBigNumber(coin.total_volume)}</p>
        </div>
      </div>
      {/* alt kısım */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex-between text-gray-500 dark:text-gray-400">
        <span>#{coin.market_cap_rank}</span>
        <span>
          {new Date(coin.last_updated).toLocaleDateString("tr", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </Link>
  );
};

export default CoinCard;
