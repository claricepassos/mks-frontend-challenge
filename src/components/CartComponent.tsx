import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";
import Apple from "../assets/Apple.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Offcanvas, OffcanvasHeader, OffcanvasTitle, Stack  } from 'react-bootstrap'
import axios from "axios";
import { Item } from "react-bootstrap/lib/Breadcrumb";

const Conteiner = styled.div`
  width: 486px;
  height: 1024px;
  left: 954px;
  top: 0px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

const Title = styled.p`
  width: 180px;
  height: 56px;
  left: 1001px;
  top: 36px;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #ffffff;
`;

const Retangle = styled.div`
  display: flex;
  justify-content: space-around;
  left: 0%;
  right: 1.56%;
  margin-top: 10%;
  height: 100px;
  bottom: 0%;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;

const Image = styled.img`
  left: 5.97%;
  right: 82.08%;
  top: 24.75%;
  height: 100px;
  width: 100px;
  bottom: 18.81%;
`;

const Text = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  display: inline;
`;

const ConteinerCounter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  column-gap: 20px;
`;

const SmallText = styled.p`
  text-align: center;
  margin-top: -50px;
  font-weight: 400;
  font-size: 7px;
  line-height: 6px;
  color: #000000;
`;

const MinusText = styled.button`
  font-size: 9px;
  width: 20px;
  padding: 1px;
  background-color: transparent;
  color: rgb(16, 0, 54);
  border: 1px solid rgb(16, 0, 54);
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;

const ButtonConteiner = styled.div`
  display: flex;
  margin-top: 0;
  background: #FFFFFF;
border: 0.3px solid #BFBFBF;
border-radius: 4px;
`;

type ShoppingCartProps = {
  isOpen: boolean
}

type Product = {
  id: number
  name: string;
  photo: string;
  price: number;
  description: string;
};

export function CartComponent (  ) {
  const [counter, setCounter] = useState(0);
  const { closeCart, cartItems } = useShoppingCart()

  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };


  return (
  <div>Carrinho
  </div>
  )}