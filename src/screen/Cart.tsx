import styled from "styled-components";
import { CommonProps } from "../navigation";
import useDataStore from "../store/useDataStore";
import { Colors } from "../utils/color";

const CartLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
`;

const ProductsLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
`;

const Title = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ProductLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 13.5px 0;
  border-top: 1px solid #eee;
  &: last-child {
    border-bottom: 1px solid #eee;
  }
`;

const ProductImg = styled.img`
  width: 6rem;
  margin-right: 1rem;
`;

const ProductInfo = styled.div`
  width: 100%;
`;

const ProductInfoText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

const OptionText = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
`;

const PriceLayout = styled.div`
  margin: 2.75rem 0 0 8.3%;
`;

const RemoveButton = styled.a`
  font-size: 0.8rem;
  color: ${Colors.Black};
  text-decoration: none;
  cursor: pointer;
`;

const Cart = (props: CommonProps.ComponentProps) => {
  const { basket } = useDataStore();

  return (
    <CartLayout>
      <ProductsLayout>
        <Title>Cart</Title>
        <ProductLayout>
          <ProductImg src={`/img/product/top/t_shirt_black_f.png`}></ProductImg>
          {/* <ProductImg src={`/img/product${basket[0].default_img}`}></ProductImg> */}
          <ProductInfo>
            <ProductInfoText>SHORT T-SHIRT BLACK</ProductInfoText>
            <ProductInfoText>KRW 29,000</ProductInfoText>
            <OptionText>[Option: 2]</OptionText>
            <OptionText></OptionText>
          </ProductInfo>
          <RemoveButton>Remove</RemoveButton>
        </ProductLayout>
      </ProductsLayout>
      <PriceLayout>

      </PriceLayout>
    </CartLayout>
  );
};

export default Cart;