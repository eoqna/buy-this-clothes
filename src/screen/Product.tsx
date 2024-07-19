import styled from "styled-components";
import { CommonProps } from "../navigation";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { clothes } from "../contants";
import { Colors } from "../utils/color";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductLayout = styled.div`
  width: calc(100% - 3rem);
  padding: 1.25rem 1.5rem 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 100%;
`;

const ProductText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const MoreProductButton = styled.a`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${Colors.Black};
  padding: 5rem 0;
  text-align: center;
  cursor: pointer;
`;

const Product = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const location = useLocation();
  const path = location.pathname.substring(9, location.pathname.length);
  const [ products, setProducts ] = useState<Props.ClothInfo[]>([]);
  const [ showProducts, setShowProducts ] = useState<Props.ClothInfo[]>([]);
  const [ page, setPage ] = useState(1);
  const [ allPage, setAllPage ] = useState(1);

  useEffect(() => {
    if(path === "all") {
      setProducts(clothes);
    } else {
      setProducts(clothes.filter(v => v.category === path));
    }
  }, [path]);

  useEffect(() => {
    if( products.length > 8 ) {
      setAllPage(Math.ceil(products.length / 8));
      setShowProducts(products.filter((_, i) => i < 8));
    } else {
      setShowProducts(products);
    }
  }, [products]);

  const mouseEnterEvent = useCallback((i: number, src: string) => {
    const img = document.querySelector(`.product_${i}`) as HTMLImageElement;
    img.src = `/img/product${src}`;
  }, []);

  const mouseLeaveEvent = useCallback((i: number, src: string) => {
    const img = document.querySelector(`.product_${i}`) as HTMLImageElement;
    img.src = `/img/product${src}`;
  }, []);

  const onClickCloth = useCallback((item: Props.ClothInfo) => {
    navigation(`/product/${item.name}/${item.idx}/category/${item.category}/${item.idx}`, { state: item });
  }, []);

  const onClickLoadMoreButton = useCallback(() => {
    if( page === allPage ) return;

    const tmpArr = clothes.filter((_, i) => i >= showProducts.length && i < showProducts.length + 8);

    setPage(prev => prev+1);
    setShowProducts(prev => prev.concat(tmpArr));
  }, [page, showProducts]);

  return (
    <Layout>
      <ProductLayout>
        {showProducts.map((item) => (
          <ProductInfo 
            key={item.idx}
            onMouseEnter={() => mouseEnterEvent(item.idx, item.mouse_over_img)}
            onMouseLeave={() => mouseLeaveEvent(item.idx, item.default_img)}
            onClick={() => onClickCloth(item)}
          >
            <ProductImg className={`product_${item.idx}`} alt="상품이미지" src={`/img/product${item.default_img}`} />
            <ProductText>{item.name}</ProductText>
            <ProductText>KRW {item.price}</ProductText>
          </ProductInfo>
        ))}
      </ProductLayout>
      <MoreProductButton onClick={onClickLoadMoreButton}>Load More ({page} / {allPage})</MoreProductButton>
    </Layout>
  );
};

export default Product;