import styled from "styled-components";
import { CommonProps } from "../../navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Colors } from "../../utils/color";
import useAppStore from "../../store/useAppStore";

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;

const LoginLayout = styled.form`
  width: 35%;
  padding: 0 10px;
`;

const InputLayout = styled.div`
  margin-bottom: 0.7rem;
`;  

const Label = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: calc(100% - 1.3rem);
  border: 1px solid #eee;
  padding: 0.65rem;
  font-size: 0.75rem;
  outline: none;
`;

const ButtonLayout = styled.div<{ $type: string }>`
  width: calc(100% - 20px);
  margin-top: ${props => props.$type === "login" ? "20px" : "10px" };
  padding: 10px;
  color: ${props => props.$type === "login" ? Colors.Black : Colors.White };
  background: ${props => props.$type === "login" ? Colors.White : Colors.Black };
  border: 1px solid #eee;
  text-align: center;
  cursor: pointer;
`;

const ButtonText = styled.a<{ $position: string }>`
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0 8px;
  ${props => props.$position === "right" && "border-left: 1px solid black;"}
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;

const SubButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const FindButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

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
    console.log(isLogin);

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
        
        <ButtonLayout $type="sign_up">
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