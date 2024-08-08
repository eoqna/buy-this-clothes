import { 
  ButtonLayout, OrderButton,
  PriceLayout, SumarryRightLayout,
  SummaryLayout, SummaryStrong,
  TotalPriceLayout, TotalSummaryLayout
} from "../assets/css/menu";

interface PriceProps {
  subPrice: string;
  shipping: string;
  totalPrice: string;
};

const TotalPrice = (props: PriceProps) => {
  const { subPrice, shipping, totalPrice } = props;

  return (
    <PriceLayout $left={true}>
      <TotalSummaryLayout>
        <SummaryLayout>
          <SummaryStrong $type="normal">Subtotal</SummaryStrong>
          <SumarryRightLayout>KRW {subPrice}</SumarryRightLayout>
        </SummaryLayout>
        <SummaryLayout>
          <SummaryStrong $type="normal">Shipping</SummaryStrong>
          <SumarryRightLayout>KRW {shipping}</SumarryRightLayout>
        </SummaryLayout>
      </TotalSummaryLayout>
      <TotalPriceLayout>
        <SummaryLayout>
          <SummaryStrong $type="bold">Total</SummaryStrong>
          <SumarryRightLayout>KRW <SummaryStrong $type="bold">{totalPrice}</SummaryStrong></SumarryRightLayout>
        </SummaryLayout>
      </TotalPriceLayout>
      <ButtonLayout>
        <OrderButton>Continue to Order</OrderButton>
      </ButtonLayout>
    </PriceLayout>
  )
};

export default TotalPrice;