import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product, CartItem } from "../context/Types";

const Conteiner = styled.div`
  height: 100vh;
  padding: 10px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

const Title = styled.div`
  width: 180px;
  padding: 5px;
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
  width: 113px;
  font-weight: 400;
  font-size: 13px;
`;

const ConteinerCounter = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50%;
  height: 100%; */
`;

const CartItemContainer = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  flex-direction: row;
`;

const SmallText = styled.p`
  text-align: center;
  margin-top: -50px;
  font-weight: 400;
  font-size: 10px;
  line-height: 6px;
  color: #000000;
  padding: 2px;
`;

const MinusText = styled.button`
  font-size: 10px;
  width: 20px;
  padding: 2px;
  background-color: transparent;
  color: rgb(16, 0, 54);
  border: 1px solid rgb(16, 0, 54);
  cursor: pointer;
  transition: 0.2s ease-in-out;
`;

const ButtonConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  padding: 1px;
`;

const Price = styled.div`
  margin-top: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const Elipse = styled.div`
position: absolute;
border-radius: 50%;
width: 25px;
height: 25px;
left: 80%;
top: 5%;
background: #000000;
color: white;
text-align: center`





export function CartComponent() {
  // const [productCard ]= useState([{ id, name, photo, price, description }])
  const [counter, setCounter] = useState(0);
  const { closeCart, cartItems, removeFromCart } = useShoppingCart();

  const handleIncrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrementCounter = () => {
    if (counter >= 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <Conteiner>
      <Title>Carrinho de Compras</Title>
      <Elipse onClick={()=>closeCart()}>X</Elipse>
      {cartItems.length > 0 &&
        cartItems.map((prod: Product) => (
          <CartItemContainer>
            <ItemData>
              <Image src={prod.photo} />
              <Text>{prod.name}</Text>
              <Price>R$: {prod.price}</Price>
            </ItemData>
            <ConteinerCounter>
              <SmallText>Quantidade:</SmallText>
              <ButtonConteiner>
                <MinusText onClick={() => handleIncrementCounter()}>
                  +
                </MinusText>
                {counter}
                <MinusText onClick={() => handleDecrementCounter()}>
                  -
                </MinusText>
              </ButtonConteiner>
            </ConteinerCounter>

            {/* <Price>R$ total do item: xxxxx</Price> */}
          </CartItemContainer>
        ))}
    </Conteiner>
  );
}