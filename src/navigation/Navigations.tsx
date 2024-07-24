import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import Product from "../screen/Product";
import Cart from "../screen/Cart";
import Login from "../screen/start/Login";
import ProductInfo from "../screen/ProductInfo";
import Header from "../components/Header";
import Join from "../screen/start/Join";
import FAQs from "../screen/start/FAQs";
import NFP from "../screen/NFP";

const Layout = styled.main`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  width: 100%;
  height: calc(100% - 45px);
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <Header navigation={navigation} />
      <Main>
        <Routes>
          <Route index element={<Home navigation={navigation} />} />
          <Route path="/login" element={<Login navigation={navigation} />} />
          <Route path="/join" element={<Join navigation={navigation} />} />
          <Route path="/faqs" element={<FAQs navigation={navigation} />} />
          <Route path="/product/:category" element={<Product navigation={navigation} />} />
          <Route path="/product/:name/:idx/category/:category/:idx" element={<ProductInfo navigation={navigation} />} />
          <Route path="/order/cart" element={<Cart navigation={navigation} />} />
          <Route path="/*" element={<NFP navigation={navigation} />} />
        </Routes>
      </Main>
    </Layout>
  );
};

export default Navigations;