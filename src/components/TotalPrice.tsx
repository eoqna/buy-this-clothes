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
    <PriceLayout $left>
      <TotalSummaryLayout>
        <SummaryLayout>
          <SummaryStrong>Subtotal</SummaryStrong>
          <SumarryRightLayout>KRW {subPrice}</SumarryRightLayout>
        </SummaryLayout>
        <SummaryLayout>
          <SummaryStrong>Shipping</SummaryStrong>
          <SumarryRightLayout>KRW {shipping}</SumarryRightLayout>
        </SummaryLayout>
      </TotalSummaryLayout>
      <TotalPriceLayout>
        <SummaryLayout>
          <SummaryStrong $bold>Total</SummaryStrong>
          <SumarryRightLayout>KRW <SummaryStrong $bold>{totalPrice}</SummaryStrong></SumarryRightLayout>
        </SummaryLayout>
      </TotalPriceLayout>
      <ButtonLayout>
        <OrderButton>Continue to Order</OrderButton>
      </ButtonLayout>
    </PriceLayout>
  )
};

export default TotalPrice;