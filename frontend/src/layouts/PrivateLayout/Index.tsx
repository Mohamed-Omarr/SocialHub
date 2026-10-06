import { Outlet } from "react-router";
import "../../style/layout/private.css";

export default function PrivateLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
