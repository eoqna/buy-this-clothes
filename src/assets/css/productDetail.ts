import styled from "styled-components";
import { Colors } from "../../utils/color";

export const Layout = styled.div`
  width: calc(100% - 3.75rem);
  padding: 1.25rem 1.875rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductInfoLayout = styled.div`
  width: calc(100% - 3.75rem);
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: calc(2.5rem + 24.4px);
  left: 1.875rem;
  z-index: 10000;
`;

export const ProductSubInfo = styled.div<{ $direction: string }>`
  position: fixed;
  width: 25%;
  top: 50%;
  transform: translate(0, -50%);
  ${(props) => `${props.$direction}: 1.875rem`};
`;

export const SummaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextLayout = styled.div<{ $title?: boolean }>`
  margin-bottom: ${({ $title }) => $title ? "1.4rem" : "8px"};
`;

export const SummaryStrong = styled.strong<{ $bold?: boolean }>`
  font-size: 0.8rem;
  ${({ $bold }) => $bold && "font-weight: bold;"}
`;

export const TotalPriceLayout = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 1.8rem;
  padding-top: 0.6rem;
`;

export const SelectBox = styled.select`
  font-size: 0.65rem;
  width: 100%;
  line-height: 1;
  color: ${Colors.Black};
  padding: 0.65rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  outline: none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance: none !impotant;
  cursor: pointer;
`;

export const SelectOption = styled.option``;

export const ButtonLayout = styled.div`
  background: ${Colors.Black};
  width: calc(100% - 1.1rem);
  padding: 0.55rem;
  text-align: center;
  cursor: pointer;
`;

export const OrderButton = styled.a`
  color: ${Colors.White};
  font-size: 0.8rem;
`;

export const OrderProductsLayout = styled.div``;

export const OrderProductLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 16px);
  padding: 0 8px;
  border-top: 1px solid #ccc;
  &: last-child {
    border-bottom: 1px solid #ccc;
  }
`;

export const OrderProductInnerLayout = styled.div<{ $top?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ $top }) => $top 
    ? "padding-top: 20px; margin-bottom: 4px;" 
    : "padding-bottom: 20px; marin-top: 4px;"
  }
`;

export const RemoveButton = styled.a`
  display: flex;
  width: 0.7rem;
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: #ccc;
  cursor: pointer;
`;

export const ProductCenterLayout = styled.div``;

export const ProductImageLayout = styled.div`
  margin: 0 30%;
  width: 40%;
`;

export const ProductImage = styled.img`
  width: 100%;
`;