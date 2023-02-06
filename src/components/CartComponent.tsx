import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";


const Conteiner = styled.div`
height: 100vh;
padding: 10px ;
background: #0f52ba;
box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

const Title = styled.div`
width: 180px;
height: 56px;
left: 1001px;
top: 36px;
padding: 5px;
font-weight: 700;
font-size: 27px;
line-height: 33px;
color: #FFFFFF;
`

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
background: #FFFFFF;
border: 0.3px solid #BFBFBF;
border-radius: 4px;
padding: 1px;
`;

const Price = styled.div`
margin-top: 20px;
font-weight: 700;
font-size: 14px;
line-height: 17px;
`

type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
};

type ShoppingCartProps = {
  isOpen: boolean
}


export function CartComponent({ id, name, photo, price, description }: Product) {
  const [productCard ]= useState([{ id, name, photo, price, description }])
  const [counter, setCounter] = useState(0);
  const { closeCart, cartItems } = useShoppingCart()

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };


  return (
    <Conteiner>
      <Title>Carrinho de Compras</Title>
      <Retangle>
        {productCard && productCard.map((prod: Product) =>
          <><Image src={prod.photo} />
            <Text>{prod.name}</Text><ConteinerCounter>
              <SmallText>Quantidade:</SmallText>
              <ButtonConteiner>
                <MinusText onClick={() => handleClick1()}>+</MinusText>
                {counter}
                <MinusText onClick={() => handleClick2()}>+</MinusText>
              </ButtonConteiner>
            </ConteinerCounter><Price>R$ {prod.price}</Price></>
        )}
      </Retangle>
    </Conteiner >
  )
}