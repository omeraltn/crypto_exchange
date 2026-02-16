import { RefreshCcw, TrendingUp } from "lucide-react";

const Infolist = ({ total, lastUpdated }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      <div className="card">
        <div className="">
          <p className="card-label">Toplam Coin</p>
          <p className="card-value text-2xl  font-bold">{total}</p>
        </div>
        <TrendingUp className="size-8 text-blue-500" />
      </div>
      <div className="card">
        <div className="">
          <p className="card-label">Son Güncelleme</p>
          <p className="card-value text-lg  font-bold">{lastUpdated}</p>
        </div>
        <RefreshCcw className="size-8 text-blue-500" />
      </div>
      <div className="card">
        <div>
          <p className="card-label">Durum</p>
          <div className="card-value text-lg font-bold flex items-center gap-2">
            <div className="flex justify-center items-center gap-1">
              <p className="size-2.5 bg-red-700 rounded-full animate-pulse" />
              <span>Canlı</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infolist;
