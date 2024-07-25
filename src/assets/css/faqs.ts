import styled from "styled-components";
import { Colors } from "../../utils/color";

export const MenuLayout = styled.div<{ $select: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  ${props => props.$select && "font-weight: bold;"}
`;

export const FAQLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
  &:last-child {
    border-bottom: 1px solid #ccc;
    margin-bottom: 4rem;
  }
`;

export const TitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
`;

export const TitleTextLayout = styled.div``;

export const CategoryText = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #ccc;
`;

export const ContentText = styled.span<{ $title: boolean }>`
  font-size: ${props => props.$title ? "0.9rem" : "0.8rem"};
  font-weight: ${props => props.$title ? "bold" : "normal"};
  color: ${Colors.Black};
`;

export const ContentLayout = styled.div`
  display: flex;
  padding: 3rem 2rem 4rem;
`;