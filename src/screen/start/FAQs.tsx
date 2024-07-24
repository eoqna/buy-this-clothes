import { CommonProps } from "../../navigation";
import { 
  FlexLayout,ButtonLayout,
  OptionText, OrderButton,
  PriceLayout, ProductImg,
  ProductInfo, ProductInfoText,
  ProductLayout, ProductsLayout,
  RemoveButton, SumarryRightLayout,
  SummaryLayout, SummaryStrong,
  Title, TotalPriceLayout,
  TotalSummaryLayout
} from "../../assets/css/menu";
import styled from "styled-components";
import { faqs, menu } from "../../contants/faqs";
import { useCallback, useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import { Colors } from "../../utils/color";

const MenuLayout = styled.div<{ $select: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  ${props => props.$select && "font-weight: bold;"}
`;

const FAQLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  cursor: pointer;
`;

const TitleTextLayout = styled.div``;

const CategoryText = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #ccc;
`;

const ContentText = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${Colors.Black};
`;

const ContentLayout = styled.div`
  display: none;
`;

const defaultSelect = [true, false, false, false, false, false];

const FAQs = (props: CommonProps.ComponentProps) => {
  const [ select, setSelect ] = useState(defaultSelect);

  const onClickMenu = useCallback((item: string, idx: number) => {
    let ds = [false, false, false, false, false, false];
    
    ds[idx] = true;

    setSelect(ds);
  }, [select]);

  return (
    <FlexLayout>
      <ProductsLayout $right={false}>
        <Title>FAQs</Title>
        {menu.map((item, i) => (
          <MenuLayout key={i} $select={select[i]} onClick={() => onClickMenu(item, i)}>{item}<Icon path={mdiChevronRight} size={0.8}/></MenuLayout>
        ))}
      </ProductsLayout>
      <PriceLayout $left={false}>
        {faqs.map((col) => (
          <FAQLayout>
            <TitleLayout>
              <TitleTextLayout>
                <CategoryText>{`[${col.category}] `}</CategoryText>
                <ContentText>{col.title}</ContentText>
              </TitleTextLayout>
              <Icon path={mdiChevronDown} size={0.8} color={"#ccc"} />
            </TitleLayout>
          </FAQLayout>
        ))}
      </PriceLayout>
    </FlexLayout>
  );
};

export default FAQs;