import { ReactNode } from "react";

export type CartItem = {
  id: number;
  quantity: number;

};

export type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
  quantity: number;

};

export type ShoppingCartProviderProps = {
  children: ReactNode
};

export type ShoppingCartProps = {
  isOpen: boolean;
};