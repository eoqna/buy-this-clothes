import { CommonProps } from "../../navigation";
import { 
  ButtonLayout, ButtonText, 
  Input, InputLayout, 
  Label, Layout, 
  LoginLayout, 
} from "../../assets/css/login";
import { useCallback, useState } from "react";

const defaultJoinInfo: Props.UserProps = {
  id: "",
  pw: "",
  mobile: "",
  pwck: "",
  name: "",
};

const Join = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const [ joinInfo, setJoinInfo ] = useState(defaultJoinInfo);

  const validation = useCallback(() => {
    const { id, pw, mobile, pwck, name } = joinInfo;

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
  }, [joinInfo]);

  const onChangeMobile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinInfo({...joinInfo, mobile: e.target.value});
  }, [joinInfo]);

  const submit = useCallback(() => {
    if( validation() ) {
      alert("회원가입이 완료되었습니다.");
  
      navigation("/login");
    }
  }, [joinInfo]);

  return (
    <Layout>
      <LoginLayout $login>
        <InputLayout>
          <Label>ID *</Label>
          <Input
            type="text"
            value={joinInfo.id}
            onChange={(e) => setJoinInfo({...joinInfo, id: e.target.value})}
            autoFocus
          />
        </InputLayout>
        <InputLayout>
          <Label>Password *</Label>
          <Input
            type="password"
            autoComplete="pw"
            value={joinInfo.pw}
            onChange={(e) => setJoinInfo({...joinInfo, pw: e.target.value})}
          />
        </InputLayout>
        <InputLayout>
          <Label>Confirm Password *</Label>
          <Input
            type="password"
            autoComplete="pw"
            value={joinInfo.pwck}
            onChange={(e) => setJoinInfo({...joinInfo, pwck: e.target.value})}
          />
        </InputLayout>
        <InputLayout>
          <Label>Name *</Label>
          <Input
            type="text"
            autoComplete="pw"
            value={joinInfo.name}
            onChange={(e) => setJoinInfo({...joinInfo, name: e.target.value})}
          />
        </InputLayout>
        <InputLayout>
          <Label>Mobile *</Label>
          <Input
            type="text"
            autoComplete="mobile"
            value={joinInfo.mobile}
            onChange={(e) => onChangeMobile(e)}
          />
        </InputLayout>
        <ButtonLayout style={{ marginTop: "2rem"}} onClick={submit}>
          <ButtonText>Join</ButtonText>
        </ButtonLayout>
      </LoginLayout>
    </Layout>
  );
};

export default Join;