import { CommonProps } from "../navigation";
import { useLocation } from "react-router-dom";
import { useCallback, useState } from "react";
import useDataStore from "../store/useDataStore";
import useConvert from "../hooks/useConvert";
import useConfirm from "../hooks/useConfirm";
import { 
  Layout, ButtonLayout,
  OrderButton, OrderProductInnerLayout,
  OrderProductLayout, OrderProductsLayout,
  ProductCenterLayout, ProductImage,
  ProductImageLayout, ProductInfoLayout,
  ProductSubInfo, RemoveButton,
  SelectBox, SelectOption,
  SummaryLayout, SummaryStrong,
  TextLayout, TotalPriceLayout,
} from "../assets/css/productDetail";

const ProductInfo = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { basket, setBasket } = useDataStore();
  const { convNumberFormat } = useConvert();
  const { confirmAction } = useConfirm();
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

    confirmAction("장바구니에 상품이 정상적으로 담겼습니다.\n장바구니로 이동하시겠습니까?",
      () => navigation("/order/cart"),
      () => { return },
    );
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
              <TextLayout $type="title"><SummaryStrong $type="bold">KRW {convNumberFormat(price)}</SummaryStrong></TextLayout>
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
                    <SummaryStrong $type="normal">KRW {convNumberFormat(item.price)}</SummaryStrong>
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