declare namespace Props {
  interface HeaderMenu {
    idx: number;
    text: string;
    path: string;
  };

  interface ClothInfo {
    idx: number;
    name: string;
    price: string;
    category: string;
    default_img: string;
    mouse_over_img: string;
    option: string[];
    quantity?: number;
  };
};