import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
// import "/react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-20">
        {children}
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
