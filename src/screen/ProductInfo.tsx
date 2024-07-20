import styled from "styled-components";
import { CommonProps } from "../navigation";
import { useLocation } from "react-router-dom";
import { Colors } from "../utils/color";
import { useCallback, useState } from "react";
import useDataStore from "../store/useDataStore";

const Layout = styled.div`
  width: calc(100% - 3.75rem);
  padding: 1.25rem 1.875rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductInfoLayout = styled.div`
  width: calc(100% - 3.75rem);
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: calc(2.5rem + 24.4px);
  left: 1.875rem;
  z-index: 10000;
`;

const ProductSubInfo = styled.div<{ $direction: string }>`
  position: fixed;
  width: 25%;
  top: 50%;
  transform: translate(0, -50%);
  ${(props) => `${props.$direction}: 1.875rem`};
`;

const SummaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextLayout = styled.div<{ $type: string }>`
  margin-bottom: ${props => props.$type === "title" ? "1.4rem" : "8px"};
`;

const SummaryStrong = styled.strong<{ $type: string }>`
  font-size: 0.8rem;
  font-weight: ${(props) => props.$type};
`;

const TotalPriceLayout = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 1.8rem;
  padding-top: 0.6rem;
`;

const SelectBox = styled.select`
  font-size: 0.65rem;
  width: 100%;
  line-height: 1;
  color: ${Colors.Black};
  padding: 0.65rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  outline: none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance: none !impotant;
  cursor: pointer;
`;

const SelectOption = styled.option``;

const ButtonLayout = styled.div`
  background: ${Colors.Black};
  width: calc(100% - 1.1rem);
  padding: 0.55rem;
  text-align: center;
  cursor: pointer;
`;

const OrderButton = styled.a`
  color: ${Colors.White};
  font-size: 0.8rem;
`;

const OrderProductsLayout = styled.div`
`

const OrderProductLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 16px);
  padding: 0 8px;
  border-top: 1px solid #ccc;
  &: last-child {
    border-bottom: 1px solid #ccc;
  }
`;

const OrderProductInnerLayout = styled.div<{ $position: string }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props => props.$position === "top" 
    ? "padding-top: 20px; margin-bottom: 4px;" 
    : "padding-bottom: 20px; marin-top: 4px;"
  }
`;

const RemoveButton = styled.a`
  display: flex;
  width: 0.7rem;
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: #ccc;
  cursor: pointer;
`;

const ProductCenterLayout = styled.div``;

const ProductImageLayout = styled.div`
  margin: 0 30%;
  width: 40%;
`;

const ProductImage = styled.img`
  width: 100%;
`;

const ProductInfo = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { basket, setBasket } = useDataStore();
  const [ size, setSize ] = useState("discription");
  const [ orderList, setOrderList ] = useState<Props.ClothInfo[]>([]);
  const [ index, setIndex ] = useState(0); 
  const location = useLocation();
  const { category, default_img, mouse_over_img, name, option, price }: Props.ClothInfo = location.state;

  const onChangeSelectValue = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const arr = orderList.filter((v) => v.option[0] === e.target.value );

    if( arr.length > 0 ) {
      alert("아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.");
      setSize("discription");
      return;
    }

    setSize(e.target.value);

    const tmpArr: Props.ClothInfo = {
      idx: index,
      name,
      category,
      default_img,
      mouse_over_img,
      option: [e.target.value],
      price,
      quantity: 1,
    };

    setOrderList(prev => prev.concat(tmpArr));
    setIndex(prev => prev+1);
  }, [size, index, orderList]);

  const onClickRemoveButton = useCallback((item: Props.ClothInfo) => {
    const arr = orderList.filter((v) => v.idx !== item.idx);

    setOrderList(arr);
  }, [orderList]);

  const onClickAddtoOrderButton = useCallback(() => {
    if( !orderList.length ) {
      return alert("필수 옵션을 선택해 주세요.");
    }

    const arr = basket.concat(orderList);

    setBasket(arr);

    confirm("장바구니에 상품이 정상적으로 담겼습니다.");
    
    navigation("/order/cart");

  }, [basket, orderList]);

  return (
    <>
      <Layout>
        <ProductCenterLayout>
          <ProductImageLayout>
            <ProductImage alt="상품이미지" src={`/img/product${default_img}`} />
          </ProductImageLayout>
          <ProductImageLayout>
            <ProductImage alt="상품이미지" src={`/img/product${mouse_over_img}`} />
          </ProductImageLayout>
        </ProductCenterLayout>
      </Layout>
      <ProductInfoLayout>
        <ProductSubInfo $direction="left">
          <SummaryLayout>
            <TextLayout $type="title"><SummaryStrong $type="bold">{name}</SummaryStrong></TextLayout>
            <TextLayout $type="content">
              <SummaryStrong $type="normal">겉감 : 면 100%</SummaryStrong><br />
              <SummaryStrong $type="normal">전/후면 2도 나염</SummaryStrong><br /><br />
              <SummaryStrong $type="normal">Main Fabric : Cotton 100%</SummaryStrong><br />
              <SummaryStrong $type="normal">Two-color pigment print on front and back</SummaryStrong><br /><br /><br />
              <SummaryStrong $type="normal">*제품 색상은 제품 컷과 가장 유사합니다.</SummaryStrong>
            </TextLayout>
          </SummaryLayout>
        </ProductSubInfo>
        <ProductSubInfo $direction="right">
          <TotalPriceLayout>
            <SummaryLayout>
              <TextLayout $type="title"><SummaryStrong $type="bold">KRW {price}</SummaryStrong></TextLayout>
              <TextLayout $type="content"><SummaryStrong $type="normal">SIZE</SummaryStrong></TextLayout>
            </SummaryLayout>
            <SelectBox value={size} onChange={(e) => onChangeSelectValue(e)}>
              <SelectOption value="discription">SELECT A SIZE</SelectOption>
              <SelectOption value="line" disabled={true}>----------------------------------</SelectOption>
              {option.map((item) => (
                <SelectOption value={item} key={item}>{`    ${item}`}</SelectOption>
              ))}
            </SelectBox>
            <OrderProductsLayout>
              {orderList.map((item) => (
                <OrderProductLayout key={item.idx}>
                  <OrderProductInnerLayout $position="top">
                    <SummaryStrong $type="normal">{item.option[0]}</SummaryStrong>
                    <RemoveButton onClick={() => onClickRemoveButton(item)}>X</RemoveButton>
                  </OrderProductInnerLayout>
                  <OrderProductInnerLayout $position="bottom">
                    <SummaryStrong $type="normal">- 1 +</SummaryStrong>
                    <SummaryStrong $type="normal">KRW {item.price}</SummaryStrong>
                  </OrderProductInnerLayout>
                </OrderProductLayout>
              ))}
            </OrderProductsLayout>
          </TotalPriceLayout>
          <ButtonLayout onClick={onClickAddtoOrderButton}>
            <OrderButton>Add to Cart</OrderButton>
          </ButtonLayout>
        </ProductSubInfo>
      </ProductInfoLayout>
    </>
  )
};

export default ProductInfo;