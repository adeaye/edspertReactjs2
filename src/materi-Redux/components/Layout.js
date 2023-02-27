import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ height: "300px" }}>
        <h1>Halo Aku adalah layout</h1>
        <Button onClick={() => navigate("/")}>Product list</Button>{" "}
        <Button onClick={() => navigate("/detail")}>Detail</Button>{" "}
        <Button onClick={() => navigate("/checkout")}>Checkout</Button>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
