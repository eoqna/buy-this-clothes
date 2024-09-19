import { useCallback, useState } from "react";
import { 
  ButtonLayout, ButtonText, 
  Input, InputLayout, 
  Label, Layout,
  LoginLayout, 
} from "../assets/css/login";
import useConfirm from "../hooks/useConfirm";

const defaultUserInfo: Props.UserProps = {
  id: "1",
  pw: "",
  mobile: "",
  pwck: "",
  name: "",
};

interface Props {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const UserInfo = ( props: Props ) => {
  const { setPage } = props;
  const { confirmAction } = useConfirm();
  const [ userInfo, setUserInfo ] = useState(defaultUserInfo);

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
    <Layout style={{ paddingTop: 10 }}>
      <LoginLayout>
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
        <ButtonLayout style={{ marginTop: "2rem"}} onClick={submit}>
          <ButtonText>회원정보 수정</ButtonText>
        </ButtonLayout>
      </LoginLayout>
    </Layout>
  );
};

export default UserInfo;