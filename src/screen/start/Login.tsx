import { CommonProps } from "../../navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import useAppStore from "../../store/useAppStore";
import { 
  ButtonLayout, ButtonText, 
  FindButtonLayout, Input, 
  InputLayout, Label, 
  Layout, LoginLayout, 
  SubButtonLayout,
} from "../../assets/css/login";

interface LoginProps {
  id: string;
  pw: string;
};

const defaultLoginInfo: LoginProps = {
  id: "",
  pw: "",
};

const Login = (props: CommonProps.ComponentProps) => {
  const { navigation } = props;
  const { isLogin, setIsLogin } = useAppStore();
  const [ loginInfo, setLoginInfo ] = useState(defaultLoginInfo);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if( isLogin ) navigation("/");
  }, []);

  const validation = useCallback(() => {
    if( idRef.current?.value === "" ) {
      idRef.current.focus();
      alert("아이디를 입력해 주세요.");
      return;
    }

    if( pwRef.current?.value === "" ) {
      pwRef.current.focus();
      alert("비밀번호를 입력해 주세요.");
      return;
    }
  }, []);

  const submit = useCallback(() => {
    validation();

    if( loginInfo.id === "1" && loginInfo.pw === "1") {
      navigation("/");
      setIsLogin(true);
      return;
    }

    alert("아이디 또는 비밀번호가 다릅니다.");
  }, [loginInfo, isLogin]);

  return (
    <Layout>
      <LoginLayout>
        <InputLayout>
          <Label>ID</Label>
          <Input
            type="text"
            value={loginInfo.id}
            onChange={(e) => setLoginInfo({...loginInfo, id: e.target.value})}
            ref={idRef}
            placeholder="아이디"
          />
        </InputLayout>
        <InputLayout>
          <Label>Password</Label>
          <Input
            type="password"
            autoComplete="pw"
            value={loginInfo.pw}
            onChange={(e) => setLoginInfo({...loginInfo, pw: e.target.value})}
            ref={pwRef}
            placeholder="비밀번호"
          />
        </InputLayout>
        <ButtonLayout $type="login" onClick={submit}>
          <ButtonText $position="none">Login</ButtonText>
        </ButtonLayout>
        
        <ButtonLayout $type="sign_up" onClick={() => navigation("/join")}>
          <ButtonText $position="none">Sign Up</ButtonText>
        </ButtonLayout>
        <SubButtonLayout>
          <FindButtonLayout>
            <ButtonText $position="none">Find</ButtonText>
            <ButtonText $position="right">Find Password</ButtonText>
          </FindButtonLayout>
          <FindButtonLayout>
            <ButtonText $position="none">Non-Member</ButtonText>
          </FindButtonLayout>
        </SubButtonLayout>
      </LoginLayout>
    </Layout>
  );
};

export default Login;