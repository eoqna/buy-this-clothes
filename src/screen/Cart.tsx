import useDataStore from "../store/useDataStore";
import { useCallback, useEffect, useState } from "react";
import useConvert from "../hooks/useConvert";
import { 
  FlexLayout,ButtonLayout,
  OptionText, OrderButton,
  PriceLayout, ProductImg,
  ProductInfo, ProductInfoText,
  ProductLayout, ProductsLayout,
  RemoveButton, SumarryRightLayout,
  SummaryLayout, SummaryStrong,
  Title, TotalPriceLayout,
  TotalSummaryLayout
} from "../assets/css/menu";

const Cart = () => {
  const { basket, setBasket } = useDataStore();
  const { convNumberFormat } = useConvert();
  const [ subPrice, setSubPrice ] = useState("0");
  const [ totalPrice, setTotalPrice ] = useState("0");
  const [ shipping, setShipping ] = useState("0");

  const calculateTotalPrice = useCallback(() => {
    const sub = basket.reduce((acc, cur) => acc + cur.price, 0);
    const sp = (basket.length < 1 || sub > 50000) ? 0 : 3000;
    const total = sub + sp;

    setSubPrice(convNumberFormat(sub));
    setShipping(convNumberFormat(sp));
    setTotalPrice(convNumberFormat(total));
  }, [subPrice, shipping, totalPrice]);

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  const onClickRemoveButton = useCallback((item: Props.ClothInfo) => {
    setBasket(basket.filter((v) => v.name !== item.name));
  }, [basket]);

  return (
    <FlexLayout>
      <ProductsLayout $right={true}>
        <Title>Cart</Title>
        {basket.map((item, idx) => (
          <ProductLayout key={idx}>
            <ProductImg src={`/img/product/${item.default_img}`}/>
            <ProductInfo>
              <ProductInfoText>{item.name}</ProductInfoText>
              <ProductInfoText>{convNumberFormat(item.price)}</ProductInfoText>
              <OptionText>[Option: {item.option[0]}]</OptionText>
              <OptionText>{item.quantity}</OptionText>
            </ProductInfo>
            <RemoveButton onClick={() => onClickRemoveButton(item)}>Remove</RemoveButton>
          </ProductLayout>
        ))}
      </ProductsLayout>
      <PriceLayout $left={true}>
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
    </FlexLayout>
  );
};

export default Cart;