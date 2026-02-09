import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white   flex flex-col">
      <Header />
      {/* child route un ekrana geleceği konumu belirlendi */}
      <main className="container flex-1 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
