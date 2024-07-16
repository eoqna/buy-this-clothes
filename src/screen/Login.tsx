import styled from "styled-components";
import { CommonProps } from "../navigation";
import { useCallback, useRef, useState } from "react";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginLayout = styled.form`
  width: 35%;
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
  width: 100%;
  border: 1px solid #eee;
  padding: 0.65rem;
  font-size: 0.75rem;
  outline: none;
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
  const [ loginInfo, setLoginInfo ] = useState(defaultLoginInfo);
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const validation = useCallback(() => {
    if( idRef.current?.value === null ) {
      return alert("아이디를 입력해 주세요.");
    }

    if( pwRef.current?.value === null ) {
      return alert("비밀번호를 입력해 주세요.")
    }
  }, []);

  const submit = useCallback(() => {
    validation();
  }, []);

  return (
    <Layout>
      <LoginLayout>
        <InputLayout>
          <Label>ID</Label>
          <Input
            value={loginInfo.id}
            onChange={(e) => setLoginInfo({...loginInfo, id: e.target.value})}
            ref={idRef}
            placeholder="아이디"
          />
        </InputLayout>
        <InputLayout>
          <Label>Password</Label>
          <Input
            value={loginInfo.pw}
            onChange={(e) => setLoginInfo({...loginInfo, pw: e.target.value})}
            ref={pwRef}
            placeholder="비밀번호"
          />
        </InputLayout>
      </LoginLayout>
    </Layout>
  );
};

export default Login;