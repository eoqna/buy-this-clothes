declare namespace Props {
  interface UserProps {
    id: string;
    pw: string;
    mobile: string;
    pwck: string;
    name: string;
  };

  interface HeaderMenu {
    idx: number;
    text: string;
    path: string;
    login?: string;
  };

  interface ClothInfo {
    idx: number;
    name: string;
    price: number;
    category: "top" | "outer" | "bottom" | "acc";
    default_img: string;
    mouse_over_img: string;
    option: string[];
    quantity?: number;
    summary?: string[];
  };

  interface OrderInfo extends ClothInfo {
    status: "배송완료" | "배송중" | "결제대기" | "결제완료" | "반품처리중",
    buy_date: string;
    order_id: string;
  };

  interface FaqInfo {
    idx: number;
    category: "주문/결제" | "제품" | "배송" | "교환" | "취소/환불";
    title: string;
    content: string;
    open: boolean;
  };
};