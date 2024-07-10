import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Main>
      <Routes>
        <Route index element={<Home navigation={navigation} />} />
      </Routes>
    </Main>
  );
};

export default Navigations;