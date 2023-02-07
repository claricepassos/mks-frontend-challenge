import { useEffect, useState } from "react";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../context/Types";

const Conteiner = styled.div`
  height: 100vh;
  padding: 10px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    max-width: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    };
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
text-align: center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
 display: none ;
    };
`;

const Title = styled.div`
  width: 180px;
  padding: 5px;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #ffffff;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-right: 5px ;
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
  margin-top: 55px;
`;

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  background-color: white;
  margin-bottom: 20px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
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
  margin-top: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
`;

const Delete = styled.div`
border-radius: 50%;
z-index: 1;
width: 25px;
height: 25px;
top:0;
background: #000000;
color: white ;
text-align: center;`

const Total = styled.div`
width: 80px;
height: 15px;
left: 1001px;
font-weight: 700;
font-size: 28px;
line-height: 15px;
color: #FFFFFF;
`

export function CartComponent() {
  const [total, setTotal] = useState(0);

  const { closeCart,
    cartItems,
    removeFromCart,
      increaseCartQuantity,
    decreaseCartQuantity } = useShoppingCart();

    const totalSum = () => {
    const totalArr = [] as number[];
    cartItems.forEach((item) => {
      totalArr.push(+item.price * item.quantity);
    });

    const sum = totalArr.reduce((acc, cur) => acc + cur, 0) as number;

    setTotal(sum);
  };

  useEffect(() => {
    totalSum();
  }, );


  return (
    <Conteiner>
      <Title>Carrinho de Compras</Title>
      <Elipse onClick={() => closeCart()}>X</Elipse>
      {cartItems.length > 0 &&
        cartItems.map((prod: Product) => (
          <CartItemContainer>
            <ItemData>
              <Image src={prod.photo} />
              <Text>{prod.name}</Text>
              <Price>R$: {prod.price * prod.quantity}</Price>
            </ItemData>
            <ConteinerCounter>
              <SmallText>Quantidade:</SmallText>
              <ButtonConteiner>
                <MinusText onClick={() => decreaseCartQuantity(prod.id)}>
                  -
                </MinusText>
                {prod.quantity}
                <MinusText onClick={() => increaseCartQuantity(prod.id, prod.photo, prod.name, prod.price, prod.description)}>
                  +
                </MinusText>
              </ButtonConteiner>
            </ConteinerCounter>
            <Delete onClick={() => (removeFromCart(prod.id))}>X</Delete>
          </CartItemContainer>

        ))}
        <Total>Total:R${ total}</Total>

    </Conteiner>
  );
}