import { Moon, Star, Sun, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
import { useContext } from "react";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-gray-800 dark:border-b-gray-700 shadow-sm border-b border-gray-200">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* logo */}
          <Link to="/" className=" flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <TrendingUp className="text-gray-100" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white ">
                Udemig Tracker
              </h1>
              <p className="text-xs text-gray-500 capitalize dark:text-gray-400">
                Kripto para takip sistemi
              </p>
            </div>
          </Link>
          {/* icon */}
          <div className="flex items-center gap-4">
            {/* Favori */}
            <button className="flex items-center gap-2 text-gray-600  dark:text-gray-300">
              <Star className="size-5" />
              <span className="text-sm">3</span>
            </button>
            {/* tema butonu */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {isDarkTheme ? (
                <Moon className="size-5 text-gray-400" />
              ) : (
                <Sun className="size-5 text-yellow-500" />
              )}
            </button>
            {/* canlı */}
            <div className="flex items-center gap-2">
              <div className="size-2.5 bg-red-700 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500  dark:text-gray-400">
                Canlı
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
