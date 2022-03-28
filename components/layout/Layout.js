import Navigation from "./Navigation";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.asPath === "/links" ? (
        [children]
      ) : (
        <>
          <Navigation />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
