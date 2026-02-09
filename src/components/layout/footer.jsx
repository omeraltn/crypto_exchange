const Footer = () => {
  return (
    <footer className="bg-white  dark:bg-gray-800  border-t  border-gray-200 mt-12 dark:border-gray-700">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-sm text-gray-600 dark:text-gray-400 ">
            <p>
              &copy; {new Date().getFullYear()} Crypto Tracker. Eğitim amaçlı
              proje
            </p>
          </div>
          <div className="text-sm text-gray-500  dark:text-gray-400 ">
            <span>
              API: CoinGecko <span> - </span>
            </span>
            <span>React + tailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
