import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import Product from "../screen/Product";
import Cart from "../screen/Cart";
import Login from "../screen/Login";

const Main = styled.main`
  width: 100%;
  height: calc(100% - 45px);
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Main>
      <Routes>
        <Route index element={<Home navigation={navigation} />} />
        <Route path="/login" element={<Login navigation={navigation} />} />
        <Route path="/product/*" element={<Product navigation={navigation} />} />
        <Route path="/order/cart" element={<Cart navigation={navigation} />} />
      </Routes>
    </Main>
  );
};

export default Navigations;