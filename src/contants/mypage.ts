export const menu: string[] = ["주문내역 조회", "회원 정보", "로그아웃",];

export const orderList: Props.OrderInfo[] = [
  {
    idx: 0,
    name: "SHORT T-SHIRT BLACK",
    category: "top",
    price: 29000,
    default_img: "/top/t_shirt_black_f.png",
    mouse_over_img: "/top/t_shirt_black_b.png",
    option: ["XL"],
    buy_date: "2024-07-21",
    order_id: "20240721-0000545",
    status: "배송완료",
    quantity: 1,
  },
  {
    idx: 1,
    name: "REGULAR PANTS KHAKI",
    category: "bottom",
    price: 49000,
    default_img: "/bottom/regular_pants_khaki_f.png",
    mouse_over_img: "/bottom/regular_pants_khaki_b.png",
    option: ["32"],
    buy_date: "2024-07-21",
    order_id: "20240724-0000634",
    status: "배송완료",
    quantity: 1,
  },
]