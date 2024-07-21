import styled from "styled-components";
import { CommonProps } from "../navigation";
import useDataStore from "../store/useDataStore";
import { Colors } from "../utils/color";
import { useCallback, useEffect, useState } from "react";

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
  cursor: pointer;
`;

const Cart = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { basket, setBasket } = useDataStore();
  const [ subPrice, setSubPrice ] = useState("");
  const [ totalPrice, setTotalPrice ] = useState("");
  const [ shipping, setShipping ] = useState("");

  const convToNumber = useCallback((value: number) => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }, []);

  const calculateTotalPrice = useCallback(() => {
    const sub = basket.reduce((acc, cur) => acc + Number(cur.price.replace(",", "")), 0);
    const sp = sub > 50000 ? 0 : 3000;
    const total = sub + sp;

    setSubPrice(convToNumber(sub));
    setShipping(convToNumber(sp));
    setTotalPrice(convToNumber(total));
  }, [subPrice, shipping, totalPrice]);

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  const onClickRemoveButton = useCallback((item: Props.ClothInfo) => {
    setBasket(basket.filter((v) => v.name !== item.name));
  }, [basket]);
  

  return (
    <CartLayout>
      <ProductsLayout>
        <Title>Cart</Title>
        {basket.map((item, idx) => (
          <ProductLayout key={idx}>
            <ProductImg src={`/img/product/${item.default_img}`}/>
              <ProductInfo>
                <ProductInfoText>{item.name}</ProductInfoText>
                <ProductInfoText>{item.price}</ProductInfoText>
                <OptionText>[Option: {item.option[0]}]</OptionText>
                <OptionText>{item.quantity}</OptionText>
              </ProductInfo>
            <RemoveButton onClick={() => onClickRemoveButton(item)}>Remove</RemoveButton>
          </ProductLayout>
        ))}
      </ProductsLayout>
      <PriceLayout>
        <TotalSummaryLayout>
          <SummaryLayout>
            <SummaryStrong $type="normal">Subtotal</SummaryStrong>
            <SumarryRightLayout>KRW {subPrice}</SumarryRightLayout>
          </SummaryLayout>
          <SummaryLayout>
            <SummaryStrong $type="normal">Shipping</SummaryStrong>
            <SumarryRightLayout>KRW {shipping}</SumarryRightLayout>
          </SummaryLayout>
        </TotalSummaryLayout>
        <TotalPriceLayout>
          <SummaryLayout>
            <SummaryStrong $type="bold">Total</SummaryStrong>
            <SumarryRightLayout>KRW <SummaryStrong $type="bold">{totalPrice}</SummaryStrong></SumarryRightLayout>
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