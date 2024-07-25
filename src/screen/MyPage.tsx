import { 
  FlexLayout, OptionText,
  PriceLayout, ProductImg,
  ProductInfo, ProductInfoText,
  ProductLayout, ProductsLayout,
  Title,
} from "../assets/css/menu";
import { 
  MenuLayout
} from "../assets/css/faqs";
import { CommonProps } from "../navigation";
import { menu, orderList } from "../contants/mypage";
import { useCallback, useEffect, useState } from "react";
import { defaultSelect } from "../contants/faqs";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import useConfirm from "../hooks/useConfirm";
import useAccount from "../hooks/useAccount";
import { getCookie } from "../hooks/useCookie";
import useConvert from "../hooks/useConvert";

const MyPage = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { logout } = useAccount();
  const { convNumberFormat } = useConvert();
  const { confirmAction } = useConfirm();
  const [ select, setSelect ] = useState(defaultSelect);
  const [ page, setPage ] = useState("주문내역 조회");

  useEffect(() => {
    if( !getCookie("login") ) return navigation("/");
  }, []);

  const onClickMenu = useCallback((menu: string, idx: number) => {
    if( menu === "로그아웃" ) {
      confirmAction("로그아웃 하시겠습니까?", 
        () => {
          logout();
          navigation("/");
        },
        () => { return; },
      );
    } else {
      let ds = [false, false, false];
      ds[idx] = true;
      
      setSelect(ds);
      setPage(menu);
    }
  }, [select, page]);

  return (
    <FlexLayout>
      <ProductsLayout $right={false}>
        {menu.map((item, i) => (
          <MenuLayout key={i} $select={select[i]} onClick={() => onClickMenu(item, i)}>
            {item}<Icon path={mdiChevronRight} size={0.8}/>
          </MenuLayout>
        ))}
      </ProductsLayout>
      <PriceLayout $left={false} style={{marginTop:0}}>
        <Title>{page}</Title>
        {page === "주문내역 조회" &&
          orderList.map((item, idx) => (
            <ProductLayout key={idx}>
              <ProductImg src={`/img/product/${item.default_img}`}/>
              <ProductInfo>
                <ProductInfoText>{item.name}</ProductInfoText>
                <ProductInfoText>{convNumberFormat(item.price)}</ProductInfoText>
                <OptionText>[Option: {item.option[0]}]</OptionText>
                <ProductInfoText>{item.status}</ProductInfoText>
              </ProductInfo>
            </ProductLayout>
          ))
        }
      </PriceLayout>
    </FlexLayout>
  );
};

export default MyPage;