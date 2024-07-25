export const menu: string[] = ["전체", "주문/결제", "제품", "배송", "교환", "취소/환불"];

export const defaultSelect = [true, false, false, false, false, false];

export const faqs: Props.FaqInfo[] = [
  {
    idx: 0,
    category: "배송",
    title: "주문 후 배송지 변경이 가능한가요?",
    content: "배송 준비중 상태인 경우 고객센터로 요청해 주시면 배송지 변경 도와드리겠습니다.",
    open: false,
  },
  {
    idx: 1,
    category: "제품",
    title: "사이즈는 어떻게 확인하나요?",
    content: "제품 상세페이지 내의 제품 실측 사이즈와 모델 스펙 및 모델 착용 사이즈 등을 확인한 후 구매하시는 것을 추천드립니다.",
    open: false,
  },
  {
    idx: 2,
    category: "제품",
    title: "제품 세탁은 어떻게 해야 하나요?",
    content: "제품 상세페이지 내의 제품 재질에 따라 세탁하시는 것을 권고드립니다.",
    open: false,
  },
  {
    idx: 3,
    category: "취소/환불",
    title: "반품 접수는 어떻게 하나요?",
    content: "상품 수령 후 [My Page] 내의 구매 목록에서 해당 상품의 반품 접수를 진행해주면 됩니다.",
    open: false,
  },
  {
    idx: 4,
    category: "교환",
    title: "교환 시 주의사항",
    content: "구매하신 상품 수령일로부터 7일 이전. 택을 제거하지 않고 훼손되지 않은 상품에 한하여 교환 가능합니다.",
    open: false,
  },
  {
    idx: 5,
    category: "주문/결제",
    title: "주문 수량 제한이 있나요?",
    content: "전 제품 1인당 1품목 주목 가능합니다.",
    open: false,
  },
];