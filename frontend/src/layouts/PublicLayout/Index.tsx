import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";
import "../../style/layout/public.css";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
