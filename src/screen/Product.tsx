import styled from "styled-components";
import { CommonProps } from "../navigation";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { clothes } from "../contants";

const Layout = styled.div`
  width: calc(100% - 3rem);
  padding: 1.25rem 1.5rem 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const ProductLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductImg = styled.img`
  width: 100%;
`;

const ProductText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Product = (props: CommonProps.ComponentProps) => {
  const location = useLocation();
  const path = location.pathname.substring(9, location.pathname.length);
  const [ products, setProducts ] = useState<Props.ClothInfo[]>([]);

  useEffect(() => {
    if(path === "all") {
      return setProducts(clothes);
    }

    setProducts(clothes.filter(v => v.category === path));
  }, []);

  return (
    <Layout>
      {products.map((item, idx) => (
        <ProductLayout key={idx}>
          <ProductImg alt="상품이미지" src="" />
          <ProductText>{item.name}</ProductText>
          <ProductText>{item.price}</ProductText>
        </ProductLayout>
      ))}
    </Layout>
  );
};

export default Product;