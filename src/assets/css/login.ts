import styled from "styled-components";
import { Colors } from "../../utils/color";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;

export const LoginLayout = styled.form`
  width: 35%;
  padding: 0 10px;
`;

export const InputLayout = styled.div`
  margin-bottom: 0.7rem;
`;  

export const Label = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: calc(100% - 1.3rem);
  border: 1px solid #eee;
  padding: 0.65rem;
  font-size: 0.75rem;
  outline: none;
`;

export const ButtonLayout = styled.div<{ $type: string }>`
  width: calc(100% - 20px);
  margin-top: ${props => props.$type === "login" ? "20px" : "10px" };
  padding: 10px;
  color: ${props => props.$type === "login" ? Colors.Black : Colors.White };
  background: ${props => props.$type === "login" ? Colors.White : Colors.Black };
  border: 1px solid #eee;
  text-align: center;
  cursor: pointer;
`;

export const ButtonText = styled.a<{ $position: string }>`
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

export const SubButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const FindButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
`;