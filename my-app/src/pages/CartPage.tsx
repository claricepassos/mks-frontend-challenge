import React, { useState } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import { CartComponent } from "../components/CartComponent";

const Conteiner = styled.div`
background-color: #E5E5E5;
height: 100vh ;
`

export const CartPage = () => {

    return (
        <Conteiner>
            <Header />
            <CartComponent/>
        </Conteiner>
    )

}