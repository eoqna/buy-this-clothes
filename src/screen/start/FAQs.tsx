import { 
  FlexLayout, PriceLayout, 
  ProductsLayout, Title,
} from "../../assets/css/menu";
import { 
  MenuLayout, CategoryText, 
  ContentLayout, ContentText,
  FAQLayout, TitleLayout,
  TitleTextLayout 
} from "../../assets/css/faqs";
import { defaultSelect, faqs, menu } from "../../contants/faqs";
import { useCallback, useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronRight, mdiChevronUp } from "@mdi/js";

const FAQs = () => {
  const [ select, setSelect ] = useState(defaultSelect);
  const [ contents, setContents ] = useState<Props.FaqInfo[]>([]);

  useEffect(() => {
    faqs.map((v) => v.open=false);
    
    setContents(faqs);
  }, []);

  const onClickMenu = useCallback((item: string, idx: number) => {
    let ds = [false, false, false, false, false, false];
    ds[idx] = true;
    faqs.map((v) => v.open=false);

    if( item === "전체" ) {
      setContents(faqs);
    } else {
      const tmp = faqs.filter((v) => v.category === item);
      setContents(tmp);
    }
    
    setSelect(ds);
  }, [select]);

  const onClickFAQ = useCallback((i: number) => {
    let copy = [...contents];
    copy[i].open = !copy[i].open;

    setContents(copy);
  }, [contents]);

  return (
    <FlexLayout>
      <ProductsLayout $right={false}>
        <Title>FAQs</Title>
        {menu.map((item, i) => (
          <MenuLayout key={i} $select={select[i]} onClick={() => onClickMenu(item, i)}>
            {item}<Icon path={mdiChevronRight} size={0.8}/>
          </MenuLayout>
        ))}
      </ProductsLayout>
      <PriceLayout $left={false}>
        {contents.map((col, i) => (
          <FAQLayout key={col.idx} onClick={() => onClickFAQ(i)}>
            <TitleLayout>
              <TitleTextLayout>
                <CategoryText>{`[${col.category}] `}</CategoryText>
                <ContentText $title={true}>{col.title}</ContentText>
              </TitleTextLayout>
              {col.open
                ? <Icon path={mdiChevronUp} size={0.8} color={"#ccc"} />
                : <Icon path={mdiChevronDown} size={0.8} color={"#ccc"} />
              }
            </TitleLayout>
            {col.open &&
              <ContentLayout className={`faq_content_${i}`}>
                <ContentText $title={false}>{col.content}</ContentText>
              </ContentLayout>
            }
          </FAQLayout>
        ))}
      </PriceLayout>
    </FlexLayout>
  );
};

export default FAQs;