import { useCallback, useState } from "react";
import styled from "styled-components";
import { CommonProps } from "../navigation";
import banner1 from "../assets/img/banner2.png";
import banner2 from "../assets/img/banner3.png";
import banner3 from "../assets/img/banner1.png";
import useInterval from "../hooks/useInterval";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [ images, setImages ] = useState([banner1, banner2, banner3]);
  const [ activeIndex, setActiveIndex ] = useState(0);
  
  const nextSlice = useCallback(() => {
    if(activeIndex < images.length-1) setActiveIndex(activeIndex + 1);
    else setActiveIndex(0);
  }, [activeIndex]);

  useInterval(() => {
    nextSlice();
  }, 1000 * 10);

  return (
    <Layout>
      <img src={images[activeIndex]} alt="배너1" />
    </Layout>
  );
};

export default Home;