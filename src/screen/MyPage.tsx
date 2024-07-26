import { 
  FlexLayout, OptionText,
  PriceLayout, ProductImg,
  ProductInfo, ProductInfoText,
  ProductLayout, ProductsLayout,
  Title,
} from "../assets/css/menu";
import { 
  MenuLayout,
} from "../assets/css/faqs";
import { 
  ButtonLayout, ButtonText, 
  Input, InputLayout, 
  Label, Layout,
  LoginLayout, 
} from "../assets/css/login";
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

const defaultUserInfo: Props.UserProps = {
  id: "1",
  pw: "",
  mobile: "",
  pwck: "",
  name: "",
};

const MyPage = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { logout } = useAccount();
  const { convNumberFormat } = useConvert();
  const { confirmAction } = useConfirm();
  const [ select, setSelect ] = useState(defaultSelect);
  const [ page, setPage ] = useState("주문내역 조회");
  const [ userInfo, setUserInfo ] = useState(defaultUserInfo);

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

  const validation = useCallback(() => {
    const { id, pw, mobile, pwck, name } = userInfo;

    if( !id || !pw || !mobile || !pwck || !name ) {
      return alert("모든 필수 항목을 입력해 주세요.");
    }

    if( pw !== pwck ) {
      return alert("비밀번호 확인이 다릅니다.");
    }

    if( mobile.length < 10 || mobile.length > 11 ) {
      return alert("올바른 핸드폰 번호를 입력해 주세요.");
    }

    return true;
  }, [userInfo]);

  const onChangeMobile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({...userInfo, mobile: e.target.value});
  }, [userInfo]);

  const submit = useCallback(() => {
    if( validation() ) {
      confirmAction("수정하시겠습니까?",
        () => {
          alert("회원정보가 수정되었습니다.");
          setPage("주문내역 조회");
        },
        () => {},
      );
    }
  }, [userInfo]);

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
        {page === "회원 정보" &&
          <Layout style={{ paddingTop: 10 }}>
            <LoginLayout style={{ width: "100%", padding: 0 }}>
              <InputLayout>
                <Label>ID *</Label>
                <Input
                  type="text"
                  value={userInfo.id}
                  disabled={true}
                />
              </InputLayout>
              <InputLayout>
                <Label>Password *</Label>
                <Input
                  type="password"
                  autoComplete="pw"
                  value={userInfo.pw}
                  onChange={(e) => setUserInfo({...userInfo, pw: e.target.value})}
                />
              </InputLayout>
              <InputLayout>
                <Label>Confirm Password *</Label>
                <Input
                  type="password"
                  autoComplete="pw"
                  value={userInfo.pwck}
                  onChange={(e) => setUserInfo({...userInfo, pwck: e.target.value})}
                />
              </InputLayout>
              <InputLayout>
                <Label>Name *</Label>
                <Input
                  type="text"
                  autoComplete="pw"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                />
              </InputLayout>
              <InputLayout>
                <Label>Mobile *</Label>
                <Input
                  type="text"
                  autoComplete="mobile"
                  value={userInfo.mobile}
                  onChange={(e) => onChangeMobile(e)}
                />
              </InputLayout>
              <ButtonLayout $type="sign_up" style={{ marginTop: "2rem"}} onClick={submit}>
                <ButtonText $position="none">회원정보 수정</ButtonText>
              </ButtonLayout>
            </LoginLayout>
          </Layout>
        }
      </PriceLayout>
    </FlexLayout>
  );
};

export default MyPage;