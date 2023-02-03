import React from "react";
import styled from "styled-components";
import Vector from "../assets/Vector.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

const HeaderConteiner = styled.div`
  background: #0f52ba;
`;

const LetteringConteiner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;
const HeaderLettering = styled.div`
  left: 4.51%;
  right: 86.6%;
  padding: 5px;
  margin-top: 28px;
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
  mix-blend-mode: normal;
`;
const HeaderLettering2 = styled.div`
  left: 11.46%;
  right: 74.65%;
  margin-top: 45px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  /* or 95% */
  color: #ffffff;
  mix-blend-mode: normal;
`;
const ButtonConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 90px;
  height: 45px;
  left: 1250px;
  top: 35px;
  background: #ffffff;
  border-radius: 8px;
  padding: 10px;
`;

const Img = styled.img`
  margin-top: 10%;
  padding: 10px;
`;

const Number = styled.div`
  margin-top: 10%;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
export const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <HeaderConteiner>
      <LetteringConteiner>
        <HeaderLettering>MKS</HeaderLettering>
        <HeaderLettering2>Sistemas</HeaderLettering2>
      </LetteringConteiner>
      <ButtonConteiner onClick={openCart}>
        <Img src={Vector} alt="carrinho" />
        <Number> {cartQuantity} </Number>
      </ButtonConteiner>
    </HeaderConteiner>
  );
};