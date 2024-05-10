export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  point: number;
};

export type CarItem = Guitar & {
  quantity: number;
};

export type GuitarID = Guitar["id"];

export type HeaderProps = {
  handleCartClick: (e: Event) => void;
};

export interface CartRef extends HTMLDivElement {}
// export type CartRef = {
//   current: HTMLDivElement;
//   contains(target: Node):boolean;
// }
