import styled from "styled-components";
import { Colors } from "../../utils/color";

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
`;

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const ProductsLayout = styled.div<{ $right: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.$right ? "42%" : "17%"};
`;

export const ProductLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 13.5px 0;
  border-top: 1px solid #eee;
  &: last-child {
    border-bottom: 1px solid #eee;
  }
`;

export const ProductImg = styled.img`
  width: 6rem;
  margin-right: 1rem;
`;

export const ProductInfo = styled.div`
  width: 100%;
`;

export const ProductInfoText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const OptionText = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
`;

export const PriceLayout = styled.div<{ $left: boolean }>`
  margin: 2.75rem 0 0 ${props=> props.$left ? "8.3%" : "0"};
  width: ${props => props.$left ? "17%" : "42%"};
  padding: 0 10px;
`;

export const RemoveButton = styled.a`
  font-size: 0.8rem;
  color: ${Colors.Black};
  text-decoration: none;
  cursor: pointer;
  height: fit-content;
`;

export const TotalSummaryLayout = styled.div`
  padding-top: 0.6rem;
  border-top: 1px solid #eee;
`;

export const SummaryLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SummaryStrong = styled.strong<{ $type: string }>`
  font-size: 0.8rem;
  font-weight: ${(props) => props.$type};
`;

export const SumarryRightLayout = styled.span`
  font-size: 0.8rem;
  line-height: 1.7;
`;

export const TotalPriceLayout = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 1.8rem;
  padding-top: 0.6rem;
  border-top: 1px solid #eee;
`;

export const ButtonLayout = styled.div`
  background: ${Colors.Black};
  width: 100%;
  padding: 0.55rem;
  text-align: center;
`;

export const OrderButton = styled.a`
  color: ${Colors.White};
  font-size: 0.8rem;
  cursor: pointer;
`;