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
  width: 17%;
  padding: 0 10px;
`;

const RemoveButton = styled.a`
  font-size: 0.8rem;
  color: ${Colors.Black};
  text-decoration: none;
  cursor: pointer;
  height: fit-content;
`;

const TotalSummaryLayout = styled.div`
  padding-top: 0.6rem;
  border-top: 1px solid #eee;
`;

const SummaryLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SummaryStrong = styled.strong<{ $type: string }>`
  font-size: 0.8rem;
  font-weight: ${(props) => props.$type};
`;

const SumarryRightLayout = styled.span`
  font-size: 0.8rem;
  line-height: 1.7;
`;

const TotalPriceLayout = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 1.8rem;
  padding-top: 0.6rem;
  border-top: 1px solid #eee;
`;

const ButtonLayout = styled.div`
  background: ${Colors.Black};
  width: 100%;
  padding: 0.55rem;
  text-align: center;
`;

const OrderButton = styled.a`
  color: ${Colors.White};
  font-size: 0.8rem;
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
        <ProductLayout>
          <ProductImg src={`/img/product/top/pocket_t_shirt_white_f.png`}></ProductImg>
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
        <TotalSummaryLayout>
          <SummaryLayout>
            <SummaryStrong $type="normal">Subtotal</SummaryStrong>
            <SumarryRightLayout>KRW 0</SumarryRightLayout>
          </SummaryLayout>
          <SummaryLayout>
            <SummaryStrong $type="normal">Shipping</SummaryStrong>
            <SumarryRightLayout>KRW 0</SumarryRightLayout>
          </SummaryLayout>
        </TotalSummaryLayout>
        <TotalPriceLayout>
          <SummaryLayout>
            <SummaryStrong $type="bold">Total</SummaryStrong>
            <SumarryRightLayout>KRW <SummaryStrong $type="bold">0</SummaryStrong></SumarryRightLayout>
          </SummaryLayout>
        </TotalPriceLayout>
        <ButtonLayout>
          <OrderButton>Continue to Order</OrderButton>
        </ButtonLayout>
      </PriceLayout>
    </CartLayout>
  );
};

export default Cart;