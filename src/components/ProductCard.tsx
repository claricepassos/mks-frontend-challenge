import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { LoaderComponent } from "./LoaderComponent";
// import { useHistory } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { CartComponent } from "./CartComponent";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Product = {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
};

export type ResPage = {
  products: Product[];
};

const ProductGrid = styled.div`
  width: 938px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;

const ProductCardConteiner = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 217px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 297px;
  height: 297px;
`;

const Image = styled.img`
  width: 110 px;
  height: 110px;
  top: 6.32%;
  bottom: 45.26%;
`;

const Typography = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  padding: 5px;
`;
const Retangle = styled.div`
  left: 65.14%;
  right: 5.5%;
  background: #373737;
  border-radius: 5px;
  height: 26px;
  width: 64px;
  color: white;
  padding: 1px;
`;

const TypographySmall = styled.div`
  font-size: 13px;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
  text-align: left;
  padding: 10px;
  max-height: 90px;
`;
const BlueRetangle = styled.button`
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  width: 218px;
  text-align: center;
  padding: 10px;
`;

const BuyTipography = styled.p`
  font-weight: 600;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  left: 38.07%;
  right: 26.61%;
  top: 21.94%;
  bottom: 34.18%;
`;

export const ProductCard = () => {
  const [product, setProduct] = useState<ResPage>();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { increaseCartQuantity, isCartOpen, closeCart } = useShoppingCart();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const page = 1;
  const rows = 8;
  const sortBy = "id";
  const orderBy = "ASC";

  const getProducts = () => {
    setLoading(true);
    axios
      .get(
        `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
      )
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  console.log();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ProductGrid>
        {loading ? (
          <LoaderComponent />
        ) : (
          product &&
          product.products.map((prod: Product) => (
            <ProductCardConteiner key={prod.id}>
              <Image src={prod.photo} />
              <Typography>{prod.name}</Typography>
              <Retangle>{prod.price}</Retangle>
              <TypographySmall>{prod.description}</TypographySmall>
              <BlueRetangle>
                <BuyTipography
                  onClick={() => {
                    increaseCartQuantity(prod.id), toggleDrawer;
                  }}
                >
                  COMPRAR
                </BuyTipography>
              </BlueRetangle>
            </ProductCardConteiner>
          ))
        )}
      </ProductGrid>
      <Drawer
        open={isCartOpen}
        onClose={closeCart}
        direction="right"
        size={500}
        className="bla bla bla"
      >
         <CartComponent id={0} name={""} photo={""} price={0} description={""} /> 
      </Drawer>
    </>
  );
};