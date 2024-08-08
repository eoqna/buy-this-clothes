import { 
  OptionText, ProductImg,
  ProductInfo, ProductInfoText,
  ProductLayout,
} from "../assets/css/menu";
import { orderList } from "../contants/mypage";
import useConvert from "../hooks/useConvert";

const OrderedInfo = () => {
  const { convNumberFormat } = useConvert();

  return (
    <>
      {orderList.map((item, idx) => (
        <ProductLayout key={idx}>
          <ProductImg src={`/img/product/${item.default_img}`}/>
          <ProductInfo>
            <ProductInfoText>{item.name}</ProductInfoText>
            <ProductInfoText>{convNumberFormat(item.price)}</ProductInfoText>
            <OptionText>[Option: {item.option[0]}]</OptionText>
            <ProductInfoText>{item.status}</ProductInfoText>
          </ProductInfo>
        </ProductLayout>
      ))}
    </>
  );
};

export default OrderedInfo;