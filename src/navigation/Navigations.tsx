import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import Product from "../screen/Product";

const Main = styled.main`
  width: 100%;
  height: calc(100% - 44px);
  margin-top: 44px;
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Main>
      <Routes>
        <Route index element={<Home navigation={navigation} />} />
        <Route path="/product/*" element={<Product navigation={navigation} />} />
      </Routes>
    </Main>
  );
};

export default Navigations;