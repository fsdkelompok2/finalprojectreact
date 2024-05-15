import { MobileMenu } from "./Navbar/MobileMenu";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        {children}
        <Footer />
      </div>
      <MobileMenu items={["Shoes", "Clothing"]} />
    </div>
  );
};
