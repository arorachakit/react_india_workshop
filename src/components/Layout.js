// import Head from "../components/Head";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    {/* <Head /> */}
    <Navigation
    />
    {children}
    <Footer />
  </div>
);

export default Layout;